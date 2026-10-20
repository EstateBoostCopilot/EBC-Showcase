# Media provenance

[Showcase home](../README.md) · [Source review](source-review.md)

All three source screenshots were supplied by the project owner for this public showcase. The capture filenames identify 20 October 2026. Screenshots are interface/activity illustrations, not live telemetry or a benchmark.

| Public asset | Origin and treatment |
| --- | --- |
| `assets/screenshots/ebc-homepage.png` | Owner-supplied homepage capture; copied without pixel editing |
| `assets/screenshots/repository-activity.png` | Owner-supplied private-repository activity capture; copied without pixel editing. Displays 1,144 commits and 224 deployments |
| `assets/screenshots/stamping-dashboard-privacy-edited.png` | Owner-supplied authenticated stamping workspace; privacy-edited with the built-in image generation tool |
| `assets/cover.svg` | Original SVG created for this showcase, with dated evidence labels |
| `assets/diagrams/ecosystem.svg` | Original SVG architecture explanation based on the source review |
| `assets/diagrams/stamping-workflow.svg` | Original SVG workflow explanation based on the source review |

## Privacy edit

The edit replaces the six visible customer filenames with `Agreement 01.pdf` through `Agreement 06.pdf`. It preserves the overall interface and owner profile. Because the editor is generative, small visual differences outside those cells may remain. The README labels the image accordingly.

The original customer-file screenshot is not included in the public repository. The replacement labels do not identify real customers or transactions.

Final edit prompt, using the built-in tool:

> Use case: precise-object-edit. Edit target: the attached real EBC authenticated stamping dashboard screenshot. Asset type: public engineering portfolio screenshot. Preserve the entire screenshot layout, sidebar, owner's name Teo / EeHern, branding, header, pricing copy and statuses as closely as possible. Only privacy-edit the six filename cells in the file list, including partial visible names and numerical filenames: replace each filename text with a neutral label 'Agreement 01.pdf', 'Agreement 02.pdf', 'Agreement 03.pdf', 'Agreement 04.pdf', 'Agreement 05.pdf', 'Agreement 06.pdf'. No original address, property name, customer name or numerical identifier from those cells may remain. Keep the document icons and all 'Sent to Customer' status cells. Keep the same light colors and geometry. No new controls, no feature additions, no invented records, no changes to the total visible row count. This is a privacy edit to an existing screenshot, not a redesigned product mockup. Preserve aspect ratio.

## Reading the images

The homepage's RM10 amount is captured service-fee copy, separate from government duty. The activity screenshot's deployment count is the visible GitHub number, not an independently queried count of distinct production releases. The diagrams explain responsibilities and sequence; they are not screenshots of a running system.
