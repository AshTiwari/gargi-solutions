# kratoos.in

Website for Kratoos, a content studio in Mumbai. React 18 + Vite, no UI framework.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Editing content

Nearly all copy lives in [`src/content.js`](src/content.js): services, process steps, testimonials,
LinkedIn articles, team, principles and contact details. Change text there; layout code doesn't need to be touched.

Images are in `src/assets/img/` as WebP. Keep new photos under ~150 KB (resize to ~900px wide, export WebP at ~80% quality).

## Structure

```
src/
  content.js            all site copy and image imports
  index.css             design tokens (colours, fonts, spacing), buttons, scroll-reveal
  App.jsx               routes + scroll-to-#hash handling
  components/           one folder per homepage section (JSX + CSS)
  pages/                Home, Team, Principles, NotFound
public/favicon.svg
design/                 logo source files (.cdr, .svg) — not used by the build
```

Routes: `/`, `/team`, `/principles` (old `/ourPrinciples` links still work), anything else shows a 404 page.

## Deploying

`npm run build` and upload `dist/`. Because routing happens in the browser, the host must serve
`index.html` for unknown paths (otherwise a direct visit to `/team` returns the host's own 404):

- **Netlify:** add `public/_redirects` containing `/*  /index.html  200`
- **Vercel (current host):** handled by `vercel.json` in this repo
- **Apache / cPanel:** `.htaccess` with a `FallbackResource /index.html`

## Contact form

There is no backend. "Send enquiry" opens the visitor's email app with their details pre-filled, addressed to the
email in `content.js`. To receive enquiries directly instead, point the form at a service such as Formspree or Web3Forms.
