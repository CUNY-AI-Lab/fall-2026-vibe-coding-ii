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

Part 0 — Review + Framing (20m):

- Foundations Review
- From Chatbots to Agents

Part 1 — Setup (10m):
- Install Homebrew / Node.js
- Install and launch Gemini CLI

Part 2 — Plan + Act:
- Planning stage
- Acting stage
- Verify the reorganized project
- Create `AGENTS.md`

Part 3 — Prototype + Publish:
- Customize the focus timer
- Authenticate with GitHub CLI
- Create remote repository
- Push to GitHub
- Deploy to GitHub Pages

* * *

## Slide 3 — Foundations Review

**Label:** Refresher
**Title:** Foundations Review
**Link:** [Vibe Coding I: Foundations deck](https://cuny-ai-lab.github.io/gen-dev-foundations/#1)

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
2. Examples: **Claude Code**, **Cursor**, **Gemini CLI**
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

## Slide 13 — Install Homebrew / Node.js

**Label:** Setup
**Title:** Install Homebrew / Node.js

**Stage (stageCompare):**

- **macOS — Terminal:**
  1. Install Homebrew from brew.sh
  2. Add Homebrew to PATH
  3. Confirm with `brew --version`

- **Windows — PowerShell:**
  1. Install Node.js LTS from nodejs.org
  2. Reopen PowerShell
  3. Confirm with `node --version`

* * *

## Slide 14 — Gemini CLI Setup

**Label:** Setup
**Title:** Install and Launch Gemini CLI

**Stage (step-grid, fragments):**
1. Install Gemini CLI
2. Run `gemini`
3. Complete login
4. Return to the terminal
5. Confirm Gemini is ready for prompts

* * *

## Slide 15 — Section Break

**Tag:** Part 2
**Title:** Plan + Act

* * *

## Slide 16 — Planning Stage

**Label:** Demo
**Title:** Planning Stage
**Download:** `src/prototype.zip`

**Stage (step-grid, fragments):**

1. Download and unzip the starter files
2. `cd` into the unzipped folder from your terminal
3. Run `gemini` to start the agent
4. Instruct it to propose a plan and wait for approval: "Propose a plan to reorganize this directory; wait for my approval to implement it."

* * *

## Slide 17 — Acting Stage

**Label:** Demo
**Title:** Acting Stage

**Stage (stageCenter, fragments):**
- **Big:** Review and modify the plan where relevant, then instruct the agent to act on it.
- One possible result:
  - `index.html`
  - `css/style.css`
  - `js/timer.js`
  - `js/helpers.js`
  - `js/app-init.js`
  - `assets/icon.svg`
  - `assets/config.json`

* * *

## Slide 18 — Open and Test Project

**Label:** Demo
**Title:** Open and Test Project

**Stage (step-grid, fragments):**
1. Check the file structure in terminal or Finder: `css/`, `js/`, `assets/`
2. Double-click `index.html` to open in the browser
3. Try the focus timer. Does it start, pause, and reset?
4. Check the console for errors (`Cmd+Option+J` / `Ctrl+Shift+J`)
5. If something's broken, ask Gemini to fix it before moving on

* * *

## Slide 19 — Create AGENTS.md

**Label:** Demo
**Title:** Create `AGENTS.md`

**Stage (stageCenter, fragments):**
- **Big:** Use the `/save` command to capture what the agent learned during reorganization:
- **Prompt:** "/save"
- Gemini writes an `AGENTS.md` that documents the project for future agentic use: purpose, file structure, and conventions all in one place.

* * *

## Slide 20 — Section Break

**Tag:** Part 3
**Title:** Prototype + Publish

* * *

## Slide 21 — Customize the Focus Timer

**Label:** Demo
**Title:** Customize the Focus Timer

**Stage (step-grid, fragments):**
1. Prompt Gemini to add a feature — e.g. session history, sound alerts, or custom intervals
2. Keep changes in the right files: CSS in `css/`, JS in `js/`
3. Test locally in the browser
4. Revise one change at a time
5. Keep the app simple enough to publish today

* * *

## Slide 22 — Authenticate with GitHub CLI

**Label:** Publish
**Title:** Authenticate with GitHub CLI

**Stage (step-grid, fragments):**
1. Install GitHub CLI (`brew install gh` on macOS, `npm install -g gh` on Windows)
2. Run `gh auth login`
3. Choose GitHub.com → HTTPS → Login with a web browser
4. Complete authentication in the browser
5. Confirm with `gh auth status`

* * *

## Slide 23 — Create Remote Repository

**Label:** Publish
**Title:** Create Remote Repository

**Stage (step-grid, fragments):**
1. Initialize git locally: `git init`
2. Create the repo on GitHub: `gh repo create REPO --public --source=.`
3. Confirm the remote is set: `git remote -v`

* * *

## Slide 24 — Push to GitHub

**Label:** Publish
**Title:** Push to GitHub

**Stage (step-grid, fragments):**
1. `git add .`
2. `git commit -m "first prototype"`
3. `git push`

* * *

## Slide 25 — Enable GitHub Pages

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

## Slide 26 — Resources

**Label:** Resources
**Title:** Links & References

**Stage (link list):**

Next Steps:
- [Vibe Coding III: Bring Your Own Project Clinic](https://cail-workshop-registration.ailab-452.workers.dev/) — Tuesday, October 13 · 2:30–4:00 pm · New Media Lab (Room 7388.01) · Prerequisite: Vibe Coding I & II
- [Co-Working Sessions](https://ailab.gc.cuny.edu/events/) — Thursday, October 29 · Tuesday, November 17 · Thursday, December 3 · 2:00–4:00 pm
- [Register](https://cail-workshop-registration.ailab-452.workers.dev/) — Sign up for upcoming CUNY AI Lab workshops and sessions

CAIL:
- [ailab.gc.cuny.edu](https://ailab.gc.cuny.edu) — CUNY AI Lab main site
- [chat.ailab.gc.cuny.edu](https://chat.ailab.gc.cuny.edu) — CAIL Sandbox (Open WebUI)
- [github.com/cuny-ai-lab](https://github.com/cuny-ai-lab) — GitHub workshops and repos

Tools & Docs:
- [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — Gemini CLI
- [cli.github.com](https://cli.github.com) — GitHub CLI
- [docs.github.com](https://docs.github.com) — GitHub documentation
- [agents.md](https://agents.md) — AGENTS.md specification

* * *

_Last synced: 2026-03-09. Deck has 26 slides. Update both this file and `index.html` together._
