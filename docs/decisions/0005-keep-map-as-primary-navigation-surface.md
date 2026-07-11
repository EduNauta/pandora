# 0005. Keep the map as the primary navigation surface

Status: Accepted
Date: 2026-07-11

## Context

Pandora is "geography-first": an interactive Leaflet + OpenStreetMap map is the backdrop of the whole app, and territory (countries, regions, provinces, municipalities) is the organizing principle for parties, candidacies, and collectives. It would be easy, in a future refactor, to treat the map as just one view among many and demote it to a tab — which would quietly change the product's core interaction model.

## Decision

The map stays the persistent primary surface: it loads automatically on startup (`initOpenStreetMap` during boot) and sits behind the sidebar/console, which is the navigation layer over it. Territory selection on the map drives the rest of the UI, rather than the map being a destination you navigate *to*.

## Consequences

- The Leaflet map initializing on load is a product invariant — the smoke test asserts `.leaflet-container` appears, so an accidental regression that stops the map from loading fails CI.
- Boundary/territory data (embedded GeoJSON in `js/cartagrama-territories-bundle.js`) is core, not optional decoration.
- Any redesign that would make the map secondary (a tab, a modal, an opt-in view) is a real product change and should get its own ADR superseding this one, not be done incidentally.
