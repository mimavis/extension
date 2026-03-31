# Mi Mavis

Extension de Brave/Chromium con Manifest V3.

## Qué hace

- Al pulsar el icono, abre `https://mimavis.framer.website/employees/extension` en una ventana tipo popup.
- En `https://m365.cloud.microsoft/*`, oculta y elimina cualquier bloque `div[data-testid="lazyBanner"]`.

## Cargar en Brave

1. Abre `brave://extensions`.
2. Activa el modo desarrollador.
3. Pulsa en `Load unpacked`.
4. Selecciona la carpeta `mi-mavis-extension`.

El `manifest.json` incluye una clave pública fija en `key` para mantener un ID estable al cargar la extensión.
