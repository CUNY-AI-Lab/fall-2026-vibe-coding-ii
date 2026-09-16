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
- Install Node.js
- Install and launch Pi

Part 2 — Plan + Act (25m):
- Planning stage
- Acting stage
- Verify the reorganized project
- Create `AGENTS.md`

Part 3 — Prototype + Publish (25m):
- Customize the focus timer
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

## Slide 13 — Your CUNY AI Lab API Key & Quota (PLACEHOLDER)

**Label:** Coming Soon
**Title:** Your CUNY AI Lab API Key & Quota

**Stage (stageCenter):**
- **Big:** Placeholder: Steve's introduction to the CUNY AI Lab gateway, API keys, and quota
- **Hint:** What the gateway is, how to get your personal API key and keep it safe, and how your quota works so you don't run out before the next workshop. You'll paste the key during setup on the next slides.

> TODO (Steve): replace this placeholder with the gateway / API key / quota section.

* * *

## Slide 14 — Install Node.js

**Label:** Setup
**Title:** Install Node.js
**Subtitle:** Pi needs Node.js 22.19 or newer

**Stage (stageCompare):**

- **macOS — Terminal:**
  1. Download and run the installer from nodejs.org
  2. Open a new Terminal window
  3. Confirm with `node --version`

- **Windows — PowerShell:**
  1. Install Node.js: `winget install OpenJS.NodeJS.LTS`
  2. Close PowerShell and open a new window
  3. Confirm with `node --version`

* * *

## Slide 15 — Pi Setup

**Label:** Setup
**Title:** Install and Launch Pi

**Stage (step-grid, fragments):**
1. Run the workshop setup: `npx @cuny-ai-lab/pi-workshop` (macOS) / `npx.cmd @cuny-ai-lab/pi-workshop` (Windows)
2. When LazyPi offers to install Pi and its packages, accept the defaults (install all)
3. At `CUNY AI Lab API key:` paste your key (your typing stays hidden)
4. Start Pi with `pi` (`pi.cmd` on Windows)
5. Type `/model` and choose a CUNY AI Lab model
- **?** Something off? Run the health check (`npx @cuny-ai-lab/pi-workshop --doctor`, or `npx.cmd` on Windows), or just ask!

* * *

## Slide 16 — Section Break

**Tag:** Part 2
**Title:** Plan + Act

* * *

## Slide 17 — Planning Stage

**Label:** Demo
**Title:** Planning Stage
**Download:** `src/prototype.zip`

**Stage (step-grid, fragments):**

1. Download and unzip the starter files
2. `cd` into the unzipped folder from your terminal
3. Run `pi` (`pi.cmd` on Windows) to start the agent
4. Use `/plan` so Pi investigates read-only and waits for your approval: `/plan Reorganize this directory`

* * *

## Slide 18 — Acting Stage

**Label:** Demo
**Title:** Acting Stage

**Stage (stageCenter, fragments):**
- **Big:** Review the plan, then choose **Approve and execute now**, or **Continue from proposed plan** to adjust it first.
- One possible result:
  - `index.html`
  - `css/style.css`
  - `js/timer.js`
  - `js/helpers.js`
  - `js/app-init.js`
  - `assets/icon.svg`
  - `assets/config.json`

* * *

## Slide 19 — Open and Test Project

**Label:** Demo
**Title:** Open and Test Project

**Stage (step-grid, fragments):**
1. Check the file structure in Finder (macOS) or File Explorer (Windows): `css/`, `js/`, `assets/`
2. Double-click `index.html` to open in the browser
3. Try the focus timer. Does it start, pause, and reset?
4. Check the console for errors (`Cmd+Option+J` / `Ctrl+Shift+J`)
5. If something's broken, ask Pi to fix it before moving on

* * *

## Slide 20 — Create AGENTS.md

**Label:** Demo
**Title:** Create `AGENTS.md`

**Stage (stageCenter, fragments):**
- **Big:** Ask the agent to capture what it learned during reorganization:
- **Prompt:** "Create an AGENTS.md that documents this project: its purpose, file structure, and conventions."
- Pi writes an `AGENTS.md` that documents the project for future agentic use. Pi loads it automatically whenever you start it in this folder.

* * *

## Slide 21 — Section Break

**Tag:** Part 3
**Title:** Prototype + Publish

* * *

## Slide 22 — Customize the Focus Timer

**Label:** Demo
**Title:** Customize the Focus Timer

**Stage (step-grid, fragments):**
1. Prompt Pi to add a feature — e.g. session history, sound alerts, or custom intervals
2. Keep changes in the right files: CSS in `css/`, JS in `js/`
3. Test locally in the browser
4. Revise one change at a time
5. Keep the app simple enough to publish today

* * *

## Slide 23 — Authenticate with GitHub CLI

**Label:** Publish
**Title:** Authenticate with GitHub CLI

**Stage (step-grid, fragments):**
1. Install GitHub CLI — macOS: run the installer from cli.github.com · Windows: `winget install GitHub.cli`, then open a new PowerShell window
2. Run `gh auth login`
3. Choose GitHub.com → HTTPS → Login with a web browser
4. Complete authentication in the browser
5. Confirm with `gh auth status`

* * *

## Slide 24 — Create Remote Repository

**Label:** Publish
**Title:** Create Remote Repository

**Stage (step-grid, fragments):**
1. Initialize git locally: `git init`
2. Create the repo on GitHub: `gh repo create REPO --public --source=.`
3. Confirm the remote is set: `git remote -v`

* * *

## Slide 25 — Push to GitHub

**Label:** Publish
**Title:** Push to GitHub

**Stage (step-grid, fragments):**
1. `git add .`
2. `git commit -m "first prototype"`
3. `git push`

* * *

## Slide 26 — Enable GitHub Pages

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

## Slide 27 — Resources

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
- [github.com/CUNY-AI-Lab/pi-workshop](https://github.com/CUNY-AI-Lab/pi-workshop) — CUNY AI Lab × Pi setup, `--doctor` health check, and troubleshooting
- [cli.github.com](https://cli.github.com) — GitHub CLI
- [docs.github.com](https://docs.github.com) — GitHub documentation
- [agents.md](https://agents.md) — AGENTS.md specification

* * *

_Last synced: 2026-09-16 (Fall 2026 update: Vibe Coding II title and dates; Pi + CUNY AI Lab setup replaces Gemini CLI; /plan approval flow; no Homebrew; API key & quota placeholder; next steps, co-working, quota reminder; events link). Deck has 27 slides. Update both this file and `index.html` together._
