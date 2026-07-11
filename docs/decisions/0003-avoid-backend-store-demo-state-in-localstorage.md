# 0003. Avoid a backend; store demo state in localStorage

Status: Accepted
Date: 2026-07-11

## Context

Pandora is an early-stage prototype whose purpose is to demonstrate the product concept — a geography-first social network for political parties — not to run real accounts or persist real data. A real deployment would eventually need auth, a database, and a server, but committing to that infrastructure now would slow iteration and impose operational cost and security surface long before the concept is validated.

## Decision

Ship as a purely static site with no backend. All demo/interaction state (selected locale, territory notes, agenda accordions, etc.) is kept in the visitor's own browser via `localStorage`; nothing is transmitted to a server. Legacy `localStorage` key prefixes (e.g. `territory_wiki_`, `politics_`) are preserved for continuity.

## Consequences

- Zero hosting cost and no server to secure — the site is just static files (see [0004](0004-deploy-via-github-pages-using-github-actions.md)).
- No cross-device or multi-user persistence: state lives on one browser and disappears if the visitor clears storage. This is acceptable and expected for a demo.
- Real auth, a database, and a backend remain explicitly future work; introducing them will be a significant decision worth its own ADR.
