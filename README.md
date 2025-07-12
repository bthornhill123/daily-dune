# Daily Dune

A personal productivity and journaling application built with NestJS and Angular.

## Features

- **Google Authentication** - Secure login via Firebase Authentication
- **Journal Management** - Create and manage daily journal entries
- **Weekly Planner** - Organize tasks and schedule with weekly view
- **AI-Powered Cover Letters** - Generate professional cover letters using OpenAI
- **Admin Panel** - Administrative interface for user management
- **Real-time Updates** - Live data synchronization with Firebase

## Technology Stack

### Backend
- **NestJS** - Node.js framework for building scalable server-side applications
- **OpenAI API** - AI-powered content generation
- **TypeScript** - Type-safe JavaScript development

### Frontend
- **Angular 15** - Modern web application framework
- **Angular Material** - UI component library
- **Firebase** - Authentication and real-time database
- **TypeScript** - Type-safe development

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project (for authentication and database)

## Installation & Setup

### Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

The backend will start on `http://localhost:3000`

### Frontend Setup

```bash
cd frontend
npm install
npm run start
```

The frontend will start on `http://localhost:4200`

### Firebase Configuration

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication and Firestore
3. Update the Firebase configuration in `frontend/config/firebase.config.ts`

## Development

### Running Tests

**Backend:**
```bash
cd backend
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:cov      # Coverage report
```

**Frontend:**
```bash
cd frontend
npm run test          # Unit tests
```

### Firebase Emulator

To run with Firebase emulators for local development:

```bash
cd frontend
npm run start-emulate
```

## Project Structure

```
daily-dune/
├── backend/           # NestJS backend application
│   ├── src/
│   │   ├── open-ai/   # OpenAI integration
│   │   └── players/   # User management
│   └── test/          # Backend tests
└── frontend/          # Angular frontend application
    ├── src/app/
    │   ├── admin/             # Admin panel
    │   ├── cover-letter/      # AI cover letter generator
    │   ├── create-journal-entry/ # Journal creation
    │   ├── login/             # Authentication
    │   ├── planner/           # Weekly planner
    │   └── services/          # Shared services
    └── config/        # Firebase configuration
```
