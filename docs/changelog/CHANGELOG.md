# Changelog

All notable changes to Pandora are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), grouped by version. Each meaningful push should add an entry — see [`CLAUDE.md`](../../CLAUDE.md) for the process.

## Unreleased

Nothing pending.

## v0.0.3 — 2026-07-11 — CI lockfile fix

### Fixed
- Committed `package-lock.json` so CI's `npm ci` step runs — the v0.0.2 workflow failed in ~12s because no lockfile had been committed.

### Changed
- `package.json` version bumped to `0.0.3`.

## v0.0.2 — 2026-07-11 — Professional practices batch

Brings the repo's process up to standard practice, mirroring the workflow established on the sibling [SindicApp](https://github.com/EduNauta/sindicapp) project.

### Added
- Conventional Commits as the commit message format, documented in `CLAUDE.md`.
- This changelog, backfilled with the project's history so far.
- `docs/decisions/`: an ADR process (template + 6 decisions covering the Vite split, classic scripts, no backend, GitHub Pages deploy, map-as-navigation, and the Sindicato excision).
- Playwright smoke tests (`tests/smoke.spec.js`) wired into `.github/workflows/deploy.yml`: the app loads with no console errors, the module picker plus the Self and Party nav trees are intact, and the Leaflet map initializes — runs on every push and pull request and gates deployment.
- SEO/social preview support: `<meta name="description">`, Open Graph and Twitter Card tags in `index.html`, plus `robots.txt` and `sitemap.xml` (copied into `dist/` by `vite.config.js`).
- `CONTRIBUTING.md` (human-facing setup + conventions) and `SECURITY.md` (vulnerability reporting).
- `.github/dependabot.yml`: monthly automated dependency updates for npm and GitHub Actions.
- `docs/plans/PLANES.md`: living roadmap plus a log of engineering practices deliberately deferred and why.

### Changed
- `package.json` version set to `0.0.2`, reconciling Vite's `0.1.0` scaffolding placeholder with the project's real versioning (the initial refactor push is treated as `0.0.1`).
- `.github/workflows/deploy.yml`: also runs build + smoke test on pull requests; scoped the concurrency group per-ref so parallel runs (e.g. several Dependabot PRs at once) don't cancel the real main-branch deploy; and gated the Pages deploy behind the `ENABLE_PAGES` repository variable (the repo is private, so Pages is off for now).

## v0.0.1 — 2026-07-11 — Initial refactor & Sindicato excision

First versioned release: the standalone `Pandora.html` became a real project.

### Added
- Split the single-file `Pandora.html` (~23.8k lines) into a Vite project: `index.html` + `css/main.css` + eight classic `js/` modules loaded in order. The split reassembles byte-for-byte into the original (verified by identical MD5).
- `package.json`, `vite.config.js`, `.github/workflows/deploy.yml` (GitHub Pages), `.gitignore`, `LICENSE`, `README.md`, and `CLAUDE.md`.
- `legacy/Pandora.html`: the original monolith kept verbatim for reference.

### Removed
- The **Sindicato / SindicApp** worker-coordination module, which has become its own standalone project ("mitosis"). Removed its DOM entry points from `index.html`, its CSS, and its dead locale strings; archived the module file and a removal manifest under `docs/wiki/Sindicapp/`. The rest of the app's behaviour and presentation is unchanged — every `PANDORA_SINDICATO` reference and every removed-element reference was guarded, so the removal is runtime-safe.
