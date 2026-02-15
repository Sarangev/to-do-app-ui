# To-Do App UI

A lightweight Next.js + Tailwind CSS UI for a to-do app. This repository contains the frontend UI components and pages used to build a modern task manager interface.

## Features

- Component-driven UI (Radix + Tailwind)
- Accessible primitives and composed components
- Theme provider and local state hooks

## Prerequisites

- Node.js 18+ recommended
- npm or pnpm

## Install

Using npm:

```bash
npm install
```

Or with pnpm:

```bash
pnpm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build

```bash
npm run build
npm run start
```

## Scripts

The project includes the usual Next.js scripts:
- `dev`: development server
- `build`: production build
- `start`: run production build
- `lint`: run linter

## Project Structure (high level)

- `app/` — Next.js app routes and global styles
- `components/` — UI components and feature components (todo)
- `ui/` — shared UI primitives and design system components
- `hooks/` — custom React hooks
- `lib/` — types and utilities

## Notable files

- `app/page.tsx` — main landing page
- `components/todo/todo-container.tsx` — to-do list container and state
- `components/todo/add-task.tsx` — add task UI

## Contributing

Feel free to open issues or PRs for fixes and improvements.

## License

Specify a license if you plan to publish this project (e.g., MIT).
