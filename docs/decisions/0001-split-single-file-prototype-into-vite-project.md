# 0001. Split the single-file prototype into a Vite project

Status: Accepted
Date: 2026-07-11

## Context

Pandora started as a single, self-contained `Pandora.html` (~23,800 lines, ~1.3 MB): all CSS in one `<style>` block and all JavaScript in a series of `<script>` blocks, each already labelled with an intended filename (`cartagrama-territories-bundle.js`, `pandora-locale-*`, `pandora-sindicato.js`, `pandora-main.js`) and delimited by `PANDORA_BUNDLED_SCRIPTS` markers. That works when opened directly in a browser, but it's hard to diff, review, deploy, or evolve, and it can't participate in normal tooling (dev server, build, CI, hosting).

The sibling project SindicApp had already been through this same conversion, giving a proven target layout to mirror.

## Decision

Split the monolith into a conventional static project built with [Vite](https://vitejs.dev/): `index.html` at the repo root, `css/main.css`, and the JavaScript as separate files under `js/` loaded in order. The extraction is **verbatim** — the split files, reassembled with their `<script>`/`<style>` wrappers, reproduce the original `Pandora.html` byte-for-byte (verified by identical MD5). The original is kept at `legacy/Pandora.html` for reference.

`index.html` **must** stay at the repo root — both Vite's build entry and GitHub Pages' default document depend on that exact name and location; moving it breaks the deploy.

## Consequences

- The project now has a real dev/build/preview workflow, CI, and a hosting story (see [0004](0004-deploy-via-github-pages-using-github-actions.md)).
- Behaviour and appearance are unchanged from the monolith — the verbatim/byte-identical property is the safety guarantee, and it constrains how the scripts are wired (see [0002](0002-keep-application-scripts-classic-not-es-modules.md)).
- The territories bundle is a generated extract; fix it upstream and re-extract rather than hand-editing (its header comment documents this).
