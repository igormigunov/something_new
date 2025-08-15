# TVMaze Multi-Repo Workspace

This is a multi-repo workspace containing both the TVMaze frontend application and API server.

## Project Structure

```
tvmaze/
├── tvmaze/          # React frontend application
├── tvmaze-api/      # Express.js API server
├── package.json     # Root workspace configuration
└── tsconfig.base.json # Shared TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

Install dependencies for all projects:

```bash
npm run install:all
```

Or install individually:

```bash
# Root dependencies
npm install

# Frontend dependencies
cd tvmaze && npm install

# API dependencies
cd tvmaze-api && npm install
```

### Development

Run both frontend and API in development mode:

```bash
npm run dev
```

Or run them separately:

```bash
# Frontend only
npm run dev:frontend

# API only
npm run dev:api
```

### Building

### Type Checking

Run TypeScript type checking for all projects:

## Available Scripts

- `npm run dev` - Start both frontend and API in development mode
- `npm run dev:frontend` - Start frontend development server
- `npm run dev:api` - Start API development server
- `npm run build` - Build both projects
- `npm run build:frontend` - Build frontend project
- `npm run build:api` - Build API project
- `npm run clean` - Clean all build artifacts and node_modules

## Configuration

- **Root package.json**: Manages workspace scripts and shared dependencies
- **tsconfig.base.json**: Shared TypeScript configuration extended by both projects
- **Individual tsconfig.json**: Project-specific TypeScript configurations

## Development Workflow

1. Make changes to either project
2. Use `npm run dev` to run both projects simultaneously
3. Frontend will be available at `http://localhost:3000`
4. API will be available at the configured port (check tvmaze-api/src/index.ts)

## Notes

- All architectural approaches here are implemented for demonstration purposes only. The choice of a particular architecture depends on various factors, the most important of which is whether it is good enough and works as expected for all team members.

- The frontend project uses React with TypeScript and bases on clean architecture
- The API project uses Express.js with TypeScript and bases on nest-like architecture
- Both projects share a common TypeScript base configuration
- Path mapping is configured for easy imports between projects

