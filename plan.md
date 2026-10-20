# EBC Showcase implementation plan

Status: content implemented and locally verified on 20 October 2026. This plan was written before content implementation. Owner-approved destination: `EstateBoostCopilot/EBC-Showcase`, public. Language: English. Research snapshot: 20 October 2026.

## Purpose

Create an interview-ready account of the EBC product ecosystem and Henry Teo's development work. Explain the customer problem, product decisions, software architecture, operational workflows, and engineering trade-offs. Let a technical interviewer move from the main README into concrete case studies.

## Source review completed before this plan

1. **EstateBoostCopilot**: repository instructions, project map, architecture notes, Community/Survey/AI runbook, deployment guide, Prisma model index, PDF extraction route, expansion entry point, country conversion, support integration, and Git history.
2. **EBC Admin**: repository instructions, project map, package dependencies, dashboard areas, task manager, application automation, certificate retrieval, survey designer, support and moderation proxy layout.
3. **WhatsApp Blast**: Electron package, main-process layout, account/session integration, quota bridge, Excel import, campaign UI modules, and Windows/macOS release workflow.
4. **PropCopilot**: repository instructions and project map, existing public product showcase, dependencies, current support bridge, and agent/service layout. This product receives an ecosystem chapter and a link to its dedicated public showcase.
5. **EBC Python**: a separate read-only clone of the private original, outside the showcase. Read Flask entry point, Conda/Docker setup, Gemini and Donut paths, page preprocessing, OCR/BERT classification, and Python expansion modules.
6. **Owner-supplied screenshots**: public homepage, authenticated stamping dashboard, and repository activity. The activity screenshot shows 1,144 commits and 224 deployments. Commit counts will also be checked against local Git snapshots.

## Delivery structure

- `README.md`: substantial public cover, all three supplied screenshots, a concise introduction, product overview, system diagram, engineering highlights, dated delivery evidence, reading routes, and interview contact.
- `docs/01-product-and-impact.md`: customers, problems, product boundaries, pricing separation, and feature-to-value mapping.
- `docs/02-system-architecture.md`: five repositories, runtime boundaries, integration contracts, storage, deployment, and conceptual data model.
- `docs/03-stamping-case-study.md`: PDF to short JSON to deterministic expansion to review, payment, admin execution, and certificate delivery.
- `docs/04-python-and-document-ai.md`: Python service, OCR/classification/Donut history, training artifacts, formatting algorithms, and later extraction architecture.
- `docs/05-whatsapp-blast.md`: desktop sessions, imports, sending controls, cloud quotas, scheduling, and release engineering.
- `docs/06-admin-operations.md`: work queues, browser automation, payment operations, support, moderation, surveys, and storage cleanup.
- `docs/07-propcopilot.md`: desktop execution, AI orchestration, shared EBC APIs, context, usage accounting, and the dedicated showcase.
- `docs/08-community-surveys-support.md`: stateful UI, community ranking, nested discussions, survey lifecycle, retrieval-assisted support, and human takeover.
- `docs/09-payments-data-reliability.md`: payment boundaries, relational modeling, usage ledgers, migrations, retries, observability, and engineering lessons.
- `docs/10-history-and-evidence.md`: dated Git snapshots, activity image interpretation, pre-2025 examples, contribution attribution, and limits of the evidence.
- `docs/11-interview-guide.md`: short and long walkthroughs, skill matrix, design questions, and discussion prompts.
- `docs/12-capability-index.md`: broader feature inventory, including smaller capabilities that should not disappear behind flagship products.
- `docs/source-review.md`: selected private source paths and snapshot identifiers that support claims, without publishing private implementation or customer data.
- `assets/`: cover, architecture/workflow visuals, and publishable screenshots.
- `evidence/repository-snapshot.json`: sanitized dates, revision identifiers, counts, and counting definitions.
- `scripts/validate-showcase.mjs`: local links, assets, public-file allowlist, secret-pattern checks, and evidence consistency checks.
- `.github/workflows/validate.yml`: rerun the public-artifact checks on future changes.

## Presentation decisions

Use a restrained editorial visual style: warm light background, charcoal text, muted blue/green accents, numbered sections, and readable diagrams. Put the supplied screenshots near the top of the README. Diagrams must be readable without access to private repositories. Provide SVG overview images for fast viewing and editable Mermaid diagrams for detailed workflows. Keep this repository useful directly on GitHub; it must not require a running backend, a login, or paid AI calls.

## Accuracy and attribution

- Separate what exists in reviewed source, what a screenshot shows, and what is a design interpretation.
- Describe 2023-2024 work as pre-2025 development. Do not claim that period had no AI tools.
- Describe repository commit counts as team history, including merges, rather than equating them to personal output or unique features.
- Recognize the team. Explain Henry's contribution using verified author-name evidence and his owner-provided project account.
- Treat the RM10 amount in the supplied screenshots as captured service-fee copy, separate from government duty and any later price changes.
- Do not invent user totals, revenue, extraction accuracy, time savings, uptime, or external approval guarantees.
- Distinguish historical Python/Donut work from the current TypeScript extraction entry point.
- Omit unrelated personal research and Casio/Vori service endpoints from the EBC business showcase.

## Publication controls

Create a new Git repository with new history. Never merge or push private application history into it. Do not change private source repositories, their remotes, deployed services, databases, environment variables, or paid automation tasks. Publish original explanatory writing, diagrams, sanitized metadata, and owner-approved screenshots only. Conceal customer filenames in the stamping screenshot before publishing it. No databases, PDFs, raw logs, datasets, prompts, credentials, local machine paths, session data, or private code copies belong in this repository.

## Execution sequence

1. Finish targeted source checks and record sanitized repository evidence.
2. Prepare the privacy-edited screenshot and visual assets.
3. Write the public README and the linked chapters from verified source behavior.
4. Add the interview route, source review, evidence definitions, and validation script.
5. Check every local link, rendered diagram syntax, image, evidence count, and public file.
6. Review the staged file list and commit only the standalone showcase.
7. Create `EstateBoostCopilot/EBC-Showcase` as a public repository, push its new `main`, and verify public visibility, files, and validation results.

## Acceptance criteria

- An interviewer can understand the business and Henry's engineering breadth within three minutes.
- A technical reader can follow at least five complete workflows across repository boundaries.
- All five named source repositories receive meaningful coverage.
- All three requested screenshots appear on the README cover section in publishable form.
- Historical dates and activity counts have explicit sources and limits.
- There are no private credentials, customer documents, or copied implementation files.
- The public GitHub URL opens and the repository passes its standalone validation.

## Local completion record

- Twelve topic chapters, source review, interview guide, media notes, standalone metadata and maintenance checks are prepared.
- All three requested screenshots are present in the README. Customer filenames are concealed in the application screenshot.
- The cover and two SVG diagrams were rendered and inspected.
- All 14 Mermaid diagrams passed syntax parsing.
- The standalone validator passed for 30 public files and 133 local links, including evidence arithmetic and publication checks.
- Private application checkouts were used for read-only research. No product deployment, environment change, database operation, or private-source push is part of this publication.
