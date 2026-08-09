# Implementation Plan

## Delivery objective

Build a pilot that can be placed in front of 1-3 real contractors.

Estimated focused engineering effort:

**30-45 hours**

The build is intentionally sequenced around data ownership and security before presentation features.

## Sprint 0 - Repository and foundation

Tasks:

- Create Next.js project
- Configure TypeScript
- Configure Tailwind
- Configure lint / format / typecheck
- Configure Supabase client/server helpers
- Environment validation
- Folder/module conventions
- Error-handling baseline

Exit condition:

- Application boots locally and in a preview deployment
- Environment configuration is validated

## Sprint 1 - Identity and organization

Tasks:

- Supabase Auth
- Email OTP / magic link
- Protected application layout
- Organizations table
- Organization-members table
- Organization RLS
- First-login organization creation
- Company settings

Exit condition:

- User can authenticate
- User can create an organization
- Tenant isolation tests pass for organization data

## Sprint 2 - Projects

Tasks:

- Project schema
- Project RLS
- Project list
- New-project form
- Edit project
- Project detail
- Complete / archive actions
- Mobile-responsive forms

Exit condition:

- Contractor can record and retrieve its project history

## Sprint 3 - References and evidence

Tasks:

- Project references
- Evidence schema
- Private storage
- Storage policies
- Upload UI
- Evidence type selection
- Multi-file images
- PDF upload
- Evidence grouping
- Download/preview
- Soft delete

Exit condition:

- A real project can contain its core evidence privately

## Sprint 4 - Evidence completeness

Tasks:

- Completeness evaluator
- Missing evidence states
- Dashboard summary
- Project completeness card

Exit condition:

- User can immediately identify gaps in project evidence

## Sprint 5 - Project Profile

Tasks:

- Professional project presentation
- Image selection
- Evidence summary
- Reference display
- Company branding

Exit condition:

- Project page is polished enough to show a prospective client

## Sprint 6 - PDF generation

Tasks:

- @react-pdf/renderer setup
- Shared PDF components
- Project Profile PDF
- Snapshot construction
- Private output storage
- Generated-document persistence
- Retry-safe error handling

Exit condition:

- One project generates a professional downloadable PDF

## Sprint 7 - Experience Portfolio

Tasks:

- Project selection
- Project ordering
- Portfolio preview data
- Portfolio snapshot
- Portfolio PDF
- Documents library

Exit condition:

- Contractor can generate a company experience document from multiple projects

## Sprint 8 - Pilot polish

Tasks:

- Empty states
- Loading states
- Useful error messages
- Mobile polish
- Fake demo company
- Fake project documents
- Tenant-isolation tests
- Upload-failure tests
- PDF-failure tests
- Pilot walkthrough

Exit condition:

- Credible demo can be run end-to-end without developer intervention

## Critical path

```text
Foundation
  ->
Auth + Organization
  ->
Projects
  ->
Evidence
  ->
Completeness
  ->
Project Profile
  ->
PDF
  ->
Experience Portfolio
```

## Defer when tempted

Do not interrupt the critical path for:

- AI
- WhatsApp
- Billing
- Tender discovery
- Mobile apps
- Analytics dashboards
- Integrations
- Complex role systems
