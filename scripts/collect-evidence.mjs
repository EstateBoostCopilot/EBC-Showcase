import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Read metadata only. Never export source, diffs, author emails, or machine paths.
const args = process.argv.slice(2);
const repos = [];
let snapshotDate;
for (let index = 0; index < args.length; index += 1) {
  if (args[index] === '--date') snapshotDate = args[++index];
  else if (args[index] === '--repo') {
    const specification = args[++index] || '';
    const separator = specification.indexOf('=');
    if (separator < 1) throw new Error('Expected --repo label=checkout-directory');
    repos.push([specification.slice(0, separator), resolve(specification.slice(separator + 1))]);
  } else throw new Error(`Unknown argument: ${args[index]}`);
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(snapshotDate || '') || !repos.length) {
  throw new Error('Pass --date YYYY-MM-DD and at least one --repo label=directory.');
}

const repositories = repos.map(([name, cwd]) => {
  const git = (...parameters) => execFileSync('git', parameters, {
    cwd, encoding: 'utf8', windowsHide: true, maxBuffer: 8 * 1024 * 1024
  }).trim();
  if (git('rev-parse', '--is-shallow-repository') !== 'false') {
    throw new Error(`${name}: full history is required for counts.`);
  }
  const authorDates = git('log', '--format=%ad', '--date=short').split('\n').sort();
  const authorNames = git('log', '--format=%an').split('\n');
  const aliases = ['HenryTeo27', 'Henry Teo'];
  const henryAuthorNameCounts = Object.fromEntries(aliases.map(alias => [
    alias, authorNames.filter(name => name === alias).length
  ]));
  return {
    name,
    revision: git('rev-parse', 'HEAD'),
    reachableCommits: Number(git('rev-list', '--count', 'HEAD')),
    reachableNonMergeCommits: Number(git('rev-list', '--count', '--no-merges', 'HEAD')),
    authorDateRange: { first: authorDates[0], last: authorDates.at(-1) },
    commitsBefore2025: Number(git('rev-list', '--count', '--before=2025-01-01T00:00:00+08:00', 'HEAD')),
    distinctRecordedAuthorNames: new Set(authorNames).size,
    henryAuthorNameCounts,
    workingTreeCleanAtCollection: git('status', '--porcelain').length === 0
  };
});

const result = {
  snapshotDate,
  timezone: 'Asia/Singapore',
  definitions: {
    reachableCommits: 'git rev-list --count HEAD; includes merges and all reachable ancestry, not just first-parent main.',
    reachableNonMergeCommits: 'git rev-list --count --no-merges HEAD.',
    authorDateRange: 'Minimum and maximum recorded author date in git log; not independently verified release or employment dates.',
    commitsBefore2025: 'git rev-list --count --before=2025-01-01T00:00:00+08:00 HEAD; Git commit-time filter, includes merges.',
    henryAuthorNameCounts: 'Exact recorded author-name strings only; not identity verification, ownership percentages, or a measure of work quality.',
    crossRepositoryTotal: 'Arithmetic sum of per-repository counts; shared ancestry, where present, is not deduplicated.',
    workingTreeCleanAtCollection: 'Read-only git status check. Counts describe committed history, not uncommitted work.'
  },
  repositories,
  totals: {
    repositories: repositories.length,
    commitsSummedAcrossRepositories: repositories.reduce((sum, item) => sum + item.reachableCommits, 0),
    nonMergeCommitsSummedAcrossRepositories: repositories.reduce((sum, item) => sum + item.reachableNonMergeCommits, 0),
    pre2025CommitsSummedAcrossRepositories: repositories.reduce((sum, item) => sum + item.commitsBefore2025, 0)
  },
  screenshotEvidence: {
    path: 'assets/screenshots/repository-activity.png',
    source: 'Owner-supplied screenshot dated 2026-10-20',
    visibleEbcCommits: 1144,
    visibleDeployments: 224,
    limitation: 'The displayed deployment total is a screenshot observation, not an independently queried live total or a count of distinct production releases.'
  }
};
mkdirSync('evidence', { recursive: true });
writeFileSync('evidence/repository-snapshot.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ snapshotDate, totals: result.totals, clean: repositories.every(item => item.workingTreeCleanAtCollection) }, null, 2));
