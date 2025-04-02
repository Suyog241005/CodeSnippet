# Code Snippets ManagerA Next.js web application for managing and organizing code snippets with a modern user interface.This application provides a simple way to create, edit, delete and view code snippets. Built with Next.js, TypeScript, Prisma, and SQLite for data persistence.- Create new code snippets with title and code content- Edit existing snippets- Delete snippets- View all snippets in a clean interface- Modern UI with Tailwind CSS- Server-side rendering for optimal performance## Tech Stack- Next.js 13+ with App Router- TypeScript- Prisma ORM- SQLite Database- Tailwind CSS- UI Components## Getting Started1. Clone the repository2. Install dependencies:```bashnpm install```3. Setup the database:```bashnpx prisma migrate dev```
4. Run the development server:
```bash
npm run dev
```

## Project Structure

```
/src
    /actions - Server actions
    /app - Next.js app router pages
    /components - Reusable UI components
    /lib - Utility functions and configs
/prisma
    schema.prisma - Database schema
``