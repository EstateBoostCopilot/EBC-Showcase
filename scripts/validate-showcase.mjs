import { readdirSync, readFileSync, lstatSync, existsSync } from 'node:fs';
import { dirname, extname, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const failures = [];
const files = [];
const fail = (file, message) => failures.push(`${file}: ${message}`);
const permittedRoots = new Set(['README.md', 'plan.md', 'NOTICE.md', 'AGENTS.md', '.gitignore', '.gitattributes']);
const permittedFolders = new Set(['docs', 'assets', 'evidence', 'scripts', '.github']);
const permittedExtensions = new Set(['.md', '.svg', '.png', '.json', '.mjs', '.yml']);

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const full = resolve(directory, entry.name);
    const file = relative(root, full).split(sep).join('/');
    if (lstatSync(full).isSymbolicLink()) {
      fail(file, 'Symlinks cannot be part of the publication.');
      continue;
    }
    const first = file.split('/')[0];
    if (entry.isDirectory()) {
      if (!permittedFolders.has(first)) fail(file, 'Folder is outside the public artifact allowlist.');
      else walk(full);
    } else {
      files.push(file);
      if (file.includes('/') ? !permittedFolders.has(first) : !permittedRoots.has(file)) {
        fail(file, 'File is outside the publication allowlist.');
      }
      if (!permittedRoots.has(file) && !permittedExtensions.has(extname(file))) {
        fail(file, 'Unexpected file type.');
      }
    }
  }
}
walk(root);

const contents = new Map();
const headings = new Map();
const slug = value => value.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}_ -]/gu, '').replace(/ /g, '-');
const secretPatterns = [
  ['OpenAI credential', /sk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{24,}/],
  ['Google API credential', /AIza[A-Za-z0-9_-]{30,}/],
  ['GitHub credential', /(?:gh[pousr]_[A-Za-z0-9_]{25,}|github_pat_[A-Za-z0-9_]{25,})/],
  ['Blob credential', /vercel_blob_rw_[A-Za-z0-9_]{16,}/],
  ['Private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['Credential-bearing connection string', /(?:postgres(?:ql)?|redis(?:s)?):\/\/[^\s"']+/i],
  ['Machine user path', /[A-Za-z]:[\\/](?:Users|users)[\\/][^\s"']+/],
  ['Private blob URL', /https:\/\/[A-Za-z0-9-]+\.public\.blob\.vercel-storage\.com\//],
  ['Internal prompt identifier', /pmpt_[A-Za-z0-9]{16,}/]
];

for (const file of files) {
  const bytes = readFileSync(resolve(root, file));
  if (bytes.length > 12 * 1024 * 1024) fail(file, 'Asset exceeds 12 MiB.');
  if (extname(file) === '.png') {
    if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') fail(file, 'Invalid PNG signature.');
    else if (bytes.readUInt32BE(16) < 600 || bytes.readUInt32BE(20) < 200) fail(file, 'Screenshot is too small.');
    continue;
  }
  const text = bytes.toString('utf8');
  contents.set(file, text);
  if (text.includes('\uFFFD')) fail(file, 'Invalid UTF-8 replacement character.');
  if (text.charCodeAt(0) === 0xfeff) fail(file, 'Unexpected UTF-8 BOM.');
  for (const [label, pattern] of secretPatterns) if (pattern.test(text)) fail(file, `Possible ${label}; inspect without logging its value.`);
  if (extname(file) === '.svg') {
    if (!text.includes('<svg ') || !text.includes('</svg>') || !text.includes('viewBox=')) fail(file, 'Incomplete SVG asset.');
    if (/<script|<foreignObject|(?:href|src)=["']https?:/i.test(text)) fail(file, 'SVG must be self-contained and non-executable.');
  }
  if (extname(file) === '.md') {
    const ids = new Set();
    const used = new Map();
    for (const match of text.matchAll(/^#{1,6}\s+(.+)$/gm)) {
      const id = slug(match[1]);
      const count = used.get(id) || 0;
      ids.add(count ? `${id}-${count}` : id);
      used.set(id, count + 1);
    }
    for (const match of text.matchAll(/\bid=["']([^"']+)["']/g)) ids.add(match[1]);
    headings.set(file, ids);
    if ([...text.matchAll(/^```/gm)].length % 2) fail(file, 'Unclosed fenced code block.');
    for (const match of text.matchAll(/```mermaid\n([\s\S]*?)```/g)) {
      if (!/^(?:flowchart|sequenceDiagram|stateDiagram-v2|erDiagram|timeline)\b/.test(match[1].trim())) {
        fail(file, 'Unexpected Mermaid diagram kind.');
      }
    }
  }
}

let checkedLinks = 0;
for (const [file, text] of contents) {
  if (!file.endsWith('.md')) continue;
  const targets = [
    ...[...text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)].map(match => match[1]),
    ...[...text.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)].map(match => match[1])
  ];
  for (let target of targets) {
    target = target.replace(/^<|>$/g, '').split(' "')[0];
    if (/^(?:https?:|mailto:)/i.test(target)) continue;
    checkedLinks += 1;
    const [urlPath, fragment] = target.split('#');
    const full = urlPath ? resolve(root, dirname(file), decodeURIComponent(urlPath)) : resolve(root, file);
    const linked = relative(root, full).split(sep).join('/');
    if (linked.startsWith('../') || !existsSync(full)) fail(file, `Broken local link: ${target}`);
    else if (fragment && linked.endsWith('.md') && !headings.get(linked)?.has(decodeURIComponent(fragment))) {
      fail(file, `Unknown local heading: ${target}`);
    }
  }
}

try {
  const evidence = JSON.parse(contents.get('evidence/repository-snapshot.json'));
  if (evidence.snapshotDate !== '2026-10-20') fail('evidence/repository-snapshot.json', 'Update narrative dates when refreshing evidence.');
  if (evidence.repositories.length !== 5) fail('evidence/repository-snapshot.json', 'Expected five reviewed repositories.');
  for (const item of evidence.repositories) {
    if (!/^[a-f0-9]{40}$/.test(item.revision)) fail(item.name, 'Invalid recorded Git revision.');
    if (item.reachableNonMergeCommits > item.reachableCommits || item.commitsBefore2025 > item.reachableCommits) fail(item.name, 'Inconsistent history counts.');
  }
  const sum = key => evidence.repositories.reduce((total, item) => total + item[key], 0);
  if (sum('reachableCommits') !== evidence.totals.commitsSummedAcrossRepositories || sum('commitsBefore2025') !== evidence.totals.pre2025CommitsSummedAcrossRepositories) {
    fail('evidence/repository-snapshot.json', 'Incorrect arithmetic total.');
  }
  const readme = contents.get('README.md') || '';
  for (const number of [evidence.totals.commitsSummedAcrossRepositories, evidence.totals.pre2025CommitsSummedAcrossRepositories, evidence.screenshotEvidence.visibleEbcCommits, evidence.screenshotEvidence.visibleDeployments]) {
    if (!readme.includes(number.toLocaleString('en-US'))) fail('README.md', 'An evidence headline is missing.');
  }
  for (const image of ['ebc-homepage.png', 'stamping-dashboard-privacy-edited.png', 'repository-activity.png']) {
    if (!readme.includes(`assets/screenshots/${image}`)) fail('README.md', `Requested cover image is missing: ${image}`);
  }
} catch (error) {
  fail('evidence/repository-snapshot.json', `Cannot validate evidence: ${error.message}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Showcase validation passed: ${files.length} public files, ${checkedLinks} local links, evidence totals and publication checks.`);
}
