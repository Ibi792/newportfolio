# Isaac Isaac — Portfolio

Rebuild of the "Friends Call Me Ibi" portfolio (previously on Framer) as a
Next.js site: same brand personality and colors, but content lives in one
data file so it's fast to update, and every route is statically generated.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

Everything text-based — the hero copy, About bio, skills/tools, project
list, and the full Fourddo/Four Stories case study — lives in
`src/lib/content.ts`. Edit that file to change wording, add a project, or
tweak a color; the page components just read from it. No layout code needs
to change for a content edit.

To add a new project, add an entry to the `projects` array in
`src/lib/content.ts`. It'll automatically show up on the homepage (top 3)
and the Projects page, and get its own `/projects/<slug>` route (as a
lightweight stub page until it has a full case study — see below).

To give a project the same full case-study treatment as Fourddo, write a
new content object shaped like `fourddoCaseStudy`, build a component like
`src/components/FourddoCaseStudy.tsx` for it, and branch to it in
`src/app/projects/[slug]/page.tsx`.

## Images & video

Every image on the site is loaded through `src/components/AssetImage.tsx`,
which shows a clearly labeled placeholder (with the exact file path it's
looking for) until a real file exists at that path in `/public`. So the
site works today with zero real assets — drop a file into the matching
path and it starts rendering automatically, no code changes needed.

Placeholder paths currently expected:

- `/public/images/portrait.jpg` — homepage photo
- `/public/images/about/photo-1.jpg` … `photo-4.jpg` — About page grid
- `/public/images/projects/<slug>.png` — project card thumbnails (used on
  Home + Projects + each project's own page)
- `/public/images/projects/four-stories-hero.png`,
  `fourddo-sitemap.png`, `fourddo-prototype-desktop.png`,
  `fourddo-prototype-mobile.png`, `fourddo-cohort.png` — Fourddo case study
- `/public/images/motion/placeholder-1.png` … `placeholder-9.png` — Extras
  "Things in Motion" grid (swap for real thumbnails/video posters)

Export screenshots at 2x for retina displays. Large motion clips are
better hosted as `.mp4`/`.webm` than animated GIFs — ask if you want a
`<video>`-based version of the motion grid instead of stills.

## Fonts

- **IBM Plex Sans** (body) and **IBM Plex Mono** (accents) are loaded via
  `next/font/google` in `src/lib/fonts.ts` — self-hosted automatically, no
  extra setup.
- **Integral CF** (the brand headline font) is commercial, so it isn't
  bundled here. `src/lib/fonts.ts` currently uses Archivo (900 weight) as
  a free stand-in with a similar bold-geometric feel. See the comment
  block in that file for the exact swap-in steps once you have the woff2
  files and a license that covers self-hosting outside Framer.

## Contact form

The form on `/extras` posts to [Formspree](https://formspree.io) if
`NEXT_PUBLIC_FORMSPREE_ID` is set (create a free form at formspree.io and
copy its ID). Without that env var, it falls back to opening a pre-filled
email draft to `isaacbisaac0@gmail.com`, so the form is functional either
way. Set it in `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ID=your-form-id
```

## Resume

The footer's "Read CV" link points at `/public/resume.pdf`. Drop your
resume there with that exact filename and the link will work.

## Deploying

This is a stock Next.js App Router project — deploys to
[Vercel](https://vercel.com/new) with zero config (`npm run build` also
works standalone for any Node host).
