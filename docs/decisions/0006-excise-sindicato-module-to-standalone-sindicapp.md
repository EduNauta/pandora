# 0006. Excise the Sindicato module (mitosis to standalone SindicApp)

Status: Accepted
Date: 2026-07-11

## Context

Pandora originally bundled a **Sindicato** worker-coordination module (`pandora-sindicato.js`, exposing `window.PANDORA_SINDICATO`) — a map of companies, workplace profiles, denuncias, salary transparency, sector forums, and platform coordination. That module was the upstream source that the standalone **SindicApp** project was forked from (`SINDICATO_FORK_START` / `SINDICATO_FORK_END` markers). SindicApp has since become its own fully autonomous website; keeping Sindicato inside Pandora meant maintaining a large, dead branch that no longer belonged to Pandora's scope (a social network for political parties).

## Decision

Remove the Sindicato feature from the active Pandora app and archive it. Deleted its user-facing DOM entry points from `index.html` (module-picker box, the whole `#sindicato-nav-tree`, the Self "workplace" block, the module panel, the script tag), its CSS, and its now-dead locale strings. Archived `pandora-sindicato.js` plus a `REMOVAL-MANIFEST.md` under `docs/wiki/Sindicapp/`.

Scope was deliberately limited to a **safe removal**: the ~90 now-unreachable Sindicato helper functions inside `pandora-main.js` were left in place as inert dead code, because every call into them (and every reference to a removed DOM element) is guarded, so leaving them cannot throw at runtime and avoids risky surgery in shared dispatcher functions.

Strings and features that merely *look* related were kept: the `syndical` **collectives** topic-area, its demo team names, and party lore using the word "sindical" are part of other modules and were not touched.

## Consequences

- Pandora's active surface no longer includes Sindicato; the feature lives on only in SindicApp and in Pandora's archive/legacy copies.
- `pandora-main.js` still contains inert Sindicato helper code. A future "deep clean" could strip it, but that means editing shared functions and carries more risk than value right now; it's optional and should be verified with the smoke suite if done.
- Re-adding Sindicato to Pandora would be a deliberate product decision and should supersede this ADR rather than happen incidentally. The `REMOVAL-MANIFEST.md` documents exactly what was removed, so reconstruction is possible.
