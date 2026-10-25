# Ripple Swim Club — Kids Memberships

Next.js (App Router) + TypeScript + Tailwind CSS v4.

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /kids
npm run typecheck
```

Preview states with `.env.local` (see `.env.example`):
`MOCK_API_FAIL=true` shows the error state, `MOCK_API_LATENCY_MS=3000` holds the loading skeleton.

## Structure

```
src/
  app/                    Routes only — thin, compose features
    (app)/layout.tsx      App shell (bottom nav on mobile, side rail on desktop)
    (app)/kids/           page.tsx · loading.tsx · error.tsx
  components/
    ui/                   Design-system primitives (Button, Card, Tabs, …) — no business logic
    layout/               AppShell, MainNav, PageHeader
    icons/                SVG icon set
  features/kids/          Everything specific to the My Kids domain
    types.ts              API/domain types
    api.ts                Data access (mock today → swap for fetch)
    view-model.ts         Domain → pre-formatted UI data
    components/           Feature components
  config/navigation.ts    Nav items
  lib/                    Pure helpers (formatting, cn)
```

Design tokens (colours, fonts) live in `src/app/globals.css` under `@theme`.
New screens: add a folder under `features/`, a route under `app/(app)/`.
