<div align="center">

# Pandora

**Red social para partidos políticos**

Aplicación web estática: mapa geográfico, partidos, candidaturas, colectivos y herramientas de coordinación en el navegador — sin servidor propio.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=flat&logo=openstreetmap&logoColor=white)](https://www.openstreetmap.org/)

</div>

---

## Descripción

Pandora es un **prototipo funcional** de red social para partidos políticos. Parte de un enfoque *geography-first*: un mapa interactivo (Leaflet + OpenStreetMap) es el fondo de la aplicación, y el territorio guía la navegación entre partidos, candidaturas, colectivos y herramientas de coordinación laboral.

La interfaz se organiza en módulos accesibles desde el selector lateral y sus árboles de navegación:

| Módulo | Rol |
|--------|-----|
| **Personal** | Tu cuenta personal: tu partido, tu centro de trabajo y tus secciones de partido |
| **Partido** | Espacios de partido organizados en Talk / Info / Admin |
| **Candidaturas** | Candidaturas por nivel (autonómico / CCAA y municipal), con selectores territoriales |
| **Colectivos** | Colectivos por área/tema, con listas, representación y coordinación general |

Al abrir la web, el **mapa OpenStreetMap** (Leaflet) carga como fondo interactivo. El panel lateral permite alternar entre barra de navegación y mapa a pantalla completa.

> **Nota:** El módulo **Sindicato** se retiró de la app el 2026-07-11 y ahora vive como el proyecto independiente **SindicApp** ("mitosis"). El módulo y su manifiesto de retirada quedan archivados en `docs/wiki/Sindicapp/`.

---

## Características principales

### Mapa y territorio

- **OpenStreetMap** por defecto al cargar la página (Leaflet + tiles OSM)
- **Fronteras administrativas**: CCAA, provincias, comarcas, municipios, NUTS, Irlanda, países, etc.
- Clic en territorio o pin para abrir perfiles y espacios
- Locales **España (Catalunya)** e **Irlanda** con datos de demostración

### Módulos

- **Personal** — cuenta personal vinculada a tu partido y tu centro de trabajo
- **Partido** — módulos Talk / Info / Admin por partido
- **Candidaturas** — niveles autonómico (CCAA) y municipal con selección de territorio
- **Colectivos** — filtro por áreas, listado, representación y coordinación general

### Otros

- Interfaz **bilingüe** (ES / EN) con persistencia de idioma
- Diseño **responsive** (barra lateral / mapa en móvil)
- Datos de demo en **localStorage** del navegador (sin backend)

---

## Stack tecnológico

| Capa | Tecnología |
|------|------------|
| Aplicación | HTML + CSS + JS estáticos (`index.html`, `css/`, `js/`) |
| Tooling | [Vite](https://vitejs.dev/) — servidor de desarrollo y build (no forma parte del runtime) |
| Lenguaje | JavaScript (ES6+, sin framework) |
| Mapa base | [Leaflet](https://leafletjs.com/) + [OpenStreetMap](https://www.openstreetmap.org/) |
| Fronteras | Capas GeoJSON embebidas en `js/cartagrama-territories-bundle.js` |
| Estilos | CSS3 (`css/main.css`) |
| Persistencia | `localStorage` (estado de demo) |

> **Nota:** Esta versión **no** usa React, Next.js ni base de datos, y no hay Node en producción. Vite se usa solo como herramienta de desarrollo y build; el resultado sigue siendo una aplicación estática. Los scripts son *classic scripts* (sin módulos ES) a propósito, para mantener el comportamiento original intacto — `index.html` funciona incluso abierto con doble clic.

---

## Cómo abrir la web

Necesitas **conexión a internet** (Leaflet y el mapa OpenStreetMap se cargan desde la red).

### Opción 1 — Web publicada (GitHub Pages)

Una vez conectado el repositorio y activado Pages: **<https://edunauta.github.io/pandora/>**

### Opción 2 — Sin instalar nada

1. En la página principal del repo, pulsa el botón verde **Code** → **Download ZIP** (o clona con git)
2. Descomprime la carpeta
3. **Doble clic** en `index.html`, o arrástralo a Chrome, Firefox o Edge

### Opción 3 — Desarrollo con Node

```bash
git clone https://github.com/edunauta/pandora.git
cd pandora
npm install
npm run dev       # servidor de desarrollo con recarga (http://localhost:5173)
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve dist/ en local
```

### Si el mapa no carga

Algunos navegadores limitan recursos cuando abres un `file://`. En ese caso, desde la carpeta del proyecto:

```bash
python -m http.server 8080
```

Luego visita en el navegador: `http://localhost:8080/`

---

## Estructura del repositorio

```
pandora/
├── index.html                              # Página principal (markup)
├── css/
│   └── main.css                            # Estilos de la aplicación
├── js/
│   ├── locale-bootstrap.js                 # Arranque temprano de idioma (localStorage)
│   ├── cartagrama-territories-bundle.js    # Fronteras / territorios (GeoJSON embebido)
│   ├── pandora-locale-geo-data.js          # Árbol territorial ES + IE
│   ├── pandora-locale-ie-content.js        # Locale pack Irlanda (EN)
│   ├── pandora-locale-ie-party.js          # Datos de partidos de Irlanda
│   ├── pandora-locale-es-content.js        # Locale pack España (ES)
│   └── pandora-main.js                     # Aplicación principal (runPandoraApp)
├── package.json                            # Scripts npm + dependencia de Vite
├── vite.config.js                          # Configuración de Vite
├── .github/workflows/deploy.yml            # CI: build + deploy a GitHub Pages
├── legacy/Pandora.html                     # Versión monolítica original (solo referencia)
├── docs/wiki/Sindicapp/                     # Módulo Sindicato archivado + manifiesto de retirada
├── LICENSE                                 # MIT
└── README.md                               # Este documento
```

> Los ficheros de `js/` se extrajeron **verbatim** del `Pandora.html` original; reensamblarlos reproduce el fichero original **byte a byte** (mismo MD5). No edites a mano el bundle de territorios; corrige aguas arriba y vuelve a extraer.

---

## Locales de demostración

| Locale | Región por defecto |
|--------|-------------------|
| **ES** | Catalunya / España |
| **IE** | Irlanda |

Cambia idioma con los botones **ES** / **EN** en la cabecera. La preferencia se guarda en `localStorage`.

---

## Estado del proyecto

Pandora es un **prototipo embrionario**. Muchas funciones son interfaces de demostración con datos ficticios:

- [x] Mapa OpenStreetMap con carga automática
- [x] Fronteras administrativas
- [x] Módulos Personal, Partido, Candidaturas y Colectivos (UI + demo)
- [x] Bilingüe ES / EN
- [ ] Backend, autenticación real y base de datos
- [ ] Notificaciones push y PWA
- [ ] Proveedores de mapa adicionales

---

## Privacidad y uso responsable

- Los datos de demo se almacenan **solo en tu navegador** (`localStorage`)
- Los flujos sociales son una **demostración**; no hay servidor que reciba datos
- El uso legal y responsable de la plataforma es responsabilidad de cada persona usuaria

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Ver el archivo `LICENSE` para más detalles.

---

<div align="center">

**Infraestructura neutral para que la militancia se organice con herramientas geográficas compartidas.**

</div>
