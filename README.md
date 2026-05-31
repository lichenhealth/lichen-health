# Lichen — Marketing Site (lichen.health)

Astro site migrated from WordPress, matching the lichen.healthcare app's design system.

## Run locally
    npm install
    npm run dev      # http://localhost:4321

## Build
    npm run build    # outputs to dist/

## Content
- `src/content/posts/`  — your 10 published essays (Markdown, edit freely)
- `src/pages/`          — homepage + About, Donate, Resources, Events, Get Involved
- `src/styles/tokens.css` — design tokens copied from the PWA

## HubSpot signup form
The Get Involved form is HubSpot-ready. To go live, set two Vercel env vars:
- `PUBLIC_HUBSPOT_PORTAL_ID`
- `PUBLIC_HUBSPOT_FORM_ID`
Until then it runs in preview mode (shows success, doesn't store).

## Deploy
New Vercel project → connect a new GitHub repo with this folder → set domain to lichen.health.
