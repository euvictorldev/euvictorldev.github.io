# pixo

Portfolio of **Victor Lobato** (`pixo`) — full-stack developer and security researcher.

Live at **https://euvictorldev.github.io/**

## Stack

React 18 · TypeScript · Vite · Tailwind CSS. No UI framework, no router — one page.

## Development

```bash
npm install
npm run dev      # http://localhost:8080
npm run build
npm run preview
npm run lint
npm run test
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages.

## Content

All copy lives in `src/data/` — `projects.ts`, `exploits.ts`, `profile.ts`.
Edit those, not the components.
