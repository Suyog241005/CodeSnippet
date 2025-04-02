# Code Snippets Manager

A Next.js web application for managing and organizing code snippets with a modern user interface.

## Overview

This application provides a simple way to create, edit, delete and view code snippets. Built with Next.js, TypeScript, Prisma, and SQLite for data persistence.

### Features

- Create new code snippets with title and code content
- Edit existing snippets
- Delete snippets
- View all snippets in a clean interface
- Modern UI with Tailwind CSS
- Server-side rendering for optimal performance

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- Prisma ORM
- SQLite Database
- Tailwind CSS
- shadcn/ui Components

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd snippets
```

2. Install dependencies:
```bash
npm install
```

3. Setup the database:
```bash
npx prisma migrate dev
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
/src
├── /actions      # Server actions
├── /app          # Next.js app router pages
├── /components   # Reusable UI components
└── /lib          # Utility functions and configs

/prisma
└── schema.prisma # Database schema
```



## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
