# Source review and publication record

[Showcase home](../README.md) · [Evidence definitions](10-history-and-evidence.md) · [Media notes](media-notes.md)

Review date: **20 October 2026**. This is a public explanation of private software. The review used repository instructions, architecture maps, selected implementation paths, configuration, committed history, and three owner-supplied screenshots.

The review followed representative workflows across boundaries. It did not inspect every line in every repository or run an end-to-end production acceptance test. The paths below identify supporting material for an authorized reviewer without reproducing it.

## Reviewed repositories

| Private original | Recorded revision | History and content basis |
| --- | --- | --- |
| `EstateBoostCopilot/EstateBoostCopilot` | `bebeb22c3960d5eddb5ec9fa65344dd47a6075d6` | Clean checkout; shared web/backend source and full reachable history |
| `EstateBoostCopilot/ebc-admin` | `288439a17e1bfea9db1683f713454819115ba2be` | Clean checkout; Admin map, automation, UI areas and full reachable history |
| `EstateBoostCopilot/EbcPython` | `53d08026a97e0bd6d90f28391622ae7e8decdb72` | Separate clean clone; Python source, model paths, environment/deployment files and full history |
| `EstateBoostCopilot/WhatsappBlast` | `4fef082858cff78e6876ae025431e60f86665a2f` | Clean checkout; desktop integration, import, quota and release paths, plus full history |
| `EstateBoostCopilot/PropCopilot` | `3b94613c74c25355380b52ce8579f0c3d73cbe00` | Committed-history metadata plus local source/maps; working-tree changes were present |

The PropCopilot chapter combines reviewed local integration code with the existing public showcase and architecture map. Where the working tree has moved ahead of its recorded revision, a module observation should not be read as proof that the module was shipped in that exact commit.

## Selected evidence paths

Paths are relative to the named private repository. They are source locators, not working links into this public repository.

| Evidence ID | Source locators | Claims supported |
| --- | --- | --- |
| E01 | EBC: `general/package.json`, `general/agents/docs/agents/project-map.md`, `general/prisma/schema.prisma` | Next.js/React/Prisma foundation, main domain families, build responsibilities |
| E02 | EBC: `general/app/api/lhdn/runGemini/route.ts`, `general/app/main/lhdn/_components/uploadUtils.ts` | Stored-PDF extraction request and visible processing state |
| E03 | EBC: `general/app/utils/lhdn/gemini.ts`, `general/app/utils/expandJson.ts`, `general/app/utils/expand/receiveAndGenerate.ts` | Compact extraction, normalization, expansion and rental-session contract |
| E04 | EBC: `general/app/utils/expand/process/processEntity.ts`, `general/app/utils/expand/check/checkAddressIncomplete.ts`, `general/app/utils/convertId/convertId.ts` | Person arrays, nationality/address distinction, fallback rules and country matching |
| E05 | EBC: `general/app/main/lhdn/_components/EditForm/`, `general/app/main/calculator/calculator.ts` | Editable review workflow and property-calculation algorithms |
| E06 | EBC: `general/app/utils/billplz/invoice.ts`, `general/app/api/whatsappBlast/callback/route.ts`, `general/prisma/schema.prisma` | Payment-data PDF artifacts, entitlement periods and order relationships |
| E07 | EBC: `general/app/community/_components/CommunityApp.tsx`, `general/app/utils/community/server.ts`, `general/app/api/community/` | Feed, optimistic reactions, pagination, score calculation and domain endpoints |
| E08 | EBC: `general/app/utils/surveys/inHouseSurveyTypes.ts`, `general/app/_components/SurveyModal.tsx`, `general/app/api/surveys/` | Ten question types, shared schema and survey lifecycle |
| E09 | EBC: `general/app/utils/support/openAiSupport.ts`, `general/app/utils/support/messageService.ts`, `general/app/utils/support/context.ts`, `general/app/utils/support/handoff.ts` | Model integration, context boundary, owned service context, turns/budget/leases and handoff |
| E10 | EBC: `general/app/utils/propCopilotQuota.ts`, `general/app/utils/propCopilotAi.ts`, `general/app/utils/propCopilotAiUsage.ts` | AI integration, usage reservation, estimates, settlement and reconciliation |
| E11 | EBC: `general/app/utils/admin/clearData.ts`, `general/agents/docs/agents/automatic-deployment.md`, `general/agents/docs/agents/community-survey-ai-runbook.md` | Cleanup rules, deployment route and durable operational lessons |
| A01 | Admin: `package.json`, `agents/docs/agents/project-map.md`, `app/(main)/_components/Sidebar/sidebarItems.tsx` | Operator runtime, navigation and work areas |
| A02 | Admin: `app/utils/automaTaskManager/automaTaskManager.ts`, `app/utils/automaTaskManager/newApplicationFetcher.ts`, `scripts/automation/applyForm.ts`, `scripts/automation/getSijil.ts` | Task coordination, browser operations and multi-session form entry |
| A03 | Admin: `app/(main)/userSurvey/`, `app/(main)/community/`, `app/(main)/support/`, `app/(main)/lhdnStamping/`, `app/api/` | Admin surfaces and EBC-facing proxy responsibilities |
| P01 | Python: `README.md`, `server.py`, `environment.yml`, `Dockerfile`, `gunicorn.conf.py` | Flask service, background thread, environment and deployment setup |
| P02 | Python: `utils/donut/preprocessDonut.py`, `utils/donut/tablePredict.py`, `utils/donut/parsePredict.py`, `setup.py` | PDF/image preparation, OCR/BERT classification, Donut and model artifacts |
| P03 | Python: `script/donut/lhdn_classify_training/Finetune.ipynb`, `script/donut/lhdn_parsing_training/Finetune.ipynb` | Presence of separate classification/parsing training notebooks; private data and outputs were not published |
| P04 | Python: `utils/runDonut.py`, `utils/runGemini.py`, `utils/expandJson.py`, `utils/expand/`, `utils/convertId/`, `utils/expandTestor/` | Historical/selected processing paths and modular domain transformations |
| W01 | WhatsApp Blast: `package.json`, `src/main/index.js`, `src/main/whatsapp/client.js`, `src/main/whatsapp/handlers.js` | Electron runtime and WhatsApp Web session integration |
| W02 | WhatsApp Blast: `src/main/file/excel.js`, `src/main/api/quota.js`, `src/renderer/js/features/` | Imports, cloud quota bridge and customer capability modules |
| W03 | WhatsApp Blast: `.github/workflows/build.yml`, `src/main/updater/autoUpdater.js`, `scripts/build-secure.js` | Tagged desktop builds, update integration and packaging steps |
| D01 | PropCopilot: `package.json`, `agents/docs/agents/project-map.md`, `src/main/services/`, `src/renderer/js/features/` | Desktop/runtime breadth and documented integration boundaries |
| D02 | PropCopilot: `src/main/services/supportService.js`, `src/main/services/mainAgentRuntimeService.js` | EBC support bridge and current runtime facade |
| H01 | All five: read-only `git log`, `git rev-list`, `git rev-parse`, `git status` | Dates, revision identifiers, counts, author-name matches and working-tree caveat |
| M01 | Owner-supplied homepage, stamping workspace and repository screenshots | Captured product UI and displayed activity counts |

## Publication decisions

Only original explanatory prose, code-native diagrams, sanitized metadata, small standalone validation/collection utilities, and approved screenshots are included. No private Git history is imported into the new repository.

Customer filenames in the stamping image were replaced with generic labels using the built-in image-generation editor. The other two images were supplied for this publication and copied as visual evidence. [Media notes](media-notes.md) record provenance and the edit prompt.

No customer records, documents, datasets, prompt IDs, private model artifacts, tokens, database URLs, machine paths, or environment files are required to read the showcase. Unrelated personal services hosted in the EBC backend are outside this portfolio's business scope.

## Verification performed for the public artifact

The repository includes [a local validator](../scripts/validate-showcase.mjs) and [a CI workflow](../.github/workflows/validate.yml). They check publication paths, local links and anchors, image signatures, diagram blocks, secret-like strings, and consistency of the sanitized evidence.

Diagram parsing and visual review supplement those checks during initial publication. They validate this public documentation package. They do not certify the private applications, external providers, legal/tax rules, payment security, or deployment availability.

The local source checkouts were used for research only. Publishing this repository does not change those services, their remotes, their production databases, or their deployment configuration.
