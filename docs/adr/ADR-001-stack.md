# ADR-001: Initial Application Stack

**Status:** Accepted for V1  
**Version:** 0.1

## Context

The pilot must be built quickly, securely, and without unnecessary infrastructure.

The product needs:

- Web UI
- Authentication
- Multi-tenant organization ownership
- Relational data
- Private file storage
- Server-side PDF generation
- Mobile-friendly access

It does not initially need high-volume background jobs, microservices, streaming, or complex caching.

## Decision

Use:

- Next.js
- TypeScript
- React
- Tailwind CSS
- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Postgres Row Level Security
- Zod
- React Hook Form where useful
- @react-pdf/renderer
- Vercel

## Explicitly excluded

- Separate Express API
- MongoDB
- Redis
- BullMQ
- ECS
- Kubernetes
- Dedicated search service
- Native mobile app

## Rationale

The stack reduces infrastructure and integration overhead while preserving:

- relational modelling
- strong tenant boundaries
- private object storage
- server-side execution
- a clear scale path

## Revisit triggers

Revisit this decision only when one of these appears in real usage:

- PDF generation exceeds synchronous execution constraints
- High-volume bulk uploads require asynchronous processing
- OCR/AI extraction requires workers
- Search needs exceed Postgres capability
- Storage bandwidth/cost justifies migration
- Enterprise requirements force different hosting/security boundaries
