# Architecture

## Architectural goal

Keep V1 small, secure, and easy to change.

Do not introduce distributed-system infrastructure before usage proves it is necessary.

## Logical domains

```text
+-------------------------------+
| Identity                      |
| User / Organization / Member  |
+---------------+---------------+
                |
                v
+-------------------------------+
| Project Experience            |
| Projects / References         |
+---------------+---------------+
                |
                v
+-------------------------------+
| Evidence                      |
| Files / Photos / Categories   |
+---------------+---------------+
                |
                v
+-------------------------------+
| Presentation                  |
| Profiles / PDFs / Shares      |
+-------------------------------+
```

## V1 deployment

```text
Browser
   |
   v
Next.js on Vercel
   |
   +-----------> Supabase Auth
   |
   +-----------> Supabase Postgres
   |
   +-----------> Supabase Storage
```

## Application

- Next.js
- TypeScript
- App Router
- React
- Tailwind CSS

Use:

- Server Components for data-heavy views where appropriate
- Client Components only for interactive UI
- Server-side mutations for business operations
- Route handlers where an explicit endpoint is useful

No standalone Express API in V1.

## Database

Supabase Postgres.

The domain is naturally relational:

```text
Organization
  |
  +-- Memberships
  |
  +-- Projects
        |
        +-- References
        |
        +-- Evidence
```

## Authentication

Supabase Auth.

Initial login:

- Email OTP or magic link

## Authorization

Organization membership is the core tenancy boundary.

Authorization is enforced at multiple layers:

```text
UI visibility
   +
Server authorization
   +
Postgres Row Level Security
```

RLS is the final data boundary.

## Storage

Use private Supabase Storage buckets.

Evidence path convention:

```text
organizations/{organizationId}/projects/{projectId}/{uuid}-{filename}
```

Generated documents:

```text
organizations/{organizationId}/generated/{documentId}.pdf
```

Do not trust user filenames for uniqueness.

## Upload architecture

Files should upload directly from the authenticated browser to Supabase Storage under storage policies.

```text
Browser
  |
  +------> Supabase Storage
  |
  +------> application mutation creates metadata after upload
```

Avoid routing large evidence files through the Next.js application in V1.

## PDF architecture

PDF is generated server-side.

```text
User request
  |
  v
Authorize
  |
  v
Read source data
  |
  v
Build immutable snapshot
  |
  v
Render with @react-pdf/renderer
  |
  v
Store generated file
  |
  v
Record generated document
```

PDF generation failure must not mutate source project data.

## Background processing

None initially.

Do not introduce:

- Redis
- BullMQ
- ECS workers
- Kubernetes
- Microservices

If PDF generation later becomes slow or high-volume, it can be moved to an asynchronous job system without changing project ownership semantics.

## Search

V1 can use normal Postgres queries.

Do not introduce a search engine.

Future search may use Postgres full-text search first.

## Observability

Pilot requirements:

- Authentication errors
- Mutation errors
- Upload errors
- Storage errors
- PDF-generation errors
- Operation/request identifier for important workflows

## Failure boundaries

### Upload
Storage success precedes evidence metadata creation.

### PDF generation
Generated document is derivative and independently retryable.

### Delete
Evidence is soft-deleted first.

### Tenant isolation
Every data query must resolve organization ownership; RLS protects against missed application filtering.

## Core architectural invariants

1. A project belongs to exactly one organization.
2. Evidence belongs to exactly one project.
3. Project references belong to exactly one project.
4. Evidence is private by default.
5. A generated document is never source-of-truth data.
6. Generated documents are point-in-time snapshots.
7. Upload does not imply verification.
8. One organization cannot read another organization's data without explicit membership.
