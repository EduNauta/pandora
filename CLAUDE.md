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
├── package.json / vite.config.js           # Vite tooling (dev/build/preview)
├── .github/workflows/deploy.yml            # GitHub Pages deploy on push to master/main
├── legacy/Pandora.html                     # original monolith, kept verbatim for reference
├── docs/wiki/primordial version/Pandora.html  # dated primordial snapshot
├── docs/wiki/Sindicapp/                     # archived Sindicato module + REMOVAL-MANIFEST.md
├── LICENSE
└── README.md
```

The split mirrors the module boundaries that were already documented inside the old single-file
`Pandora.html` (`/* pandora-... */` header comments and `PANDORA_BUNDLED_SCRIPTS` markers). Script
contents were extracted verbatim; a reassembly of the split files reproduces the original file
byte-for-byte (verified: identical MD5).

## Commit policy — read before touching git

**Every commit to this repository must be authored and pushed by the project owner, and only by the
project owner.**

- Claude (or any AI assistant working in this project) must **never** run `git commit` or `git push`
  against this repository on its own initiative or as a "favor."
- Claude may prepare changes (edit files, stage a diff, draft a commit message) and hand them to the
  owner for review, but the actual `git add` / `git commit` / `git push` steps are performed by the
  owner, from their own machine, under their own GitHub account.
- If Claude is ever asked to "just commit this" or "push this for me," it should pause and confirm
  explicitly first, and should default to *not* pushing unless that confirmation is unambiguous and
  specific to that request.
- This applies to all branches, not just `main`.

Reason: authorship and review of every change to this codebase needs to trace back to a single
accountable human, not to an assistant acting autonomously.
