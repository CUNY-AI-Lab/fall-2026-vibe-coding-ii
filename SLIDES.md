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

Part 0 — Review + Framing (15m):

- Foundations Review
- From Chatbots to Agents

Part 1 — Setup (25m):
- Your CUNY AI Lab API Key & Quota
- Install Node.js & Git
- Install and launch Pi

Part 2 — Plan + Act (25m):
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
1. How do **LLMs** generate code?
   → Code is just another language pattern. The model predicts the next token based on syntax, structure, and problem-solving patterns learned from training data.
2. What are the **four commands** we learned through the CLI?
   → `pwd` print working directory · `cd` change directory · `cd ..` go up one level · `ls` list files
3. What is **git** and what does it do?
   → A version-control system that tracks every change so you can go back in time, undo mistakes, and work in parallel.

* * *

## Slide 4 — Have You Used These?

**Label:** Framing
**Title:** Have you used these?
**Subtitle:** ChatGPT, Claude, Copilot, Gemini

**Stage (stageCenter):**
- **Big:** You type something, it "types" back.

* * *

## Slide 5 — What's Happening

**Label:** Framing
**Title:** What's happening

**Stage (step-grid, fragments):**
1. It's predicting the **next word** over and over, very fast
2. Trained on a lot of text, learned patterns
3. **Fluent** but not "grounded"

* * *

## Slide 6 — Tools & Groundedness

**Label:** Framing
**Title:** Tools & Groundedness
**Subtitle:** How models connect to the real world

**Stage (step-grid, fragments):**
1. Sometimes it **searches the web**
2. Sometimes it **reads a file** you uploaded
3. Sometimes it **runs code**
4. A *tool* is a function it can call: "search this," "fetch that," "calculate this"

* * *

## Slide 7 — Agentic Means It Adapts

**Label:** Framing
**Title:** Agentic means it adapts

**Stage (stageCompare):**
- **Regular / One shot:** You ask → maybe one tool call → answer
- **Agentic / It keeps going:** Look at the result → decide what to do next → call another tool → repeat until the task seems done

* * *

## Slide 8 — The Agentic Harness

**Label:** Framing
**Title:** The Agentic Harness
**Subtitle:** The model doesn't run itself

**Stage (step-grid, fragments):**
1. Something has to run the loop: send a prompt → check if it wants a tool → run the tool → feed the result back → repeat
2. Examples: **Claude Code**, **Cursor**, **Pi** (what we'll use today)
3. That's what people mean when they say "agentic"

* * *

## Slide 9 — Example: One Tool Call

**Label:** Example
**Title:** One tool call
**Stage (step-grid, fragments):**
- **Prompt:** "What's the most recent article in CUNY Academic Works about open access?"
1. Searches the repository → gets back a list
2. Gives you a citation

* * *

## Slide 10 — Example: A Few Steps

**Label:** Example
**Title:** A few steps
**Stage (step-grid, fragments):**
- **Prompt:** "Find recent books on music theory we don't already own."
1. Searches WorldCat → gets 25 results with ISBNs
2. Filters to books where held_by_institution: false
3. Searches Primo by ISBN to double-check holdings
4. Fetches publisher websites to verify ISBNs
5. Returns a list ready for ordering

* * *

## Slide 11 — Example: Try, Fail, Adjust

**Label:** Example
**Title:** Try, fail, adjust
**Stage (step-grid, fragments):**
- **Prompt:** "Check if these 20 ILL-requested titles are available in our catalog."
1. Writes a Python script to query the API
2. Runs it → 401 error, API key missing
3. Reads the error, adds authentication
4. Runs again → some return empty (searching by title instead of ISBN)
5. Adjusts the query to use ISBN
6. Runs again → full results → writes a CSV

* * *

## Slide 12 — Section Break

**Tag:** Part 1
**Title:** Setup

* * *

## Slide 13 — Your CUNY AI Lab API Key & Quota

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

## Slide 14 — Install Node.js & Git

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

## Slide 15 — Pi Setup

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

## Slide 16 — Section Break

**Tag:** Part 2
**Title:** Plan + Act

* * *

## Slide 17 — Set Up Your Project

**Label:** Build
**Title:** Set Up Your Project
**Subtitle:** A professional website, built from your CV

**Stage (step-grid, fragments):**
1. From your projects folder, make a folder for your site, go into it, and start Pi: `mkdir cv-site`, `cd cv-site`, `pi` (macOS) / `pi.cmd` (Windows)
2. Let Pi bring in your CV and turn it into text it can read (copyable prompt): "Find my CV (a PDF or Word file, probably in my Downloads folder), copy it into this folder as cv.pdf or cv.docx, and save its text as cv.txt. For a PDF you can use: npx --yes pdf-parse text cv.pdf -o cv.txt" — muted: CV somewhere else? Tell Pi where it is
3. Check that `cv.txt` looks like your CV — muted: No CV handy? Ask Pi to write a sample one for a fictional researcher

* * *

## Slide 18 — Design Your Site

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

## Slide 19 — Planning Stage

**Label:** Demo
**Title:** Planning Stage

**Stage (step-grid, fragments):**
1. Paste your prompt into Pi and press Enter
2. It starts with `/plan`, so Pi only reads: it studies `cv.txt` and proposes a plan without changing any files
3. Answer any questions Pi asks
4. Read the plan. Wrong facts or a missing section? Tell Pi before you approve

* * *

## Slide 20 — Acting Stage

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

## Slide 21 — Open and Test Your Site

**Label:** Demo
**Title:** Open and Test Your Site

**Stage (step-grid, fragments):**
1. Ask Pi to open `index.html` in your browser
2. Check every fact against your CV: names, titles, dates
3. Make the window narrow. Does it still work at phone size?
4. Check the console for errors (`Cmd+Option+J` / `Ctrl+Shift+J`)
5. Anything wrong? Tell Pi exactly what to fix

* * *

## Slide 22 — Create AGENTS.md

**Label:** Demo
**Title:** Create `AGENTS.md`

**Stage (stageCenter, fragments):**
- **Big:** Ask the agent to write down what it knows about your site:
- **Prompt:** "Create an AGENTS.md that documents this site: its purpose, file structure, design choices (layout, colors, fonts), and that all content must come from cv.txt."
- Pi loads `AGENTS.md` automatically whenever you start it in this folder, so later sessions keep the same design and rules.

* * *

## Slide 23 — Section Break

**Tag:** Part 3
**Title:** Prototype + Publish

* * *

## Slide 24 — Make It Yours

**Label:** Build
**Title:** Make It Yours

**Stage (step-grid):**
1. Ask Pi for one change at a time, e.g. add your photo, a Projects section, or links to your profiles
2. Reload the page after each change and check it
3. Pi can misread or embellish. Fix anything that isn't true
4. Before publishing, ask Pi to check the site for anything you don't want public
5. Keep it simple enough to publish today

* * *

## Slide 25 — Install GitHub CLI

**Label:** Publish
**Title:** Install GitHub CLI

**Stage (step-grid, fragments):**
1. macOS: no Homebrew yet? Install it, then run the "Next steps" commands it prints: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. macOS: `brew install gh`
3. Windows: `winget install GitHub.cli`, then open a new PowerShell window
4. Check that it worked: `gh --version`

* * *

## Slide 26 — Authenticate with GitHub CLI

**Label:** Publish
**Title:** Authenticate with GitHub CLI

**Stage (step-grid, fragments):**
1. Run `gh auth login`
2. Choose GitHub.com → HTTPS → Login with a web browser
3. Complete authentication in the browser
4. Confirm with `gh auth status`

* * *

## Slide 27 — Create Remote Repository

**Label:** Publish
**Title:** Create Remote Repository

**Stage (step-grid, fragments):**
1. Initialize git locally: `git init`
2. Create the repo on GitHub: `gh repo create REPO --public --source=.`
3. Confirm the remote is set: `git remote -v`

* * *

## Slide 28 — Push to GitHub

**Label:** Publish
**Title:** Push to GitHub

**Stage (step-grid, fragments):**
1. `git add .`
2. `git commit -m "first prototype"`
3. `git push`

* * *

## Slide 29 — Enable GitHub Pages

**Label:** Publish
**Title:** Enable GitHub Pages

**Stage (step-grid, fragments):**

1. Go to `github.com/USERNAME/REPO`
2. Click the **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** → **/ (root)** and click **Save**
6. Visit `USERNAME.github.io/REPO`

* * *

## Slide 30 — Resources

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

_Last synced: 2026-09-26 (focus-timer starter exercise replaced with a CV website: Pi imports the CV, an interactive prompt builder writes the /plan prompt, and Part 3 publishes the site). Deck has 30 slides. Update both this file and `index.html` together._
