# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static slide deck for **Vibe Coding II: Building a Prototype** (CUNY AI Lab · Vibe Coding Series, Fall 2026). No build tools, no bundler, no framework — just vanilla HTML, CSS, and JS served as static files. Deployed via GitHub Pages from the `main` branch at `cuny-ai-lab.github.io/fall-2026-vibe-coding-ii`. The prerequisite deck is **Vibe Coding I: Foundations** (`CUNY-AI-Lab/fall-2026-vibe-coding-i`). The original Spring 2026 deck lives at `CUNY-AI-Lab/vibe-coding-prototypes`; this repo was forked from it and has diverged.

## Content Sources of Truth

- **Dates, times, rooms, registration link:** https://ailab.gc.cuny.edu/events/ (Vibe Coding II is Tue Sept 29, 2026, 2:30–4:00 pm; Vibe Coding III clinic Tue Oct 13; co-working sessions Thu Oct 29, Tue Nov 17, Thu Dec 3, 2:00–4:00 pm).
- **AI coding agent:** Pi, installed and connected to CUNY AI Lab models via `npx @cuny-ai-lab/cail-pi` (LazyPi, install all packages). Follow https://github.com/CUNY-AI-Lab/cail-pi for install steps. Planning uses `/plan` (from LazyPi's `@devkade/pi-plan`); Pi auto-loads `AGENTS.md`. Gemini CLI is no longer used.
- **Installs:** Git (`git --version` on macOS triggers the developer tools prompt; `winget install Git.Git` on Windows) is required because LazyPi clones some packages with git. Node.js via nodejs.org installer (macOS) or `winget install OpenJS.NodeJS.LTS` (Windows); GitHub CLI via the cli.github.com installer (macOS) or `winget install GitHub.cli` (Windows). No Homebrew.
- **Slide 13 is a placeholder** for Steve's CUNY AI Lab gateway / API key / quota section.
- **QR code** (`img/qr-code.svg`) encodes `https://cuny-ai-lab.github.io/fall-2026-vibe-coding-ii/`. Regenerate it if the Pages URL changes.

## Architecture

- **`index.html`** — Single-file slide deck. All slides are `<section class="slide">` elements inside `<main>`. All CSS is inlined in `<style>`. No external stylesheets.
- **`src/slides.js`** — Slide engine: keyboard/touch/scrubber navigation, progressive fragment reveal (`.frag` class), overview mode (Escape key), hash-based routing.
- **`src/chladni.html`** — Standalone canvas animation embedded as an iframe in the title slide.
- **`src/prototype.zip`** — Downloadable starter files (messy focus-timer project) used in the workshop demo. Referenced by the "Planning Stage" slide.
- **`SLIDES.md`** — Plain-text mirror of slide content. Must stay in sync with `index.html` whenever slide text changes. Includes slide count in the last line.
- **`img/`** — Logo and QR code assets referenced by the title slide.

## CSS Design Tokens

All styling lives in the `<style>` block in `index.html`. Key custom properties on `:root`:

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0b0e14` | Page background |
| `--fg` | `rgba(255,255,255,0.92)` | Primary text |
| `--muted` | `rgba(255,255,255,0.55)` | Secondary / dimmed text |
| `--accent` | `#79c0ff` | Links, active-slide highlight |
| `--part` | `#b89060` | Section-break part labels (warm gold) |
| `--card` | `rgba(255,255,255,0.055)` | Card / stage background |
| `--stroke` | `rgba(255,255,255,0.13)` | Borders |

Use these tokens instead of raw color values when editing styles.

## Slide System Conventions

- Slides are counted dynamically from `document.querySelectorAll('section.slide')`. The JS auto-sets the scrubber `max` and counter text at runtime.
- The hardcoded `max` attribute on `#slide-scrubber` and the `#slider-counter` text in the HTML should match the actual slide count to prevent a flash of wrong values before JS initializes.
- Progressive reveal: add class `frag` to any element inside a `.stage`. Fragments start hidden and appear one at a time on advance (Space/Arrow Right).
- Slide types: regular (content + stage side-by-side), `slide-break` (full-width section dividers), `data-slide="title"` (title layout with iframe stage).
- Stage inner layouts: `.step-grid` (numbered steps), `.stageCenter` (centered text block), `.agenda-table`, `.res-wrap` (resource links).

## Editing Slides

When adding, removing, or reordering slides:
1. Update both `index.html` and `SLIDES.md` together
2. Update the HTML comment numbers (e.g., `<!-- 12 · PUSH TO GITHUB -->`)
3. Update agenda links in slide 2 (`href="#N"` values)
4. Update `max` on `#slide-scrubber` and `#slider-counter` initial text
5. Update the slide count in the `_Last synced` line of `SLIDES.md`

## Accessibility Conventions

- Only the title slide's decorative canvas stage has `aria-hidden="true"` (with `role="presentation"`). All other stages expose their content to assistive tech.
- `.frag` elements get `aria-hidden` toggled in sync with their `visible` class via `syncFragAria()` in `slides.js`. New fragment reveals must call this function.
- `.step-grid` uses `role="list"` with `role="listitem"` on each `.step-row`. The visual `.step-num` circles are `aria-hidden="true"` (the list role provides numbering).
- The slide counter (`#slider-counter`) has `aria-live="polite"` so screen readers announce slide changes.
- Code blocks in stages use `<code class="code-block">`, not `<span>`.
- `.content:focus-visible` shows an accent-colored outline for keyboard users; `.content:focus` hides the outline for mouse clicks.
- `prefers-reduced-motion: reduce` disables all transitions and animations.

## Stage Layout Gotchas

- On desktop (≥720px), `.agenda-table`, `.step-grid`, `.stageCenter`, `.stageCompare`, and `.res-wrap` become `position: absolute; inset: 0` with `overflow-y: auto`. Content that exceeds the viewport height scrolls inside the stage — new items added to the top may be clipped if the total height overflows.
- The agenda slide (`data-slide="agenda"`) is the most size-sensitive. When adding sections, reduce `margin-bottom` on `.agenda-section` if needed to keep all parts visible without scrolling.

## Development

No install or build step. Open `index.html` in a browser. Use any local server (e.g., `python3 -m http.server`) if the iframe in the title slide needs to load.

## Commit Style

Short, lowercase messages — max 100 characters, no sign-off. Examples from this repo:
```
scaffold vibe-coding prototypes deck
split deploy slide into push + github pages navigation
```
