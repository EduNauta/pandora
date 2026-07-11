# CLAUDE.md — Pandora

## What this project is

Pandora is a functional prototype of a **social network for political parties**, built as a
static web app with no backend (`index.html` + `css/` + `js/`, with Vite as dev/build tooling).
It follows a geography-first approach: an interactive map (Leaflet + OpenStreetMap) is the
backdrop, and territory drives navigation across parties, candidacies, collectives, and
worker-coordination tools.

Main modules (reached from the sidebar module picker + nav trees):

- **Personal (Self)** — your personal account: your party, your workplace, and your party sections.
- **Partido (Party)** — party spaces organized as Talk / Info / Admin.
- **Candidaturas** — candidacies by level (regional / CCAA and municipal), with territory pickers.
- **Colectivos** — collectives by area/topic, with lists, representation, and general coordination.

The **Sindicato** worker-coordination module was **removed from the active app on 2026-07-11** —
it now lives as the standalone **SindicApp** project ("mitosis"). Its module file
(`pandora-sindicato.js`) and a `REMOVAL-MANIFEST.md` are archived in `docs/wiki/Sindicapp/`. The
DOM entry points, CSS, and dead locale strings were removed; some now-unreachable helper functions
remain inert inside `pandora-main.js` (safe dead code, all DOM/`PANDORA_SINDICATO` refs are guarded).
Do **not** re-wire it back in without an explicit decision.

Stack: plain HTML/CSS/JS (ES6+, no framework), Leaflet + OpenStreetMap for the map, GeoJSON
borders embedded in `js/cartagrama-territories-bundle.js`, `localStorage` for demo persistence.
Vite provides the dev server, production build (`dist/`), and GitHub Pages deploy (via
`.github/workflows/deploy.yml`); there is no React, no Node in production, no database. All app
scripts are deliberately *classic* (non-module) scripts loaded in order, so globals and execution
timing match the original single-file version — `index.html` still works opened directly via
double click. Do not convert them to ES modules without an explicit decision to do so.

The app is bilingual (**ES** / **EN**) with demo locales for **España** (Catalunya) and **Ireland**.

Current state: early-stage prototype. Most features are demo UI over fake/local data; there is no
real backend, auth, or database yet.

## Repository layout

```
pandora/
├── index.html                              # page markup; loads css/ and js/ in order
├── css/main.css                            # all styles
├── js/                                     # classic scripts, load order matters
│   ├── locale-bootstrap.js                 # early locale bootstrap (runs before body renders)
│   ├── cartagrama-territories-bundle.js    # territories/boundaries data (verbatim Cartagrama extract)
│   ├── pandora-locale-geo-data.js          # ES + IE territory trees
│   ├── pandora-locale-ie-content.js        # Ireland (EN) locale pack
│   ├── pandora-locale-ie-party.js          # Ireland party lore / seeds
│   ├── pandora-locale-es-content.js        # España (ES) locale pack
│   └── pandora-main.js                     # main app (runPandoraApp)
├── tests/smoke.spec.js                     # Playwright smoke tests (CI QA gate)
├── playwright.config.js                    # Playwright config (runs against `vite preview`)
├── robots.txt / sitemap.xml                # SEO; copied into dist/ by vite.config.js
├── package.json / vite.config.js           # Vite tooling + Playwright test script
├── .github/workflows/deploy.yml            # CI: build + smoke test (+ Pages deploy, gated)
├── .github/dependabot.yml                  # monthly npm + github-actions updates
├── CONTRIBUTING.md                         # human-facing setup + conventions
├── SECURITY.md                             # vulnerability reporting policy
├── docs/
│   ├── changelog/CHANGELOG.md              # Keep a Changelog; entry per meaningful push
│   ├── decisions/                          # ADRs (README template + numbered decisions)
│   ├── plans/PLANES.md                     # living roadmap + deferred-practices log
│   └── wiki/
│       ├── primordial version/Pandora.html # dated primordial snapshot
│       └── Sindicapp/                      # archived Sindicato module + REMOVAL-MANIFEST.md
├── legacy/Pandora.html                     # original monolith, kept verbatim for reference
├── LICENSE
└── README.md
```

The split mirrors the module boundaries that were already documented inside the old single-file
`Pandora.html` (`/* pandora-... */` header comments and `PANDORA_BUNDLED_SCRIPTS` markers). Script
contents were extracted verbatim; a reassembly of the split files reproduces the original file
byte-for-byte (verified: identical MD5).

## Commit message conventions

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): summary`, e.g.
`feat(candidatura): add municipal territory picker`. Common types: `feat`, `fix`, `refactor`,
`docs`, `style`, `test`, `chore`, `build`, `ci`. Scope is optional but helpful (module or area).
Put the *why* in the body when it isn't obvious from the summary.

## Changelog

`docs/changelog/CHANGELOG.md` follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
grouped by version. Add an entry (under Added / Changed / Fixed / Removed) for every push a future
reader would care about; skip trivial typo/doc-only tweaks. Keep an "Unreleased" section at the top
and promote it to a version on release.

## Versioning

Versions live in `package.json` and are tagged (`git tag -a vX.Y.Z`). The Vite scaffolding
placeholder `0.1.0` was **not** a deliberate choice and was reconciled to the project's real scheme:
the first refactor push is **0.0.1**, the professional-practices batch is **0.0.2**. Bump
`package.json` and add a CHANGELOG entry for each tagged release.

Most commits are **not** releases. The default is to commit and push freely without touching the
version or adding a tag, logging anything notable under the CHANGELOG's **Unreleased** section. A
release is cut deliberately: bump `package.json`, move the Unreleased notes under a new `vX.Y.Z`
heading, and tag it.

## Architecture decisions

`docs/decisions/` holds ADRs for decisions that would confuse a future contributor if only the code
were visible — especially ones easy to reverse by accident (moving `index.html` out of the repo
root, converting a classic script to an ES module, or re-adding the Sindicato module). See
`docs/decisions/README.md` for the template and process. Don't edit an old ADR to reflect a change
of mind — write a new one that supersedes it.

## Testing / CI

`npm test` runs a Playwright smoke suite (`tests/smoke.spec.js`) against a production build served by
`vite preview`: the app loads with zero console errors, the module picker and Self/Party nav trees
are intact, and the Leaflet map initializes. `.github/workflows/deploy.yml` runs `npm run build` then
this suite on every push and pull request — it's the QA gate, not an exhaustive suite. Run
`npx playwright install --with-deps chromium` once locally before your first `npm test`. The Pages
deploy job is gated behind the `ENABLE_PAGES` repository variable and only runs on the default
branch; the repo is currently private, so Pages is off (see CONTRIBUTING.md to go live).

## Commit / push policy — read before touching git

The repo owner is the single accountable human for every commit; commits are authored as
`Edu Collin <eduardo.collin.h@gmail.com>`. The working model with an AI assistant here:

- When the owner says **"commit"**, Claude prepares a *plain* commit: stage the working tree, write
  a Conventional Commit message, and log anything notable under the CHANGELOG's **Unreleased**
  section — **without** bumping `package.json` or creating a tag. When the owner says **"release"**
  (or "cut vX.Y.Z"), Claude additionally bumps `package.json`, promotes the Unreleased notes to a
  `vX.Y.Z` heading, and creates the tag. Either way Claude does the `git add` / `git commit`, but
  **not** the push.
- Claude does **not** handle GitHub tokens or credentials and does **not** run `git push` in this
  environment. The owner pushes from their own machine (Terminal or GitHub Desktop), or a future
  session pushes through an authorized GitHub connector (which handles auth without exposing a
  token). This deliberately differs from SindicApp's supplied-token flow.
- Pause and confirm before anything that looks accidental or destructive (e.g. a large unexplained
  deletion) rather than committing it blindly.

Reason: authorship traces back to one accountable human, and secret credentials never pass through
the assistant.
