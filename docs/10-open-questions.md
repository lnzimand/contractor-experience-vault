# Open Questions

These are deliberately unresolved. They should be answered through pilot evidence rather than speculation.

## Product

- Final product name?
- Should the initial language be "project", "job", or support both?
- Should contract value be visible by default in generated profiles?
- Should references be visible in generated documents by default?
- Which evidence categories are universal enough for V1?
- Should company experience portfolios support a configurable cover letter?
- Do contractors want evidence appended to the PDF or only indexed?

## Pilot

- Which contractor vertical should be first?
- What is the smallest paid pilot offer?
- Is onboarding done-for-you, assisted, or self-service initially?
- How many historical projects create an "aha" moment?
- How often do contractors create/update project profiles?

## UX

- Should mobile capture be the primary UX even though the product is web-first?
- Do we need camera capture directly from upload controls?
- How should dozens/hundreds of project photos be handled?
- Do users need project tags/categories in V1?

## Security

- Exact maximum file size?
- Retention policy for soft-deleted evidence?
- Share-link expiry defaults?
- Should generated portfolio snapshots embed reference contact data?
- Do certain document types require an additional "sensitive" classification?

## Technical

- Supabase project/region selection
- Direct upload implementation details
- Signed URL TTL
- PDF image compression strategy
- Maximum projects per generated portfolio
- Whether PDF generation fits normal request execution or needs a later job worker
- Whether generated PDFs should be regenerated deterministically from snapshots

## Commercial

- Setup fee vs subscription
- Per-company vs per-user pricing
- Per-project pricing for very small contractors
- Done-for-you migration/import service
- Referral incentives
- Whether tender consultants/bookkeepers could become a distribution channel
