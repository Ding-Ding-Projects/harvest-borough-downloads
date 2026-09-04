# Harvest Borough

Official downloads and documentation for an original 3D farming and town-building game for Windows and Android.

**Development status:** no verified installer or APK is available yet. This repository holds the public website, documentation, and release assets. It does not contain the playable game source or backend configuration.

## Website

The website is being prepared for publication. It documents the installed game and never hosts gameplay. Version-specific download links will be added only after release assets are verified.

## Development

Use Node.js 22.13 or newer, then `npm ci` and `npm run build`. `npm run dev` starts a local authoring server. Hosting uses the committed Sites configuration.

<details><summary>Release and installation boundaries</summary>

Windows releases use unsigned Squirrel.Windows installers. Android releases use a stable self-signed release identity. Updates remain user-confirmed. No Android signing material, server credentials, private implementation, or operational host information belongs in this repository.

Core play is planned to be free, with optional currency and cosmetic purchases. There is no live checkout or fabricated price in the initial website.

</details>

<details><summary>Evidence and remaining work</summary>

The initial website contains original branding, navigation, planned-feature descriptions, download availability, documentation search, and persisted light/dark appearance. The complete localization, advanced settings, advanced regex, per-element customization, and universal-tool equivalents are not complete. Real game captures will be added after the actual built game is verified. Brand illustrations are explicitly labelled as illustrations.

</details>
