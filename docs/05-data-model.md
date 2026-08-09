# Data Model

## Entity map

```text
auth.users
    |
    v
organization_members
    |
    v
organizations
    |
    +---------------------+
    |                     |
    v                     v
projects          generated_documents
    |
    +---------------------+
    |                     |
    v                     v
project_references   project_evidence
```

## organizations

Purpose: contractor/company identity and presentation information.

Fields:

- `id`
- `name`
- `registration_number`
- `description`
- `logo_path`
- `email`
- `phone`
- `website`
- `address`
- `created_at`
- `updated_at`

## organization_members

Purpose: tenancy and future multi-user access.

Fields:

- `id`
- `organization_id`
- `user_id`
- `role`
- `created_at`

Initial useful role:

- `owner`

Do not model organization ownership as a direct `user_id` on `organizations`.

## projects

Fields:

- `id`
- `organization_id`
- `title`
- `client_name`
- `description`
- `scope`
- `location_text`
- `contract_value`
- `currency`
- `start_date`
- `completion_date`
- `status`
- `created_at`
- `updated_at`

Initial statuses:

- `draft`
- `completed`
- `archived`

## project_references

Fields:

- `id`
- `project_id`
- `name`
- `position`
- `company`
- `email`
- `phone`
- `created_at`
- `updated_at`

## project_evidence

Fields:

- `id`
- `project_id`
- `type`
- `file_name`
- `storage_path`
- `mime_type`
- `size_bytes`
- `description`
- `uploaded_by`
- `created_at`
- `deleted_at`

Initial types:

- `appointment_letter`
- `contract`
- `purchase_order`
- `completion_certificate`
- `reference_letter`
- `invoice`
- `before_photo`
- `progress_photo`
- `after_photo`
- `other`

## generated_documents

Fields:

- `id`
- `organization_id`
- `type`
- `storage_path`
- `generated_by`
- `generated_at`
- `snapshot_data`

Initial types:

- `project_profile`
- `experience_portfolio`

`snapshot_data` intentionally records the source data used for generation so historical outputs can be understood later.

## Completeness

Completeness does not need its own table in V1.

It should be computed from current project facts and evidence.

Initial dimensions:

- Project information exists
- Appointment / contract evidence exists
- Completion evidence exists
- Reference exists
- Project photographs exist

## Future entities deliberately excluded

Do not add until proven necessary:

- Tenders
- Tender requirements
- Verification requests
- Client accounts
- External reviewers
- Billing subscriptions
- Job cards
- Invoices as financial entities
- Employees/field workers
- AI extraction records
