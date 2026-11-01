# Three Three Zero website: build brief

Replace https://www.threethreezero.com/ (currently Wix) with a static site built with **Zola**. This file is the source of truth for the build. The approved visual design is in `reference/` (three HTML artboards exported from the design canvas). Match it.

Owner: Dawson Reid. Company: Three Three Zero, legal entity 3304813 Nova Scotia Ltd., Nova Scotia, Canada.

## Goals

- Minimal, text first, elegant, trustworthy. No stock photos, gradients, cards or carousels.
- Light and dark themes.
- The site's main use is technical writing: case studies, technical notes, essays about the company's work in financial technology (Rust, Kafka, Kubernetes, Terraform, security).
- Plain static output. No JavaScript except the small theme toggle. No third-party requests at runtime (self-host fonts, no analytics, no embeds).

## Environment

Dawson uses Manjaro (Arch). Install and run with:

```bash
sudo pacman -S zola
zola --version
zola serve      # dev server with live reload
zola check      # validate internal and external links
zola build      # output to public/
```

Check `pacman -Si zola` for the version available and read the Zola docs for that version before using config keys; syntax-highlighting and feed options changed between releases. Use bash for any scripts. Keep any Rust tooling out of this unless it earns its place.

## Pages and routes

| Route | Source | Notes |
|---|---|---|
| `/` | `content/_index.md` + `templates/index.html` | Hero, 3 most recent posts, "What we do", contact |
| `/writing/` | `content/writing/_index.md` + `templates/section.html` | All posts, newest first, type filter links |
| `/writing/<slug>/` | `content/writing/<slug>.md` + `templates/page.html` | Article |
| `/kind/<name>/` | taxonomy `kind` | Backs the filter links on `/writing/` |
| `/writing/atom.xml` | Zola feed | Enable `generate_feeds` |
| `/404.html` | `templates/404.html` | Same chrome, short message |

About and Contact are anchors on the home page (`/#about`, `/#contact`), not separate pages. Header nav: Writing, About, Contact, theme toggle.

## Content model

Posts live in `content/writing/*.md` with TOML front matter:

```toml
+++
title = "Event sourcing order flow on Kafka"
date = 2026-10-12
description = "How we structured topics, ordering guarantees, and replay for a latency-sensitive trading workload."
taxonomies = { kind = ["Case study"] }

[extra]
# Case studies only. Render the facts strip only when these exist.
client = "[CLIENT OR SECTOR]"
role = "[ROLE]"
stack = "Rust, Kafka, Kubernetes"
duration = "[DURATION]"
+++
```

- Taxonomy `kind` has exactly three terms: `Case study`, `Technical note`, `Essay`. Each post has one.
- `description` is the dek under the title, the list summary and the meta description.
- Reading time and word count are not shown.
- Home-page copy lives in front matter in `content/_index.md` under `[extra]` (hero eyebrow, headline, intro, the four "What we do" items, contact heading and body), so Dawson can edit text without touching templates.

Sample posts are in `content/writing/`. The titles are placeholders from the design pass; bodies are bracketed placeholders. Do not invent real client names, figures or results. Leave bracketed placeholders for Dawson to fill. Mark sample posts `draft = true` before launch unless Dawson says otherwise.

## Copy (approved, use verbatim)

- Eyebrow: Engineering for financial technology
- H1: Focused on securing financial technologies in the age of AI
- Intro: We write secure, scalable software for exchange and banking clients, and like to talk about how we think about it: the decisions, the trade-offs, and what we would do differently.
- Primary button: **Start a conversation** (links to `#contact`). Secondary text link: **Read our writing** (links to `/writing/`). The order matters: connecting is the main call to action.
- Contact section: heading "Have a hard problem in financial technology?", body "Write to us with a short description. We reply personally.", a filled **Contact us** button as a `mailto:` link.
- What we do: Systems in Rust; Event-driven platforms; Infrastructure; Security by default (descriptions in `reference/Main.dc.html`).
- Footer: "© <year> 3304813 Nova Scotia Ltd., operating as Three Three Zero." and "Nova Scotia, Canada". Compute the year at build time.

## Design

Tokens are in `tokens.css`; copy it to `static/css/` or `sass/` and build on it. Both themes are defined with CSS custom properties.

**Themes**

- Default follows the system (`prefers-color-scheme`). The toggle overrides it and stores the choice in `localStorage` under `theme`.
- Put a tiny inline script in `<head>`, before any CSS paints, that sets `data-theme="light|dark"` on `<html>` from storage. Without that attribute, CSS uses the media query, so the site works with JavaScript off.
- Toggle is a real `<button>` with `aria-label` ("Switch to dark theme" / "Switch to light theme") and visible text "Dark" / "Light".
- Set `<meta name="color-scheme" content="light dark">`.

**Type** (self-host woff2, latin subset, `font-display: swap`; all three are OFL licensed)

- Newsreader (400, 500, 400 italic): headings and body. Fallback Georgia, serif.
- Inter (400, 500): navigation, labels, buttons, dates. Fallback system-ui, sans-serif.
- JetBrains Mono (400): code. Fallback ui-monospace, monospace.
- The prototype loads these from Google Fonts. Do not do that in production.

**Layout**

- Page container: max-width 1040px, 32px side padding, centred.
- Article column: max-width 700px, centred.
- Section rows on home and writing list: a 200 to 260px label column (small uppercase Inter, muted) beside a content column, wrapping to one column on narrow screens. 64px column gap, 56px section padding, 1px `--line` rules between sections.
- Phone width must work: no horizontal page scroll, nav wraps, code blocks scroll inside their own box.

**Scale (px at desktop)**

| Element | Font | Size / line-height | Notes |
|---|---|---|---|
| Wordmark | Newsreader 500 | 22 | See open question 1 |
| Home H1 | Newsreader 400 | 60 / 1.08 | letter-spacing -0.015em, max-width 860px |
| Page H1 (Writing) | Newsreader 400 | 56 / 1.1 | |
| Article H1 | Newsreader 400 | 52 / 1.1 | |
| Dek / intro | Newsreader 400 | 21 to 23 / 1.5 to 1.6 | muted; article dek italic |
| Article body | Newsreader 400 | 20 / 1.7 | |
| Article H2 | Newsreader 500 | 32 / 1.2 | 32px top margin |
| List title | Newsreader 400 | 28 (home), 30 (writing) / 1.25 | |
| Eyebrow, section labels | Inter | 13 | uppercase, 0.12em tracking |
| Nav, buttons | Inter | 14 to 15 | |
| Code | JetBrains Mono | 14 / 1.7 | inline code 0.82em with `--code` background |

**Components**

- Primary button: pill (radius 999px), `--fg` background, `--bg` text, 44px min height, 22px horizontal padding, Inter 15px.
- Secondary link: `--accent` text, 44px min height tap area.
- Filter chips on `/writing/`: pill links (All, Case study, Technical note, Essay). Active chip is filled `--fg` with `--bg` text, others outlined with `--line`. In Zola these are plain links to `/writing/` and `/kind/<name>/`, with `aria-current="page"` on the active one. No JavaScript.
- Post list row: date and kind in a muted Inter label column, title and dek beside it; whole row is one link; 32px vertical padding; 1px bottom rule.
- Article header: eyebrow "<Kind> · <Month Year>" in accent, H1, italic dek. Then the facts strip (`<dl>`, auto-fit grid, 4 columns on desktop) only for case studies with `extra` fields.
- Blockquote: 2px `--accent` left border, 28px left padding, 26px italic. Use sparingly.
- Code block: `--code` background, 1px `--line` border, 6px radius, 24px padding, horizontal scroll, optional figcaption in 13px muted Inter.
- Links in prose: underline with offset 4px; no underline on nav and list rows until hover.
- Next-article link at the bottom of each article (next older post).

**Syntax highlighting.** The prototype uses three colours only: keywords in `--accent`, comments in `--muted`, everything else `--fg`. Configure Zola highlighting so it follows the active theme. Prefer class-based output with a small stylesheet that maps token classes to those three colours via the CSS variables, so it switches with the toggle without a rebuild. Read the docs for the installed Zola version to see which approach it supports. Rust, bash, toml, yaml and hcl (Terraform) must highlight correctly.

## Templates

```
templates/
  base.html          head, theme script, skip link, header, footer, blocks
  index.html         home
  section.html       /writing/ list with filter chips
  page.html          article
  taxonomy_list.html  (optional; /kind/ index)
  taxonomy_single.html  /kind/<name>/, reuse the list partial
  404.html
  partials/post_row.html, partials/filter_chips.html, partials/facts.html
```

`base.html` must include: `<html lang="en">`, a skip-to-content link, `<main id="content">`, page `<title>` ("<Page> · Three Three Zero"), meta description, canonical URL, Open Graph and Twitter card basics (text only, no images), the feed `<link rel="alternate">`, and a sitemap (Zola generates `sitemap.xml`; add `robots.txt` pointing to it).

## Accessibility and quality bar

- Text contrast at least 4.5:1 in both themes (tokens are chosen to pass; do not lighten the muted colour).
- Visible `:focus-visible` outline in `--accent`, 2px, with offset.
- Touch targets at least 44px high.
- Real `<button>`, `<a href>`, `<nav aria-label>`, `<dl>`; headings in order, one H1 per page.
- Respect `prefers-reduced-motion`; the design has almost no motion, so keep it that way.
- Lighthouse accessibility and best practices 100 on all three page types. Page weight on an article should be small (fonts plus a few KB of CSS).
- No layout shift from fonts: preload the two main woff2 files and use `size-adjust` fallbacks if easy.

## Build order

1. `zola init`, `config.toml` (`base_url`, `title = "Three Three Zero"`, `generate_feeds`, taxonomy `kind`, highlighting, sitemap), directory skeleton, self-hosted fonts, `tokens.css`.
2. `base.html` with theme logic and the header and footer. Verify both themes and the toggle.
3. Home page, then `/writing/` with filter links, then the article template with the case study sample.
4. Highlighting, feed, sitemap, robots, 404, meta tags.
5. Check against `reference/` at 1280px and 390px in both themes. Fix drift.
6. `zola check`, Lighthouse, then write a short README with the commands above and how to add a post.

## Open questions for Dawson (ask, do not guess)

1. **Wordmark size.** Home uses 40px, Writing and Article use 22px. Probably unintended; use one size site-wide. Ask which.
2. **Contact email.** `mailto:[EMAIL ADDRESS]` is a placeholder. The old site had only a web form and no public address. Needs the real address (or a decision to add a form, which would need a backend and is out of scope for static).
3. **Hosting and deploy.** Not decided. Do not set up deployment until told; keep output host-agnostic.
4. **Old site.** DNS cutover from Wix and any redirects are Dawson's task. Note the old URLs are `/`, `/services`, `/about`, `/contact`; add redirects for them to `/`, `/#about`, `/#about`, `/#contact` once hosting is chosen.
5. **Sample posts.** Replace or draft-flag them before launch.

## Do not

- Do not add a CSS framework, JavaScript framework, analytics, cookie banner, web fonts from a CDN, or stock imagery.
- Do not invent clients, metrics, testimonials or credentials. Use bracketed placeholders.
- Do not modify files in `reference/`; they are the design record.
