# Object First

React application with Redux, TypeScript and strict linting.

## Technologies

- React 19 + TypeScript
- Redux Toolkit for state management
- Vite for build and development
- styled-components for styling
- pnpm for package management
- ESLint + Prettier with strict rules

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

## Performance Optimizations

This project includes the following performance optimizations:

- **Text Compression**: Both development and production builds use gzip and brotli compression for text assets (JS, CSS, HTML, SVG, JSON) to minimize network transfer size.
- **Code Splitting**: The application uses manual code chunks for better code splitting of large libraries like Recharts, React Router, and Redux.
- **Production Optimizations**: In production builds, all assets are minified and sourcemaps are disabled for better performance.
