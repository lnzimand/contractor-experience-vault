# Security and RLS

## Security objective

Commercial project evidence may contain sensitive information.

Examples:

- Contract values
- Client identities
- Purchase orders
- Contact information
- Completion certificates
- Pricing
- Site photographs
- Signed documents

Private evidence must remain private unless the organization explicitly shares it.

## Tenancy boundary

The ownership chain is:

```text
authenticated user
      |
      v
organization_members
      |
      v
organization
      |
      v
project
      |
      +--> evidence
      +--> references
```

## RLS principle

A user may read or mutate an organization resource only when the user's authenticated ID exists in `organization_members` for that organization.

## Required RLS coverage

Apply policies to:

- `organizations`
- `organization_members`
- `projects`
- `project_references`
- `project_evidence`
- `generated_documents`

## Storage policy

Storage paths must contain the organization ID and project/document ID.

Storage authorization must derive access from organization membership rather than assuming an authenticated user may read all objects.

## Evidence privacy

Default:

- Private

Never:

- Use a public bucket for project evidence
- Store raw public URLs in the project record
- Expose service-role credentials to clients

## Generated documents

Generated PDFs are also private by default.

A document becomes externally accessible only through an explicit share mechanism.

## Share links

Future / optional V1 share model:

- Random high-entropy token
- Store token hash, not raw token
- Resource-scoped
- Revocable
- Optional expiry
- No organization-wide access
- Evidence access through short-lived signed URLs

## Verification language

The system must not imply that evidence has been independently verified.

Allowed language:

- Evidence provided
- Document uploaded
- Evidence available
- Client confirmation pending

Avoid until an actual verification process exists:

- Verified contractor
- Verified project
- Certified project history

## Deletion

Use soft deletion for project evidence initially.

Hard-deletion processes can later remove files after a retention interval.

## Auditability

V1 does not need a full audit-log product, but important records should preserve:

- `created_at`
- `updated_at`
- `uploaded_by`
- `generated_by`
- `generated_at`

Future versions may add a proper append-only event/audit history.
