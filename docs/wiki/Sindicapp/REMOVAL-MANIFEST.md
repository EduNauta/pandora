# Sindicato / SindicApp — Removal Manifest

The **Sindicato** module (the worker-coordination feature, upstream source of the standalone
**SindicApp** project) was excised from the active Pandora app on **2026-07-11**. SindicApp now
lives as its own autonomous project ("mitosis"), so this branch is dead here and has been archived.

This document records exactly what was removed and from where, so the feature can be reconstructed
if ever needed. The complete pre-removal app is also preserved verbatim in
`legacy/Pandora.html` and `docs/wiki/primordial version/Pandora.html`.

## Archived here

- **`pandora-sindicato.js`** — the full Sindicato module (exposed `window.PANDORA_SINDICATO`:
  demo data, persistence, and the workspace HTML builder). Moved out of `js/` into this folder.

## What was removed from the active project

### `index.html` — user-facing entry points (8 blocks)
- Module-picker box `#pandora-module-sindicato-box` (button `data-module="sindicato"`).
- Self sub-nav button `data-self-sub="sindicato"`.
- Self "your workplace" block `#self-sindicato-block` (with `#self-sindicato-section-nav`).
- Party admin button `data-self-party-section="admin-sindicato"`.
- The entire `#sindicato-nav-tree` (subnav + workplaces, map, unions, feed, sectores,
  coordination, wiki, vivienda sidebars).
- Sidebar welcome logo `#sindicato-sidebar-welcome-logo`.
- Module panel `#template-module-sindicato`.
- The `<script src="./js/pandora-sindicato.js">` tag.

### `css/main.css` — all sindicato rules (cosmetic)
- Nav-grid rules (`#self-sindicato-section-nav`, `#sindicato-subnav`, `.sindicato-map-*`, etc.).
- The self-sindicato location-workspace body rules.
- The large sindicato workspace block (workspace body-classes, sector tree, workplace cards,
  reports/wages/convenio/strike UI, unions, feed, badges, etc.) that ran to end of file.
- Trimmed the sindicato selectors out of one shared multi-selector rule
  (`#sindicato-subnav, #sindicato-workplace-section-nav, .team-picker-select` → `.team-picker-select`).

### `js/pandora-locale-es-content.js` and `js/pandora-locale-ie-content.js` — dead strings
- `moduleLabels`: `sindicato`, `sindicatoNavAria`, `sindicatoViewsAria`.
- `selfSections`: `adminSindicato`, `selfSubSindicato`.
- `nav` selector map: all `[data-module="sindicato"]`, `[data-self-sub="sindicato"]`,
  `[data-self-party-section="admin-sindicato"]`, `[data-self-sindicato-section="…"]`,
  `[data-sindicato-sub="…"]`, `[data-sindicato-coord-section="…"]`, `[data-sindicato-coord-sub="…"]`,
  `[data-sindicato-wiki-sub="…"]`, and `[data-sindicato-section="…"]` entries.
- `aboutModules` prose: dropped the "Sindicato / SindicApp" sentence and the module from the list.

## What was intentionally KEPT (NOT sindicato-module)

These match "sindic"/"syndical" but belong to other features and remain untouched:
- The **`syndical` collectives topic-area** (`topicAreaLabels.syndical`,
  `[data-topic-area="syndical"]`) and its demo team names (`syndical-team-1/2/3`,
  `professional-team-3`).
- Party lore / candidate flavor text using the words *sindical* / *sindicalismo*
  (e.g. the coalition category list, retro-feudal digital syndicalism ideology label).
- The Collectives "representation" CSS block (`.collective-representation-*`), which sat adjacent
  to the sindicato CSS.

## Notes on safety

Every call into `window.PANDORA_SINDICATO` in `pandora-main.js` was **guarded**, so removing the
module and its DOM entry points cannot throw at runtime. Per the chosen "safe removal" scope, the
now-unreachable sindicato helper functions **remain inert inside `pandora-main.js`** (dead code);
they are never triggered because their DOM entry points are gone. A future "deep clean" pass could
strip them if desired.
