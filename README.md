# MemoryMap

## Overview
MemoryMap is a full-stack memory journaling and social mapping platform where users can create private, follower-only, or public location-based memories with photos, captions, timelines, collaborative maps, and interactive profile experiences.

---

## Features

### Authentication
- JWT Authentication
- Login / Signup
- Protected Routes
- HTTP-only Cookie Sessions

### User Profiles
- Public and Private Profiles
- Bio and Profile Picture
- Followers / Following
- Profile Statistics
  - Total Memories
  - Places Visited
  - Memory Streaks

### Memories
- Create Memories
- Upload Images
- Add Captions
- Add Locations
- Visibility Controls
  - Private
  - Followers Only
  - Public

### Maps
- Interactive Map View
- Memory Pins
- Memory Popups

### Collaborative Maps
- Invite Friends
- Shared Memory Maps
- Custom Visibility Controls

### Timeline
- Chronological Memory Timeline

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | JWT + bcrypt |
| Maps | Leaflet |
| Image Storage | Cloudinary |
| Validation | Zod |
| Deployment | Vercel |

---

## Project Structure

```txt
src/
 ├── app/
 ├── components/
 ├── features/
 ├── lib/
 ├── services/
 ├── hooks/
 ├── utils/
 └── types/
```

---

## Installation

```bash
npm install
npm run dev
```

---

## Environment Variables

```env
DATABASE_URL=
JWT_SECRET=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## Future Enhancements

- AI Memory Recaps
- Memory Heatmaps
- Yearly Summaries
- Music Embedding
- Mobile App
- Notifications
- Memory Replay Animations

---

## Deployment

Frontend and backend will be deployed using Vercel with PostgreSQL hosted on Neon.

---

## Screenshots

Screenshots will be added after implementation.

---

## Author

Built by Risah Ruth.
