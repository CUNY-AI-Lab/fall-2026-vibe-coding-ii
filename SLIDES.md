# SLIDES.md — Vibe Coding II: Building a Prototype

## CUNY AI Lab · Vibe Coding Series

Companion to `index.html`. Keep this file in sync whenever slide titles or text content change.

* * *

## Slide 1 — Title

**Label:** CUNY AI Lab · Vibe Coding Series
**Title:** Vibe Coding II: Building a Prototype
**Date:** Tuesday, September 29, 2026, 2:30–4:00 pm
**Stage:** Chladni Figures artifact (`src/chladni.html`)

* * *

## Slide 2 — Agenda

**Label:** Workshop
**Title:** Agenda

**Stage (agenda table):**

Part 0 — Review (5m):
- Foundations Review

Part 1 — Setup (25m):
- Your CUNY AI Lab API Key & Quota
- Install Node.js & Git
- Install and launch Pi

Part 2 — Plan + Act (35m):
- Set Up Your Project
- Design Your Site
- Planning & Acting
- Open and Test Your Site
- Create `AGENTS.md`

Part 3 — Prototype + Publish (25m):
- Make It Yours
- Install GitHub CLI
- Authenticate with GitHub CLI
- Create remote repository
- Push to GitHub
- Deploy to GitHub Pages

* * *

## Slide 3 — Foundations Review

**Label:** Refresher
**Title:** Foundations Review
**Link:** [Vibe Coding I: Foundations deck](https://cuny-ai-lab.github.io/fall-2026-vibe-coding-i/#1)

**Stage (step-grid, fragments):**
1. What is **vibe coding**?
   → Making software by describing what you want in natural language and iterating on what the system produces.
2. What makes it a **coding agent**?
   → A model working with context, tools, and a feedback loop: it chooses an action, a tool reads or edits files or runs a command, and the result comes back.
3. What is **context**?
   → What the model has in front of it when it makes its next decision: your request, the conversation, files and instructions it has read, and tool results.
4. Which **commands** move you around, and what does **Git** do?
   → `pwd` where you are · `ls` what's in the folder · `cd` into a folder · `cd ..` up one level. Git tracks every change to your files; GitHub stores them online.

* * *

## Slide 4 — Section Break

**Tag:** Part 1
**Title:** Setup

* * *

## Slide 5 — Your CUNY AI Lab API Key & Quota

**Label:** Setup
**Title:** Your CUNY AI Lab API Key & Quota

**Stage (key guide):**
- **Gateway:** The CUNY AI Lab Gateway connects Pi to the models available through the Lab. Your personal key identifies your account and applies your quota.
- Compact screenshot of the CUNY AI Lab Dashboard's key-creation form
- **Lead:** Create a personal key in your CUNY AI Lab Dashboard. Copy it when it appears. You cannot reveal the complete key again.
- **Keep it private:** Paste the key only into Pi's hidden prompt. Never put it in chat, GitHub, screenshots, or email.
- **Your quota:** All your personal keys share one allowance. Creating another key does not add capacity. Check your current usage in the Dashboard.
- **Guide:** https://ailab.gc.cuny.edu/docs/api-keys/

* * *

## Slide 6 — Install Node.js & Git

**Label:** Setup
**Title:** Install Node.js & Git
**Subtitle:** Pi's installer needs Node.js 22.19 or newer and Git

**Stage (stageCompare):**

- **macOS — Terminal:**
  1. No Homebrew yet? Install it from brew.sh, then run the "Next steps" commands it prints: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
  2. Install Node.js: `brew install node`
  3. Open a new Terminal window and confirm with `node --version` and `git --version`
  - Muted note: Used `sudo` for Pi last time? Tell us first
  - Presenter fix for anyone who did: `sudo chown -R $(whoami) ~/.npm ~/.pi` → `brew install node` → `npm install -g @earendil-works/pi-coding-agent`

- **Windows — PowerShell:**
  1. Install Node.js and Git: `winget install OpenJS.NodeJS.LTS`, `winget install Git.Git`
  2. Close PowerShell and open a new window
  3. Confirm with `node --version` and `git --version`

* * *

## Slide 7 — Pi Setup

**Label:** Setup
**Title:** Install and Launch Pi

**Stage (step-grid, fragments):**
1. Run the workshop setup: `npx @cuny-ai-lab/cail-pi` (macOS) / `npx.cmd @cuny-ai-lab/cail-pi` (Windows).
2. When LazyPi asks, choose **Install everything**. Takes a few minutes. Warnings and a note about `/login` are normal: wait for the key prompt
3. At `CUNY AI Lab API key:` paste your key (your typing stays hidden)
4. Start Pi with `pi` (`pi.cmd` on Windows)
5. Type `/model` and choose a CUNY AI Lab model
- **?** Something off? Never use `sudo`. Run the health check (`npx @cuny-ai-lab/cail-pi --doctor`, or `npx.cmd` on Windows), or just ask!

* * *

## Slide 8 — Section Break

**Tag:** Part 2
**Title:** Plan + Act

* * *

## Slide 9 — Set Up Your Project

**Label:** Build
**Title:** Set Up Your Project
**Subtitle:** A professional website, built from your CV

**Stage (step-grid, fragments):**
1. From your projects folder, make a folder for your site, go into it, and start Pi: `mkdir cv-site`, `cd cv-site`, `pi` (macOS) / `pi.cmd` (Windows)
2. Let Pi bring in your CV and turn it into text it can read (copyable prompt): "Find my CV (a PDF or Word file, probably in my Downloads folder), copy it into this folder as cv.pdf or cv.docx, and save its text as cv.txt. For a PDF you can use: npx --yes pdf-parse text cv.pdf -o cv.txt" — muted: CV somewhere else? Tell Pi where it is
3. Check that `cv.txt` looks like your CV — muted: No CV handy? Ask Pi to write a sample one for a fictional researcher

* * *

## Slide 10 — Design Your Site

**Label:** Build
**Title:** Design Your Site
**Subtitle:** Pick your options, then copy the prompt into Pi

**Stage (interactive prompt builder, `src/cv-builder.js`):**
- **Layout:** Single scrolling page (default) · Sidebar profile · Minimal business card · Several pages
- **Style:** Clean & minimal (default) · Academic & classic · Bold & modern · Warm & approachable · Creative & playful
- **Colors** (with swatches): Ink & paper · Navy & gold (default) · Forest & cream · Terracotta & sand · Ocean & teal · Plum & blush · Let Pi choose
- **Fonts:** Serif headings, sans body (default) · All sans-serif · All serif · Sans with monospace accents
- **Light or dark:** Follow system, with a toggle (default) · Light · Dark
- **Sections** (toggle chips): About, Education, Experience, Publications, Contact on by default; Research, Teaching, Projects, Skills, Awards off
- **Checkboxes:** Hide my phone number and home address (on) · Add a "Download CV" button (off; when off, the prompt tells Pi to keep `cv.*` out of the repo with `.gitignore`)
- **Output:** a one-line prompt starting with `/plan` that tells Pi to use only facts from `cv.txt`, build plain HTML/CSS/JS that works on GitHub Pages, and make it responsive and accessible, plus a **Copy prompt** button

* * *

## Slide 11 — Planning Stage

**Label:** Demo
**Title:** Planning Stage

**Stage (step-grid, fragments):**
1. Paste your prompt into Pi and press Enter
2. It starts with `/plan`, so Pi only reads: it studies `cv.txt` and proposes a plan without changing any files
3. Answer any questions Pi asks
4. Read the plan. Wrong facts or a missing section? Tell Pi before you approve

* * *

## Slide 12 — Acting Stage

**Label:** Demo
**Title:** Acting Stage

**Stage (stageCenter, fragments):**
- **Big:** Review the plan, then choose **Approve and execute now**, or **Continue from proposed plan** to adjust it first.
- One possible result:
  - `index.html`
  - `css/style.css`
  - `js/main.js`
  - `.gitignore`
  - `cv.pdf`
  - `cv.txt`

* * *

## Slide 13 — Open and Test Your Site

**Label:** Demo
**Title:** Open and Test Your Site

**Stage (step-grid, fragments):**
1. Ask Pi to open `index.html` in your browser
2. Check every fact against your CV: names, titles, dates
3. Make the window narrow. Does it still work at phone size?
4. Check the console for errors (`Cmd+Option+J` / `Ctrl+Shift+J`)
5. Anything wrong? Tell Pi exactly what to fix

* * *

## Slide 14 — Create AGENTS.md

**Label:** Demo
**Title:** Create `AGENTS.md`

**Stage (stageCenter, fragments):**
- **Big:** Ask the agent to write down what it knows about your site:
- **Prompt:** "Create an AGENTS.md that documents this site: its purpose, file structure, design choices (layout, colors, fonts), and that all content must come from cv.txt."
- Pi loads `AGENTS.md` automatically whenever you start it in this folder, so later sessions keep the same design and rules.

* * *

## Slide 15 — Section Break

**Tag:** Part 3
**Title:** Prototype + Publish

* * *

## Slide 16 — Make It Yours

**Label:** Build
**Title:** Make It Yours

**Stage (step-grid):**
1. Ask Pi for one change at a time, e.g. add your photo, a Projects section, or links to your profiles
2. Reload the page after each change and check it
3. Pi can misread or embellish. Fix anything that isn't true
4. Before publishing, ask Pi to check the site for anything you don't want public
5. Keep it simple enough to publish today

* * *

## Slide 17 — Install GitHub CLI

**Label:** Publish
**Title:** Install GitHub CLI

**Stage (step-grid, fragments):**
1. macOS: no Homebrew yet? Install it, then run the "Next steps" commands it prints: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. macOS: `brew install gh`
3. Windows: `winget install GitHub.cli`, then open a new PowerShell window
4. Check that it worked: `gh --version`

* * *

## Slide 18 — Authenticate with GitHub CLI

**Label:** Publish
**Title:** Authenticate with GitHub CLI

**Stage (step-grid, fragments):**
1. Run `gh auth login`
2. Choose GitHub.com → HTTPS → Login with a web browser
3. Complete authentication in the browser
4. Confirm with `gh auth status`

* * *

## Slide 19 — Create Remote Repository

**Label:** Publish
**Title:** Create Remote Repository

**Stage (step-grid, fragments):**
1. Ask Pi to set up the repository (copyable prompt): "Make this folder a git repository with main as the branch name, then create a public GitHub repository called cv-site for it with the gh CLI and connect the two."
2. Watch what Pi runs: `git init`, then `gh repo create`
3. Pi can do this because you logged in with `gh` on the last slide

* * *

## Slide 20 — Push to GitHub

**Label:** Publish
**Title:** Push to GitHub

**Stage (step-grid, fragments):**
1. Ask Pi to publish your files (copyable prompt): "List the files that will be published, then commit them and push to GitHub. If git doesn't know my name and email yet, set them from my GitHub account, using my GitHub noreply email."
2. Check the list: no `cv.pdf` or `cv.txt`, unless you chose the "Download CV" button
3. Ask Pi for the link and open your repository on GitHub

* * *

## Slide 21 — Enable GitHub Pages

**Label:** Publish
**Title:** Enable GitHub Pages

**Stage (step-grid, fragments):**

1. Go to `github.com/USERNAME/cv-site`
2. Click the **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** → **/ (root)** and click **Save**
6. Visit `USERNAME.github.io/cv-site`

* * *

## Slide 22 — Resources

**Label:** Resources
**Title:** Links & References

**Stage (link list):**

Next Steps:
- [Vibe Coding III: Bring Your Own Project Clinic](https://cail-workshop-registration.ailab-452.workers.dev/) — Tuesday, October 13 · 2:30–4:00 pm · New Media Lab (Room 7388.01) · Prerequisite: Vibe Coding I & II
- [Co-Working Sessions](https://ailab.gc.cuny.edu/events/) — Thursday, October 29 · Tuesday, November 17 · Thursday, December 3 · 2:00–4:00 pm
- **Mind your quota** — Your API key has a limited quota. Keep an eye on it so you don't burn through it before the next session.
- [Register](https://cail-workshop-registration.ailab-452.workers.dev/) — Sign up for upcoming CUNY AI Lab workshops and sessions

CAIL:
- [ailab.gc.cuny.edu](https://ailab.gc.cuny.edu) — CUNY AI Lab main site
- [ailab.gc.cuny.edu/events](https://ailab.gc.cuny.edu/events/) — Upcoming workshops, co-working sessions, and registration
- [chat.ailab.gc.cuny.edu](https://chat.ailab.gc.cuny.edu) — CAIL Sandbox (Open WebUI)
- [github.com/cuny-ai-lab](https://github.com/cuny-ai-lab) — GitHub workshops and repos

Tools & Docs:
- [pi.dev](https://pi.dev) — Pi coding agent
- [github.com/CUNY-AI-Lab/cail-pi](https://github.com/CUNY-AI-Lab/cail-pi) — CUNY AI Lab × Pi setup, `--doctor` health check, and troubleshooting
- [cli.github.com](https://cli.github.com) — GitHub CLI
- [docs.github.com](https://docs.github.com) — GitHub documentation
- [agents.md](https://agents.md) — AGENTS.md specification

* * *

_Last synced: 2026-09-27 (Part 0 cut to one Foundations Review slide in Vibe Coding I's current terms; framing and example slides removed; the time moved to Part 2). Deck has 22 slides. Update both this file and `index.html` together._
