# Xiaohang Li — Personal Portfolio

Personal portfolio website for Xiaohang Li (Mark). Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

This project is zero-config ready for Vercel.

1. Push the repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. No environment variables needed — click **Deploy**.

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll-triggered fade/slide animations

## Project Structure

```
app/
  layout.tsx      — root layout, Inter font, metadata
  page.tsx        — main page (assembles all sections)
  globals.css     — base styles

components/
  Nav.tsx         — sticky nav, smooth scroll, mobile hamburger
  Hero.tsx        — full-viewport hero with CTAs
  About.tsx       — bio, GitHub & LinkedIn links
  Skills.tsx      — categorized skill tags
  Projects.tsx    — card grid (3-col desktop, 1-col mobile)
  Experience.tsx  — vertical timeline
  Education.tsx   — education cards
  Contact.tsx     — contact links
```
