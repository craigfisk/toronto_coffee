# OpenCode Agent Instructions

## Architecture & Boundaries
- **Vanilla TypeScript**: This is a simple, no-bundler web project. It uses native ES modules (`<script type="module">`). Do not introduce Webpack, Vite, or UI frameworks (React/Vue) unless explicitly requested.
- **Entrypoints**: The main application entrypoint is `index.html`, which loads the compiled `./src/app.js`.

## Build & Run
- **Compilation**: To compile TypeScript, run `npm run build` (or `npm run dev` for watch mode during development).
- **Serving**: Because it uses ES modules, you cannot simply open `index.html` via `file://`. You must use a local server from the root directory (e.g., `npx serve .` or `python3 -m http.server 8000`).
- **Compiled Output**: TypeScript is configured to compile `.ts` files into `.js` files *directly alongside* them in the `src/` directory.

## Conventions & Quirks
- **ESM Import Paths**: Because there is no bundler and `"module": "nodenext"` is used, all relative imports within `.ts` files *must* use the `.js` extension (e.g., `import { data } from './data.js';`).
- **Google Maps API**: `index.html` loads the Maps API using a script tag and requires an API key replacement (`YOUR_GOOGLE_MAPS_API_KEY`) to fully function online.
