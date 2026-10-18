# Sepehrjo

A modern Persian educational platform built with **Next.js, TypeScript, and Tailwind CSS**.

Sepehrjo provides educational content through **Articles, Posts, and Courses**, with a responsive RTL interface and API-driven data.

## Tech Stack

- **Next.js 16** – App Router and Server Components
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **TanStack Query** – Server-state management and caching
- **Axios** – API communication
- **ESLint** – Code quality

## Features

- Responsive RTL interface
- Articles, Posts, and Courses
- Content listing and detail pages
- Search functionality
- API-driven content
- Loading, Error, Empty, and Not Found states
- Type-safe API responses
- Reusable UI components
- Mobile-first responsive design

## Project Structure

```text
app/
├── articles/
│   ├── [id]/
│   └── page.tsx
│
├── post/
│   ├── [id]/
│   └── page.tsx
│
├── courses/
│   ├── [id]/
│   └── page.tsx
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
│
├── features/
│   ├── articles/
│   │   ├── api/
│   │   ├── hooks/
│   │   └── types/
│   │
│   ├── posts/
│   │   ├── api/
│   │   ├── hooks/
│   │   └── types/
│   │
│   └── courses/
│       ├── api/
│       ├── hooks/
│       └── types/
│
├── lib/
│   └── axios/
│
├── layout.tsx
└── page.tsx
```

### `components/`

Contains reusable UI components following **Atomic Design** principles.

- `atoms/` – Small reusable UI elements
- `molecules/` – Combinations of smaller components
- `organisms/` – Larger reusable UI sections

### `features/`

Contains feature-specific logic for Articles, Posts, and Courses.

Each feature is organized into:

- `api/` – API request functions
- `hooks/` – Data-fetching and state-management hooks
- `types/` – TypeScript models and API response types

### `lib/`

Contains shared application infrastructure and utilities, including the configured Axios client.

## Architecture

The project separates UI, data fetching, API communication, and data models.

```text
Component
    ↓
Hook
    ↓
API Function
    ↓
Axios Client
    ↓
Backend API
```

This structure keeps feature logic separated from UI components and makes the codebase easier to maintain and extend.

## Rendering Strategy

Different content types use different rendering strategies.

### Articles

Articles use **Server Components** for server-side data fetching.

### Posts

Posts use **Client Components** with **TanStack Query** for client-side server-state management, including loading, error, caching, and refetching.

### Courses

Courses use **Server Components** with revalidation for server-side data fetching.

## API Integration

The application communicates with the backend through a shared Axios client.

API requests are separated from UI components and are organized inside each feature's `api/` directory.

Main resources include:

```text
/articles
/posts
/courses
```

## Search

The application provides search functionality for supported content.

Search parameters are synchronized with the URL so that the current search state can be preserved when navigating or refreshing the page.

## Responsive Design

The interface is designed for Persian RTL content and follows a mobile-first responsive approach.

The UI uses reusable components and consistent styling across different content sections.

## Environment Variables

Create a `.env.local` file in the project root.

Example:

```env
NEXT_PUBLIC_FILE_URL=your-file-storage-url
```

Environment-specific values should not be committed to the repository.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Hana-soltani/Sepehrjo-Project.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Notes

The project is structured around feature-based development and reusable UI components.

The separation between API functions, hooks, types, and UI components is intended to keep the codebase maintainable and make future features easier to add.