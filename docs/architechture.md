# MemoryMap Architecture

## Overview

MemoryMap is a full-stack web application where users can create, manage, and share location-based memories through interactive maps and timelines.

---

# High-Level Architecture

```txt
Frontend (Next.js + Tailwind)
            ↓
API Routes / Server Actions
            ↓
Prisma ORM
            ↓
PostgreSQL Database

Cloudinary ← Image Uploads
Leaflet ← Interactive Maps
```

---

# Frontend Architecture

## Framework
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

## Main Frontend Modules
- Authentication
- User Profiles
- Memories
- Maps
- Timeline
- Followers
- Collaborative Maps

---

# Backend Architecture

## API Responsibilities
- Authentication
- Authorization
- CRUD Operations
- Visibility Control
- Followers Logic
- Collaborative Access Control

---

# Authentication Flow

```txt
User Login
    ↓
Validate Credentials
    ↓
Generate JWT
    ↓
Store JWT in HTTP-only Cookie
    ↓
Protected Route Verification
```

---

# Visibility System

## Memory Visibility Types

### PRIVATE
Only the owner can view the memory.

### FOLLOWERS
Only approved followers can view the memory.

### PUBLIC
Visible to everyone.

---

# Database Design

## Main Entities

### User
- id
- username
- email
- passwordHash
- bio
- profileImage

### Memory
- id
- caption
- imageUrl
- latitude
- longitude
- visibility
- createdAt
- userId

### Follow
- followerId
- followingId

### CollaborativeMap
- id
- title
- ownerId
- visibility

### CollaborativeMapMember
- mapId
- userId

---

# Security Design

## Security Features
- Password hashing using bcrypt
- JWT authentication
- HTTP-only cookies
- Route protection
- Authorization checks
- Input validation using Zod

---

# File Upload Architecture

```txt
User Upload
     ↓
Cloudinary
     ↓
Image URL Stored in PostgreSQL
```

---

# Deployment Architecture

## Frontend + Backend
- Vercel

## Database
- Neon PostgreSQL

## Media Storage
- Cloudinary

---

# Scalability Goals

Future scalability considerations:
- Mobile app support
- AI-generated recaps
- Real-time collaboration
- Notifications
- Advanced analytics
