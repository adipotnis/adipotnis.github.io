# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal academic website for Aditya Potnis, deployed via GitHub Pages at https://adipotnis.github.io. A hand-written static site — plain HTML and CSS, no framework, no build step. The `.nojekyll` file at the repo root tells GitHub Pages to serve files as-is (Jekyll processing disabled).

## Local development

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. There is no build step — edit `index.html` and refresh. Pushing to `master` deploys automatically via GitHub Pages.

## Architecture

- `index.html` — the entire single-page site. All content (About, Education, Publications, Competitive Robotics, Projects) and all styling live here: content as HTML, styles in a single `<style>` block in `<head>`. Adding or reordering sections means editing this one file.
- `.nojekyll` — disables Jekyll on GitHub Pages so the raw `index.html` is served.
- `images/` and `docs/` — static assets referenced from `index.html` via relative paths (`images/foo.mp4`, `docs/bar.pdf`). Filenames with spaces work; the browser/URL handles the encoding.

## Conventions for `index.html`

- **Layout:** a narrow left sticky `.sidebar` (right-aligned nav links + social links) beside a `.main-content` column (~720px max). Sidebar nav anchors (`#about`, `#education`, …) must match the `id` on the corresponding `<section>`.
- **Design tokens:** CSS custom properties on `:root` — warm-white background (`--bg`), dark-grey ink (`--ink`/`--accent`, no color accent), Crimson Pro (serif headings), Inter (body), JetBrains Mono (dates/meta). Change the palette there, in one place.
- **Media blocks:** each project/publication with media uses the `.side-by-side` flex pattern — text next to an image/video. Use `media--tall` for portrait media:

  ```html
  <h3>Title</h3>
  <p class="meta-line"><a href="url" target="_blank" rel="noopener">Code</a></p>
  <div class="side-by-side">
    <div class="media">
      <video controls><source src="images/foo.mp4" type="video/mp4"></video>
    </div>
    <div class="text">
      <p>Description paragraph.</p>
    </div>
  </div>
  ```
