# 0004. Deploy via GitHub Pages using GitHub Actions

Status: Accepted
Date: 2026-07-11

## Context

Pandora is a static site ([0003](0003-avoid-backend-store-demo-state-in-localstorage.md)) that needs a zero-cost, low-maintenance place to live, ideally wired to the repository so a push publishes the site. The project already lives on GitHub, and the sibling SindicApp uses GitHub Pages via Actions successfully.

## Decision

Deploy to GitHub Pages using a GitHub Actions workflow (`.github/workflows/deploy.yml`): on push to the default branch it runs `npm run build`, runs the Playwright smoke suite ([0005](0005-keep-map-as-primary-navigation-surface.md) invariants are part of what it checks), and — only if that passes — uploads `dist/` and deploys. `vite.config.js` uses `base: './'` so the built site works under the Pages sub-path (`https://<user>.github.io/pandora/`).

The repository is currently **private**, and GitHub Pages requires a public repo on the free plan. So the deploy job is gated behind an `ENABLE_PAGES` repository variable and only runs on the default branch; the build + smoke-test steps still run on every push and PR as a QA gate. Going live is a deliberate action: make the repo public (or upgrade), enable Pages with Source = "GitHub Actions", and set `ENABLE_PAGES=true`.

## Consequences

- Free hosting, and deploys are automatic and reproducible once enabled.
- CI is a genuine gate: a failing smoke test blocks the deploy, it doesn't just report red after the fact.
- While the repo stays private the live site is intentionally off, but the pipeline is fully in place and testable — no rework needed to launch.
- The concurrency group is scoped per-ref so unrelated runs (e.g. several Dependabot PRs at once) can't cancel the real deploy.
