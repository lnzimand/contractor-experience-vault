# V1 Product Specification

## Product outcome

V1 is successful when a contractor can:

1. Authenticate.
2. Create a company.
3. Record completed projects.
4. Add project references.
5. Upload private project evidence.
6. View evidence grouped by category.
7. See a useful evidence-completeness state.
8. View a professional project profile.
9. Generate a project-profile PDF.
10. Select multiple projects.
11. Generate a company experience portfolio PDF.
12. Retrieve generated documents.

## Explicit non-goals

V1 does not include:

- Tender discovery
- Tender scraping
- Tender submission
- AI tender matching
- OCR
- AI metadata extraction
- Automatic project verification
- Client verification
- CIPC integration
- SARS integration
- CIDB integration
- Accounting integration
- WhatsApp integration
- CRM
- Job cards
- Invoicing
- Employee scheduling
- Native mobile applications
- Public contractor marketplace
- Subscription billing
- Advanced analytics

## Organization profile

Required:

- Company name

Optional:

- Registration number
- Logo
- Description
- Email
- Phone
- Website
- Address

## Project fields

Required:

- Project title
- Client name
- Description
- Scope of work

Optional:

- Location
- Contract value
- Currency
- Start date
- Completion date
- Category

Currency defaults to `ZAR`.

## Project statuses

- `draft`
- `completed`
- `archived`

These are internal lifecycle states and are not verification states.

## Project reference fields

- Name
- Position
- Company
- Email
- Phone

A project may have multiple references.

## Evidence types

- Appointment Letter
- Contract
- Purchase Order
- Completion Certificate
- Reference Letter
- Invoice
- Before Photo
- Progress Photo
- After Photo
- Other

A project may have multiple files of any type.

## Supported pilot file formats

Documents:

- PDF

Images:

- JPEG
- PNG
- WebP

## Evidence completeness

Initial completeness dimensions:

- Project information
- Appointment / contract evidence
- Completion evidence
- Reference
- Project photographs

Example:

```text
Project information       complete
Appointment evidence      complete
Completion evidence       complete
Reference                  missing
Photographs                complete

4 / 5
```

This must be presented as **evidence completeness**, never verification.

## Project detail screen

Must display:

- Project title
- Client
- Status
- Contract value
- Dates
- Location
- Description
- Scope
- Evidence completeness
- Evidence grouped by type
- References
- Primary actions

Actions:

- Edit Project
- Upload Evidence
- Generate Project Profile
- Archive Project

## Project Profile

Contains:

- Contractor logo
- Contractor name
- Project title
- Client
- Location
- Contract value
- Start/completion dates
- Description
- Scope
- Selected project photographs
- References
- Evidence summary

Available as:

1. Application view
2. Generated PDF

## Experience Portfolio

Flow:

```text
Experience
  ->
Create Portfolio
  ->
Select Projects
  ->
Order Projects
  ->
Generate
```

Contains:

- Cover
- Company profile
- Selected project summaries
- Evidence availability per project

V1 does not merge every raw supporting PDF into the final portfolio.

## Generated documents

Generated documents are immutable snapshots of the input state at generation time.

Initial types:

- `project_profile`
- `experience_portfolio`

Regenerating after data changes creates a new generated document.

## Sharing

Controlled share links are desirable but may follow the critical pilot path.

A share link must:

- Be revocable
- Optionally expire
- Expose only its intended resource
- Never expose private storage paths
- Never expose other organization projects

## Acceptance criteria

### Authentication
- A user can sign in and sign out.

### Organization
- A user can create and edit one organization.

### Projects
- User can create, edit, complete, archive, and view projects.

### References
- User can add and remove project references.

### Evidence
- User can upload PDFs and multiple images.
- Evidence remains private.
- Evidence is displayed by category.
- Evidence can be soft-deleted.

### Completeness
- Project shows missing / available evidence dimensions.

### Profile
- Project has a professional client-facing application view.

### Project PDF
- Project profile can be generated and downloaded.

### Portfolio
- Multiple projects can be selected and ordered.
- Company experience PDF can be generated.

### Documents
- Previously generated PDFs can be viewed/downloaded.

### Tenant isolation
- Organization A cannot access Organization B data or files.

### Mobile web
- Core capture and retrieval workflows are usable on a normal Android browser.
