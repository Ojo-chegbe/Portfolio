# Framer React Export

## Quick Start

```bash
npm install && npm run dev
```

That's it — the project is ready to run.

## Using Components

Import from `src/framer/` and use `.Responsive` for viewport-aware rendering:

```jsx
import './framer/styles.css'
import Hero from './framer/Hero'

export default function App() {
    return <Hero.Responsive />
}
```

Or import multiple via the barrel:

```jsx
import { Hero } from './framer'
```

## Responsive Variants

```jsx
<Hero.Responsive
    variants={{
        lg: 'Desktop',
        md: 'Tablet',
        base: 'Mobile',
    }}
/>
```

Breakpoints: `base` (0), `sm` (320px), `md` (768px), `lg` (960px), `xl` (1200px)

## Styling

```jsx
<Hero style={{ width: '100%' }} />
```

## Layout Coordination

Wrap sibling Framer components in `<FramerGroup>` for smooth animations:

```jsx
import { FramerGroup } from './framer/context'

<FramerGroup>
    <Hero />
    <AnotherComponent />
</FramerGroup>
```

## Important

- **Do NOT install framer-motion** — it's bundled. Installing it separately breaks animations.
- **React Strict Mode is disabled** by default (Framer needs it off).
- **No bundler alias needed** — runtime is imported via relative paths.
- Run the plugin again to re-export after Framer changes.
- `src/App.tsx` is preserved across re-exports. New components appear in `src/framer/index.ts` — import them from there.

---

## Dropping into an existing project

If you already have a Vite / Next.js / Remix / CRA app, you don't need the scaffold — just copy these two folders into your `src/` and import from `./framer`:

```
your-app/src/
├── framer/          ← editable wrappers (copy as-is)
└── framer-core/     ← generated runtime + components (copy as-is, overwrite on re-export)
```

Then import `./framer-core/styles.css` once at your app root.

### Next.js App Router

Framer components use hooks, event handlers, and `window` — they're client-only. Two options:

1. Add `"use client"` at the top of each file in `src/framer/` (they're your wrappers; edit freely).
2. Or import wrappers from a client boundary module in your app:

```tsx
// app/framer.client.tsx
"use client"
export * from "./framer"
```

Then import `from "@/framer.client"` wherever you use them. Do **not** add `"use client"` to files in `framer-core/` — they're regenerated on every re-export and your edit will be lost.

### CSS conflicts

`framer-core/styles.css` is global and includes Framer's resets. If your host app has its own reset (Tailwind preflight, normalize.css, etc.), the last-imported one wins. Either:

- Import `framer-core/styles.css` **after** your own CSS (Framer wins inside Framer components), or
- Scope Framer components inside a container and audit for bleed (e.g., heading sizes) on a case-by-case basis.

### Bundle size

`framer-core/framer.js` is the full Framer runtime (~1.8 MB uncompressed, ~450 KB gzipped). It ships as one eager module. If you only use one or two components in a large app, consider lazy-loading:

```tsx
const Hero = lazy(() => import("./framer/Hero"))
```

### Content Security Policy

Framer prefetches `https://fonts.gstatic.com` and `https://framerusercontent.com` at runtime. If your CSP blocks those origins, self-host the fonts/assets or relax the policy.

### Conflicts with existing `framer-motion`

If your app already uses `framer-motion` as its own npm dependency, animations will break — you'll have two motion instances with incompatible contexts. You have to pick one: remove your `framer-motion` install and import it from `./framer-core/framer.js` (it re-exports `motion`, `AnimatePresence`, `LayoutGroup`), or don't use this export in that app.

---

## All Available Components

### Hero

```jsx
import Hero from './framer/Hero'

<Hero.Responsive />
```

**File:** `Hero.jsx` | **Original name:** Hero

**Props:**
```ts
  title?: string;
  subtitle?: string;
```

