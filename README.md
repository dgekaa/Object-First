# Object First

React application with Redux, TypeScript and strict linting.

## Technologies

- React 19 + TypeScript
- Redux Toolkit for state management
- Vite for build and development
- styled-components for styling
- pnpm for package management
- ESLint + Prettier with strict rules
- Husky for pre-commit hooks and code quality enforcement

## Usage

```bash
# Install dependencies
pnpm install

# Run in development mode
pnpm dev

# Build for production
pnpm build

# Code check
pnpm lint

# Serve production build with compression
pnpm build && pnpm serve
```

## Development Workflow

This project uses Husky to enforce code quality standards:

- **Pre-commit Hook**: Runs lint-staged to:
  - Run ESLint and auto-fix issues on TypeScript/React files
  - Format code with Prettier on all changed files
  - Run Vitest tests related to changed files
- **Commit Message Hook**: Validates commit messages using commitlint with conventional commit format rules
- **Pre-push Hook**: Performs TypeScript type checking and ensures the project builds successfully before pushing

## Performance Optimizations

This project includes the following performance optimizations:

- **Text Compression**: Both development and production builds use gzip and brotli compression for text assets (JS, CSS, HTML, SVG, JSON) to minimize network transfer size.
- **Code Splitting**: The application uses manual code chunks for better code splitting of large libraries like Recharts, React Router, and Redux.
- **Production Optimizations**: In production builds, all assets are minified and sourcemaps are disabled for better performance.
