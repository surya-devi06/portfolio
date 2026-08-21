# Surya M — Portfolio Website

A single-page, single-file developer portfolio built with plain HTML/CSS/JS — no build step, no dependencies, no frameworks.

## Contents

- `surya_m_portfolio.html` — the entire site (structure, styling, and your photo are all embedded in this one file).

## Tech

- **HTML5 / CSS3 / vanilla JS** — no build tools required.
- **Font:** [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts CDN.
- **Photo:** embedded directly in the file as a base64-encoded image, so it displays correctly wherever the file is opened — no separate image file to keep track of.

## Sections

1. **Hero** — name, role, intro, social links, photo
2. **About me** — background + quick facts
3. **Skills** — languages, tools & platforms, other
4. **Experience** — internship + ongoing DSA course timeline
5. **Hackathon** — TENSOR '26 project highlight
6. **Projects** — Campus Career Upskill Platform, Legacy Vault
7. **Digital presence** — Instagram / Facebook / YouTube stats
8. **Education** — degree + schooling
9. **Contact** — email, phone, LinkedIn, GitHub

## How to view it

Just double-click `surya_m_portfolio.html`, or open it in any browser (Chrome, Safari, Firefox, Edge). Works offline except for the Google Fonts request.

## How to edit it

Open the file in any text editor (VS Code recommended):

- **Text content** — search for the section you want (e.g. `id="projects"`) and edit the text between the HTML tags.
- **Colors / theme** — all colors are defined once at the top of the `<style>` block under `:root { ... }`. Change a value there and it updates everywhere.
- **Photo** — the image is the long `data:image/jpeg;base64,...` string inside the `<img src="...">` tag in the hero section. To swap it, generate a new base64 string from your image and replace that value (or just ask Claude to swap the photo for you).
- **Links** — email, phone, GitHub, and LinkedIn URLs appear in a few places (hero, footer); search for `mailto:`, `tel:`, `github.com`, and `linkedin.com` to update them all.

## How to publish it (make it a real live website)

Any static hosting works since it's a single HTML file. Easiest free options:

- **Netlify Drop** — go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the HTML file in. Instant live URL.
- **GitHub Pages** — create a repo, upload the file renamed to `index.html`, enable Pages in repo settings.
- **Vercel** — `vercel deploy` from a folder containing `index.html` (rename the file first).

For a custom domain (e.g. `suryam.dev`), buy one from any registrar and point it at whichever host you choose — each has a "custom domain" setting in their dashboard.

## Notes

- Fully responsive — tested down to mobile widths (~375px).
- No analytics, tracking, or external scripts beyond the Google Fonts stylesheet.
- No live demo links are included for the two projects since none were provided — add real URLs in the `.proj-card` sections if you have them.