# Harvest Borough

Official downloads and documentation for an original 3D farming and town-building game for Windows and Android.

**Development status:** no verified installer or APK is available yet. This repository holds the public website, documentation, and release assets. It does not contain the playable game source or backend configuration.

## Website

[Open the official website](https://ding-ding-projects.github.io/harvest-borough-downloads/).

This repository publishes the public website through GitHub Pages. It documents the installed game and never hosts gameplay. Version-specific download links appear only after release assets are verified.

The responsive layout supports phone widths from 320 pixels, with labelled bottom navigation, safe-area spacing, touch-sized actions and internally bounded content. Desktop keeps the side navigation.

## Development

Use Node.js 22.13 or newer, then `npm ci` and `npm run build:pages`. The static output is `dist/pages`; `npm run check:pages` checks its canonical URL and project-relative asset paths locally. The publication workflow builds and deploys this directory without test or lint jobs. `npm run dev` retains the existing Sites authoring workflow, and `npm run build` retains its Worker build.

<details><summary>Release and installation boundaries</summary>

Windows releases use unsigned Squirrel.Windows installers. Android releases use a stable self-signed release identity. Updates remain user-confirmed. No Android signing material, server credentials, private implementation, or operational host information belongs in this repository.

Core play is planned to be free, with optional currency and cosmetic purchases. There is no live checkout or fabricated price in the initial website.

</details>

<details><summary>Evidence and remaining work</summary>

The initial website contains original branding, navigation, planned-feature descriptions, download availability, documentation search, and persisted light/dark appearance. The complete localization, advanced settings, advanced regex, per-element customization, and universal-tool equivalents are not complete. Verified desktop 0.1.5 captures are now included below. Their capacity fixture does not establish earned progression, native installer execution or update acceptance. Brand illustrations are explicitly labelled as illustrations.

</details>

<details open><summary>Verified desktop 0.1.5 captures</summary>

Actual built desktop screens captured on 2026-09-05 from source `e560ee7604a40e8dd9eade65e2db4f11686f38d1`. These show an imported capacity fixture. They are not concept art or a claim of complete commercial-quality art.

![Detailed farm with minimal HUD and custom title bar](public/captures/rural-world-015.png)

![Silo storage opened by clicking the building](public/captures/rural-silo-015.png)

The [capture manifest](public/captures/manifest.json) records exact image and executable hashes. No private implementation or operational path is included.

</details>
