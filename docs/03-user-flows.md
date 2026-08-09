# User Flows

## Flow 1 - First-time onboarding

```text
Open app
  |
  v
Sign in with email OTP / magic link
  |
  v
No organization membership?
  |
  +-- yes --> Create organization
  |             |
  |             v
  |         Dashboard
  |
  +-- no ----> Dashboard
```

## Flow 2 - Record a completed project

```text
Dashboard
  |
  v
Projects
  |
  v
New Project
  |
  +-- title
  +-- client
  +-- description
  +-- scope
  +-- value
  +-- dates
  +-- location
  |
  v
Save as draft / completed
  |
  v
Project Detail
```

## Flow 3 - Add evidence

```text
Project Detail
  |
  v
Upload Evidence
  |
  +-- choose evidence type
  +-- choose one or more files
  |
  v
Direct upload to private storage
  |
  +-- failure --> show error, no evidence row
  |
  v
Create evidence metadata row
  |
  +-- failure --> mark object for later orphan cleanup
  |
  v
Evidence appears under project
```

## Flow 4 - Add reference

```text
Project Detail
  |
  v
Add Reference
  |
  +-- name
  +-- position
  +-- company
  +-- email
  +-- phone
  |
  v
Save
```

## Flow 5 - Review completeness

```text
Project Detail
  |
  v
Completeness service evaluates:
  |
  +-- project facts
  +-- appointment/contract evidence
  +-- completion evidence
  +-- reference
  +-- photos
  |
  v
Show complete / missing dimensions
```

## Flow 6 - Generate project profile

```text
Project Detail
  |
  v
Generate Project Profile
  |
  v
Authorize user + organization
  |
  v
Load project snapshot
  |
  v
Render server-side PDF
  |
  +-- failure --> keep project untouched, show retry
  |
  v
Store generated PDF privately
  |
  v
Create generated_documents row
  |
  v
Download / view
```

## Flow 7 - Generate experience portfolio

```text
Experience
  |
  v
New Portfolio
  |
  v
Select projects
  |
  v
Order selected projects
  |
  v
Generate
  |
  v
Persist snapshot
  |
  v
Render PDF
  |
  v
Store + record document
```

## Flow 8 - Retrieve documents

```text
Documents
  |
  +-- Project Profiles
  +-- Experience Portfolios
  |
  v
Select generated document
  |
  v
Authorized signed/private download
```
