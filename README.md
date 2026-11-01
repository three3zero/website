# Three Three Zero website

Static site for [Three Three Zero](https://www.threethreezero.com), built with [Zola](https://www.getzola.org/).
Plain HTML and CSS, self-hosted fonts, no third-party requests at runtime. The only JavaScript is the
small light/dark theme toggle.

The approved design brief and reference artboards are in [`docs/design/`](docs/design/).

## Requirements

Zola 0.23 or newer (templates use Tera v2 syntax, which Zola 0.23 introduced).

```bash
sudo pacman -S zola
```

```bash
zola --version
```

## Commands

```bash
zola serve            # dev server with live reload on http://127.0.0.1:1111
```

```bash
zola serve --drafts   # include draft posts (the sample posts are drafts)
```

```bash
zola check            # validate internal and external links
```

```bash
zola build            # output to public/
```

## Layout

```
config.toml                 site config (taxonomy `kind`, feeds, highlighting)
content/_index.md           home page copy (edit the [extra] table, not the template)
content/writing/*.md        posts
templates/                  Tera templates (base, index, section, page, taxonomy, 404)
templates/components.html   components usable from Markdown, e.g. code listing captions
static/css/tokens.css       colour and layout tokens for both themes
static/css/site.css         site styles
static/css/highlight.css    maps syntax-highlighting classes to theme colours
highlight/                  three-colour highlighting theme (keywords, comments, text)
static/fonts/               Newsreader, Inter, JetBrains Mono (OFL, latin subset)
```

## Adding a post

Create `content/writing/<slug>.md`:

```toml
+++
title = "Event sourcing order flow on Kafka"
date = 2026-10-12
description = "One sentence: the dek under the title, the list summary and the meta description."
taxonomies = { kind = ["Case study"] }   # one of: Case study, Technical note, Essay

[extra]
# Case studies only. The facts strip renders only the fields that are present.
client = "..."
role = "..."
stack = "Rust, Kafka, Kubernetes"
duration = "..."
+++

Body in Markdown.
```

Code blocks are highlighted (Rust, bash, TOML, YAML and HCL among others). To caption a listing, put
this on the line after the code block:

```
{{ <caption text="Listing 1. What the reader should notice." /> }}
```

Zola 0.23 renders Markdown content through Tera, so literal `{{`/`{%` in a post (for example GitHub
Actions expressions) must be wrapped in `{% raw %}...{% endraw %}`.

Set `draft = true` to keep a post out of the build; preview it with `zola serve --drafts`.

When there are no published posts, the home page hides "Recent writing", and the header and hero hide
their links to Writing. They appear automatically once a post is published.

## Themes

The site follows the system theme (`prefers-color-scheme`). The header toggle overrides it and stores
the choice in `localStorage` under `theme`. With JavaScript off, the system theme still applies and the
toggle stays hidden.

## Deployment

`.github/workflows/pages.yml` runs `zola check` and `zola build` on every pull request, and on pushes
to `main` builds and deploys to GitHub Pages. The build uses the Pages URL as `base_url`, so it works
both on the `github.io` address and on a custom domain configured in the repository's Pages settings.

One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
