# Products and customer value

[Showcase home](../README.md) · [Architecture](02-system-architecture.md) · [Capability index](12-capability-index.md)

EBC connects property administration, communication, and assisted work through a common service platform. The customer sees a small set of products. The engineering work includes the less visible systems that let those products operate together.

## The people the system serves

| Person | Their problem | A useful outcome |
| --- | --- | --- |
| Landlord or tenant | An agreement contains many details that must reach a formal application correctly | Upload a PDF, check a prepared form, pay, and track the case |
| Property agent | Information and repetitive actions are spread across platforms and channels | Organize records and carry out permitted work from one desktop workspace |
| Messaging-product customer | Contacts, message content, sessions, and sending progress need coordination | Prepare and monitor a campaign with clear account and quota state |
| Company operator | Customer requests continue after the initial submission | Find work, resolve exceptions, retrieve files, and communicate completion |
| Customer with a problem | They need an answer about a service or their own case | Get an informed answer or reach a human with the history intact |

These needs lead to different interfaces. Customers need clarity and low effort. Operators need density, state, filtering, and careful action controls. A desktop tool also needs local files and connected sessions. A shared backend keeps those interfaces tied to the same business records.

## Tenancy agreement stamping

The core journey is upload, extraction, review, payment, operational processing, and delivery. It turns a document-heavy service into a visible workflow.

The customer can inspect prepared fields rather than retype the entire agreement. They still need to check the result: extraction can miss data, contracts vary, and official form requirements are specific. Validation, editable fields, and error navigation make that responsibility practical.

The owner-supplied screenshot and reviewed homepage show **RM10** as the service fee. That amount is separate from government stamp duty. This portfolio records the displayed offer; it does not set current prices or promise official processing times.

The engineering scope includes the form, case status, document storage, billing integration, operator workflow, and delivery. [The detailed case study](03-stamping-case-study.md) follows that chain.

## WhatsApp Blast

The standalone desktop product brings contacts, templates, attachments, multiple account sessions, sending controls, scheduling, and history together. Customers access its paid entitlement through EBC.

The reviewed payment implementation contains monthly, yearly, and lifetime plan categories. Its captured prices are RM19, RM119, and RM229 respectively. These are implementation-snapshot values, not a current sales quotation. The important engineering model is the connection between order, payment, entitlement period, and usage.

The product uses WhatsApp Web session integration. It is not presented here as the official WhatsApp Business Platform. Connection state and upstream changes are therefore part of the operating reality. The application needs useful error states and session recovery, and the team needs a support path.

## PropCopilot

PropCopilot is the newer desktop workspace for property agents. It brings listing records, connected property platforms, local materials, client-related work, and AI-assisted execution into one environment.

It extends the ecosystem rather than replacing the need for shared cloud services. EBC handles capabilities such as account integration, AI access, usage accounting, subscriptions, Community, and Support. The desktop remains responsible for local application state and permitted execution.

Its [dedicated showcase](https://github.com/EstateBoostCopilot/PropCopilot-Showcase) provides a larger product tour. [The integration chapter](07-propcopilot.md) explains the engineering boundary.

## The platform around the products

The account, profile, calculator, Community, surveys, support, notices, and referral surfaces are part of the product experience. They serve different stages of the customer relationship:

1. Discover the products and understand an offer.
2. Create or access an account.
3. Start a task or purchase access.
4. Check progress and retrieve the outcome.
5. Ask for help, share feedback, or learn from other users.
6. Let the company improve product knowledge and operations from that feedback.

An admin response that becomes a reviewed FAQ is a useful example. The same support work can resolve an immediate question and improve future answers.

## Product decisions with engineering consequences

**Expose the right amount of state.** A single success message is not enough for a multi-step service. Customers need understandable progress; operators need the underlying stage and exception.

**Keep review close to the task.** A long form must help a person find missing information. First-error scrolling, compact phone input, direct year entry, and clear field requirements are small details with a large effect on usability.

**Provide human intervention.** Automation can reduce repeated work, while operators still need to take over, reply, close a case, or return it to AI support.

**Use shared records across surfaces.** A customer should not receive a different support history merely because they opened the desktop product instead of the website.

**Treat product operation as engineering work.** Billing, certificate delivery, survey lifecycle, storage maintenance, and software updates all need explicit behavior after the main feature is built.

## What this portfolio can establish

The reviewed code and history demonstrate product breadth, implementation choices, and sustained iteration. Screenshots show the supplied interface and activity records. They do not establish revenue, conversion rate, customer totals, extraction accuracy, or measured time savings. Those outcomes would need separate business and evaluation data.

[Next: system architecture](02-system-architecture.md)
