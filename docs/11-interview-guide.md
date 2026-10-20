# Interview walkthrough

[Showcase home](../README.md) · [Architecture](02-system-architecture.md) · [History and attribution](10-history-and-evidence.md)

This guide helps an interviewer or academic reviewer connect the products to the engineering work behind them. It also gives Henry a concise route through the material.

## A three-minute introduction

> I am Henry Teo, also known as Teo EeHern. I founded ACCELER TECHNOLOGY and work on product and software development in the Estate Boost Copilot ecosystem. EBC is a team project, and I am an active contributor across its web, Python, admin, and desktop repositories.
>
> The platform serves property-related workflows. A good example is tenancy agreement stamping. A customer uploads a PDF. AI extracts a compact data structure. Our software normalizes and expands it into the larger form, then the customer reviews it. Payment, operator processing, certificate retrieval, and delivery are connected to the same case.
>
> The wider system includes a Next.js website and backend, a Flask-based Python processing service, an Admin console with browser automation, an Electron WhatsApp Blast product, and the newer PropCopilot desktop workspace. Shared APIs connect accounts, billing, files, AI access, Community, and Support.
>
> My experience includes writing transformation algorithms, building forms and APIs, integrating models and payment services, managing data changes, debugging cross-system failures, and improving user and operator workflows. The recorded EBC history begins in 2023, with concrete web, Admin, and Python work before 2025.
>
> I would start a technical discussion with the PDF-to-form pipeline. It makes the design decisions clear: what AI should extract, what software should calculate, what a user must check, and how the operational system confirms completion.

Use this as a speaking outline. Personal responsibilities should be described in Henry's own words and supported by the relevant work examples.

## A ten-minute walkthrough

1. **The customer problem, one minute.** Show the homepage and stamping workspace. Explain why document preparation and manual follow-through are difficult.
2. **The system, one minute.** Show the [five-repository diagram](02-system-architecture.md). Explain cloud, desktop, Python, and operator responsibilities.
3. **The core engineering, three minutes.** Walk through [stamping extraction and expansion](03-stamping-case-study.md). Use nationality versus address country, shared person arrays, and rental sessions as examples.
4. **Python depth, two minutes.** Explain [page preprocessing, BERT classification, Donut, and formatting](04-python-and-document-ai.md). Distinguish historical and current paths.
5. **Operating and shipping, two minutes.** Explain [Admin automation](06-admin-operations.md), payment state, failure recovery, and desktop release packaging.
6. **Evidence and reflection, one minute.** Show the [dated history](10-history-and-evidence.md). Explain team attribution and one lesson that changed the design.

## Choose a technical deep dive

| Interview focus | Best route | Questions it can answer |
| --- | --- | --- |
| Full-stack development | Stamping and shared architecture | How does input become a validated form and persistent case? |
| Python and applied AI | Python/document AI | How do preprocessing, classification, parsing and deterministic rules cooperate? |
| Backend and databases | Payments/data/reliability | How are ownership, status, transactions, migrations and usage modeled? |
| Desktop engineering | WhatsApp Blast and PropCopilot | How do local sessions/files connect to cloud services and shipping? |
| Frontend and UX | Community, surveys and review forms | How do optimistic updates, lazy loading and validation help users? |
| Automation and operations | Admin | How does an external browser action become a confirmed case transition? |
| AI systems | Support and PropCopilot | How do retrieval, tools, context, permissions and accounting fit together? |
| Product judgment | Product/customer value | Which engineering decisions follow from customer and operator needs? |

## Concrete questions to discuss

### Why not ask the model to fill the entire official form?

The compact extraction schema stays close to the document. Expansion then applies explicit rules and option mappings. This makes business behavior easier to inspect, test, and change, while the customer can still review the result.

### What was difficult about addresses?

A person's nationality, their postal address country, and the premises address are different concepts. A nonempty object can still lack a usable address. Defaults, origin-only text, country aliases, and the remaining address segments need distinct rules.

### What does Python experience mean in this project?

It includes Flask endpoints, asynchronous processing, Conda/Docker setup, PDF/image preparation, OCR, BERT/Donut integration, training notebooks, domain formatting, and cross-service result/status handling. Explain a module in detail rather than listing libraries alone.

### How do you know an operation completed?

Identify the relevant evidence: a stored record, a verified provider response, a retrieved file, an observed portal result, or delivery state. Explain why a UI click or a model sentence is not enough for every operation.

### How would you handle a retry?

First classify the failure. A network error, billing denial, invalid payload, and uncertain paid action have different rules. Bound retries by time and cost, keep request identity, and check whether repeating the operation can duplicate an effect.

### Why did AI usage need a ledger?

One request can have multiple attempts, provider differences, reservations, and uncertain usage. A ledger preserves the funding source and evidence needed for settlement or later reconciliation.

### How did user feedback change implementation?

Examples include first-error navigation in long forms, distinguishing a comment composer from the thread, optimistic reaction updates, preserving unanswered surveys across page exits, and immediate Admin refresh after lifecycle changes.

### What would you improve next?

Discuss a specific boundary: a consented extraction benchmark, durable queueing for an earlier threaded Python service, provider-cost reconciliation, a clearer file lifecycle, or tests around an ambiguous automation outcome. Improvement proposals are not presented as completed work.

## Skill-to-work map

| Skill | A concrete example to explain |
| --- | --- |
| TypeScript / JavaScript | Form expansion and option matching; shared API adapters |
| Python | Document preprocessing and format normalization |
| Applied machine learning | Page classification, document parsing, training/model artifacts |
| React / Next.js | Review forms, shared Community surfaces, in-house survey UI |
| Node.js / Electron | IPC, account sessions, local imports, packaged desktop releases |
| SQL / Prisma | Case relationships, workflow enums, indexes and migration management |
| Integration | Billplz, Google, AI providers, SMTP, object storage |
| Browser automation | Application form entry and certificate workflow |
| Reliability | Provider failure classification, request identity, usage reservations, and state reconciliation |
| Product engineering | Designing the full customer and operator journey |
| Collaboration | Shared contracts, team attribution, source evidence, and cross-repository change coordination |

## Show the right evidence

Open the three supplied screenshots from the README. Explain the diagrams. Use the historical examples to establish a timeline. If an interviewer requests code, discuss an authorized private review or a separately prepared, original demonstration. This public repository intentionally does not contain company implementation or customer documents.

Avoid converting commit totals into personal work percentages or deployment counts into unique releases. The strongest demonstration is a precise explanation of a design, an implementation decision, a failure, and the resulting improvement.

[Next: capability index](12-capability-index.md)
