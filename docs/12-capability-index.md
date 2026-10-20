# Capability index

[Showcase home](../README.md) · [Source review](source-review.md)

This index records the breadth represented in the reviewed ecosystem. Rows describe source-observed modules or documented product behavior. Availability depends on product version and configuration; retained historical code is identified where relevant.

## Customer website and shared platform

| Capability | Engineering represented | Read more |
| --- | --- | --- |
| Public product discovery and navigation | Customer entry paths and product communication | [Products](01-product-and-impact.md) |
| Signup, login, Google OAuth, logout and profile | Account lifecycle and protected UI | [Architecture](02-system-architecture.md) |
| Profile pictures and contact information | Media references and editable profile data | [Reliability](09-payments-data-reliability.md) |
| Tenancy PDF upload | Direct object-storage integration and case state | [Stamping](03-stamping-case-study.md) |
| Document extraction | AI prompt/output contract and error handling | [Stamping](03-stamping-case-study.md) |
| Short-to-long JSON expansion | Deterministic domain transformation | [Stamping](03-stamping-case-study.md) |
| Local, foreign-person, and company paths | Identity-specific form logic | [Stamping](03-stamping-case-study.md) |
| Country and state conversion | Text normalization, aliases and option mapping | [Stamping](03-stamping-case-study.md) |
| Multiple rental periods | Repeated structures across AI, review and executor | [Stamping](03-stamping-case-study.md) |
| Long editable forms | Validation, first-error navigation and useful input controls | [Stamping](03-stamping-case-study.md) |
| Empty-phone autofill preference | Profile-backed convenience applied at the review layer | [Stamping](03-stamping-case-study.md) |
| Stamping status and downloadable artifacts | Persistent customer-visible progress | [Admin](06-admin-operations.md) |
| Property and fee calculators | Mortgage, fees, rental and affordability calculations | [Products](01-product-and-impact.md) |
| Notices and FAQs | Customer information publishing | [Admin](06-admin-operations.md) |
| Referrals and product entitlements | Account-linked product growth and access | [WhatsApp Blast](05-whatsapp-blast.md) |
| Tables, rows, cells, teams and sharing | Relational collaboration models and permissions | [Architecture](02-system-architecture.md) |

## Python document-processing work

| Capability | Engineering represented |
| --- | --- |
| Flask health and processing endpoints | Python service interface and request handling |
| API-key/CORS integration | Cross-service boundary configuration |
| Background processing thread | Async service behavior and lifecycle trade-offs |
| PDF/image conversion | Preparation of model input |
| OCR and BERT page classification | Text extraction and learned page selection |
| Donut structured parsing | Vision encoder-decoder model integration |
| Training notebooks and local model setup | Classification/parsing experimentation and artifact handling |
| Normalizers for dates, rent, phone and identity | Domain algorithms beyond model inference |
| Entity/premises expansion and option conversion | Cross-language structured-data pipeline |
| Formatting comparison scripts | Iterative algorithm development |
| Conda, Gunicorn and Docker | Python environment and service deployment |

These include historical paths. [The Python chapter](04-python-and-document-ai.md) identifies the selected Flask entry point and the later EBC TypeScript implementation.

## WhatsApp Blast desktop product

| Capability | Engineering represented |
| --- | --- |
| Electron main and renderer modules | Desktop process boundaries |
| Account/session setup and restoration | WhatsApp Web connection lifecycle |
| CSV and Excel import | Native dialogs and structured file parsing |
| Phonebook and contact controls | Local customer data organization |
| Templates and attachments | Message preparation and reusable content |
| Sender and multi-account controls | Asynchronous execution and account selection |
| Fixed/random/spread pacing options | Explicit task configuration |
| Scheduling and history | Deferred work and result visibility |
| Safety/error surfaces | Clear connection and campaign feedback |
| EBC quota check, deduction and pending sync | Desktop/cloud usage integration |
| Referrals and account-linked purchase flow | Cross-product commercial integration |
| Installers, updates and version-tag builds | Windows/macOS release engineering |

[Detailed case study](05-whatsapp-blast.md).

## Admin and business operations

| Capability | Engineering represented |
| --- | --- |
| Dashboard and work sections | Operator attention management |
| Stamping search and selection | Case discovery and batch intent |
| Application task manager | Coordinated browser workflows |
| Login/application/certificate/draft-clear actions | Puppeteer and official-portal state handling |
| Manual certificate sending and resend | Validated communication workflow |
| Payment and fee-error surfaces | Exception handling and operator visibility |
| Notices and FAQ management | Customer knowledge operations |
| Survey designer, preview, history and responses | Shared schema and full lifecycle UI |
| Community moderation and reports | State-driven actions and auditability |
| Review queue and activity reappearance | Reducing repeated operator work |
| AI-assisted FAQ drafting | Draft, review and publish boundaries |
| Support takeover, replies, close and return-to-AI | Shared ownership and human service |
| Runtime incident review | Product diagnostics and follow-up |
| Blob cleanup preview and execution | Database-aware file maintenance |
| Reminder services | Startup/periodic operational checks and email integration |

[Admin chapter](06-admin-operations.md). Retained payment automation scripts are not represented as an active unattended scheduler.

## Community, surveys and support

| Capability | Engineering represented |
| --- | --- |
| One-column feed and content expansion | Readable product UI and local state |
| Nested comments and collapsed reply branches | Relational trees and lazy interaction |
| Inline mentions and people search | Querying and structured text interaction |
| Reactions, single-choice polls and view records | Separate engagement rules and constraints |
| Hot/top/new feed modes | Ranking versus chronological presentation |
| Infinite scroll and optimistic actions | Responsiveness and failure reconciliation |
| Notifications and read state | Event descriptions, unread count and navigation |
| Reports and moderation | Content lifecycle and operator controls |
| Ten survey question types | Versioned schema and typed rendering |
| Required/optional completion and dismissal | User intent and response lifecycle |
| Stop/resume survey | Administrative state with preserved history |
| Stored support cases/messages/images | Durable user-visible history |
| Retrieval-assisted answers and stored prompt configuration | Managed model configuration and business knowledge |
| Account-context function | Authenticated, limited service-data access |
| 72-hour AI context boundary | Separating model memory from case history |
| Per-turn keys, leases and budgets | Duplicate/concurrent request and usage controls |
| Human handoff and admin notification | Persistent escalation and delivery evidence |

[Community, Survey, and Support chapter](08-community-surveys-support.md).

## PropCopilot and shared cloud AI

| Capability family | Work represented |
| --- | --- |
| Listing workspace and platform-form variants | Organized property records and publication preparation |
| Connected platforms and browser execution | Account state, supported actions, and external observations |
| Tenancy files and cloud stamping records | Distinguishing local discovery from server business data |
| Client/conversation and messaging features | Communication context and permitted follow-through |
| Performance and work history | Available metrics, task events and reporting |
| Context, memory and agent runtime modules | Relevant inputs, continuation, tools and result review |
| Permissions and external-action policy | Application control over proposed work |
| Knowledge and screening module families | Structured domain context with separate evidence/lifecycle concerns |
| EBC support/community adapters | Shared account-owned product surfaces |
| Google/Gmail integration | Product account connections and service state |
| Provider routing and output contracts | Common product interface over different model services |
| Subscriptions, quota and usage ledgers | Funding, admission, settlement and reconciliation |
| Runtime diagnostics and evaluation scripts | Failure visibility and scoped verification infrastructure |

[Integration chapter](07-propcopilot.md) · [Dedicated product showcase](https://github.com/EstateBoostCopilot/PropCopilot-Showcase).

## Deliberate scope

The EBC server also contains endpoints for unrelated personal projects. They are not part of this business showcase. Removed product experiments and old UI pages are not advertised as current functionality. The [source-review record](source-review.md) explains what was examined and what remains unverified.
