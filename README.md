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

<details><summary>Verified desktop 0.1.6 mine and market</summary>

Real world selections from source `89e3f3ab1bc0ed2347df8661a8403c9a11117cd2`. The mine produced one saved ore and the market posted one saved order. The world is an imported capacity fixture, not earned progression.

![Mining ore through the mine building](public/captures/rural-mine-016.png)

![Posting an order through the market building](public/captures/rural-market-016.png)

</details>

<details><summary>Verified desktop 0.1.7 distinct building models</summary>

Actual runnable source `3245db20fd9b28bb4a2042ccaeed70b666e3c0f3`, with the original mine portal and open market canopy. Activities still operate through the buildings. The world is a prepared capacity fixture. The newer graphical-panel and one-gigabyte content requirements are not complete.

![Distinct mine portal](public/captures/rural-mine-017.png)

![Distinct market canopy](public/captures/rural-market-017.png)

</details>

<details><summary>Version 0.1.9: graphical barn and saved gameplay</summary>

![Graphical barn shelves after reopening and harvesting a saved farm](public/captures/graphical-barn-019.png)

Captured from source 21e6b6de7b3b97e08d9b95318b1f26561a5b9746 through an isolated off-screen runnable desktop build. This is a real new-save and reopened harvest flow, not a capacity fixture. Native installation and second-version updates remain unverified.

</details>

<details><summary>Version 0.1.10: direct seed dragging</summary>

![A held seed bag planting directly onto a highlighted field](public/captures/seed-drag-0110.png)

Real runnable source 3834b565c332f3264a5c72472fb6a48d804ae501. Dragging, cancellation, mature-crop sweeping and reopening were exercised. Other activity panels still need direct-manipulation conversion.

</details>

<details><summary>Version 0.1.11: world production</summary>

![A real ingredient load held over its matching workshop](public/captures/workshop-drop-0111.png)

Real runnable source 97b732ae958f33fd60b9f31ab03880895ef2f0e9. Drop validation, natural production, world collection and reopening were exercised. Other activities and native installer acceptance remain incomplete.

</details>

<details><summary>Version 0.1.12: direct animal care</summary>

![Carrying corn directly to an individual hen in its pen](public/captures/animal-feed-0112.png)

Real runnable source ff70f9dd109da77baac218f15861e629e2173afd. Adoption, feed dragging, natural production, direct collection and reopening were exercised. Roaming/eating animation and native installer acceptance remain incomplete.

</details>

<details><summary>Version 0.1.13: cart loading and expiry feedback</summary>

![Dragging an exact order load onto the delivery cart](public/captures/cart-loading-0113.png)

Real runnable source c305d75275d33fb4204a6fe137075558e9b18bf3. Normal delivery/reopen and a separately identified controlled expiry case were verified. The gallery also shows distinct feed-load and stock quantities. Native installation and complete-product acceptance remain open.

</details>

<details><summary>Version 0.1.14: worksite tool strokes</summary>

![Deliberate saw strokes at the log-cutting worksite](public/captures/wood-strokes-0114.png)

Real runnable source f819d4eadf96f9e672199d484feb1ee210b007e4. Pointer and keyboard work, cancellation, cooldown refusal and reopened resources were verified. The small bilingual feedback capture shows the repaired notification spacing.

</details>

<details><summary>Version 0.1.15: real recorded walkthrough</summary>

[![Watch the actual gathering walkthrough](public/captures/smooth-gathering-0115.png)](public/recordings/gathering-0.1.15.mp4)

18.488 seconds, 426 captured and encoded frames, 1280 by 800, silent. Source 7a551e5c0421004849419bc697c9b62af475b459. Full decoding, frame count, timing and input provenance were verified. The public gallery provides playback and a video download.

</details>
