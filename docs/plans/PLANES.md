# Planes de Pandora

Documento vivo: hoja de ruta y decisiones de proceso pendientes. Para el historial de cambios ya realizados, ver [`docs/changelog/CHANGELOG.md`](../changelog/CHANGELOG.md); para decisiones de arquitectura, [`docs/decisions/`](../decisions/README.md).

## Estado actual

Pandora es un prototipo embrionario: la mayoría de funciones son interfaz de demostración sobre datos ficticios en `localStorage`, sin backend real. Módulos activos: **Usuario (Self)**, **Partido**, **Candidaturas** y **Colectivos**. El módulo **Sindicato** se separó a su propio proyecto ([ADR 0006](../decisions/0006-excise-sindicato-module-to-standalone-sindicapp.md)).

## Backlog de producto (no priorizado)

- Backend real, autenticación y base de datos (hoy no existe; ver [ADR 0003](../decisions/0003-avoid-backend-store-demo-state-in-localstorage.md)).
- Más locales además de España (Catalunya) e Irlanda.
- Proveedores de mapa adicionales más allá de OpenStreetMap.
- Notificaciones y soporte PWA.
- Limpieza profunda opcional del código muerto de Sindicato que quedó inerte en `pandora-main.js` (ver [ADR 0006](../decisions/0006-excise-sindicato-module-to-standalone-sindicapp.md)); tiene más riesgo que valor ahora mismo, hacerlo solo con la suite de smoke tests como red de seguridad.

## Prácticas de ingeniería diferidas

Prácticas consideradas y **deliberadamente pospuestas** por ahora. Se documentan aquí para no volver a discutirlas desde cero y para poder revisarlas cuando cambien las circunstancias (por ejemplo, si se incorporan colaboradores reales). Razonamiento basado en el hecho de que hoy es un proyecto de una persona con asistencia de IA.

- **Linting/formateo como gate (ESLint, Stylelint, Prettier):** valioso sobre todo para mantener estilo consistente entre *varias manos*. Con un solo autor, el beneficio es pequeño frente al coste de configuración y mantenimiento. Revisitar si entran colaboradores.
- **Hooks de pre-commit (Husky, lint-staged):** solo compensan cuando ya hay linting real que forzar automáticamente. No añadir la infraestructura de hooks antes de que exista una regla que valga la pena imponer.
- **Flujo de revisión por PR:** el sentido de un PR es un segundo par de ojos antes de fusionar. Sin una segunda persona, el gate de CI ([ADR 0004](../decisions/0004-deploy-via-github-pages-using-github-actions.md), smoke tests) aporta casi toda la red de seguridad sin el sobrecoste de ramificar cada cambio.
- **Automatización de releases (semantic-release y similares):** autogenera versiones/changelog a partir de los commits. Merece la pena cuando la cadencia de releases hace que etiquetar a mano sea un cuello de botella; prematuro antes de eso.

## Notas de proceso

- **Carpetas sincronizadas en la nube (Google Drive):** pueden provocar comportamiento local errático de git/build (bloqueos de archivos que no se pueden borrar, copias recursivas que fallan por permisos) que no se reproduce en CI. Si un build parece roto en local pero el código está bien, probar en un directorio temporal normal antes de culpar al código.
- **Push a GitHub:** por diseño, el asistente de IA prepara el commit pero no hace push ni maneja tokens; el push lo realiza la persona propietaria (ver `CLAUDE.md` § Commit / push policy).
