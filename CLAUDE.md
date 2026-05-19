# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal academic website for Aditya Potnis, deployed via GitHub Pages at https://adipotnis.github.io. Jekyll site using the `mmistakes/minimal-mistakes` remote theme (v4.26.2).

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Site serves at http://localhost:4000. GitHub Pages builds on push, so changes to `main` go live automatically.

## Architecture

- `index.md` — the entire single-page site. All content (About, Publications, Projects, Competitive Robotics) lives here as markdown plus inline HTML. Adding or reordering sections means editing this one file.
- `_config.yml` — site-level settings, author profile, and sidebar/footer links. The `remote_theme` line pulls minimal-mistakes from GitHub; do not commit a local theme copy.
- `_data/navigation.yml` — top-nav anchor links. Anchors must match the auto-generated section IDs from `index.md` headings (lowercased, spaces → hyphens).
- `_includes/head/custom.html` — site-wide CSS overrides for the minimal-mistakes theme. Defines the `.side-by-side` flex layout used throughout `index.md` for text-next-to-media project blocks, plus sidebar/page-width overrides. Style changes for the site go here, not in `index.md`.
- `images/` and `docs/` — static assets referenced from `index.md` via relative paths (`images/foo.mp4`, `docs/bar.pdf`).

## Conventions for `index.md`

Each project/publication entry follows a repeating pattern:

```markdown
### Title
Code/Paper/Report: [Link](url)

<div class="side-by-side">
<div class="text" markdown="1">
Description paragraph.
</div>
<div class="media">
<video controls><source src="images/foo.mp4" type="video/mp4"></video>
</div>
</div>
```

The `markdown="1"` attribute on the inner `.text` div is required for Jekyll to render markdown inside the HTML block. Omitting it leaves the description as literal text.
