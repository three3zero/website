# Design reference

These `.dc.html` files are exports from the design canvas (Home, Writing, Article). They use a template syntax (`{{ ... }}`, `<sc-for>`, `<sc-if>`) that will not render in a browser as-is. Read them for exact markup structure, inline styles, spacing and copy, not as code to run.

- `Main.dc.html`: home page. Source of truth for the wordmark size and hero copy (edited by Dawson after the first pass).
- `Writing.dc.html`: writing index with filter chips. In the canvas the filter is JavaScript state; in Zola, build it as links to taxonomy pages.
- `Article.dc.html`: case study article template.
- `canvas.json`: artboard sizes (1280px wide desktop frames). Check phone width (390px) yourself; the designs are fluid.

Both themes are in each file's script block (`const t = dark ? {...} : {...}`) and in `../tokens.css`.
