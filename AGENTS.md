# Repository Guidelines

## Project Structure & Module Organization

This is a static, single-page web app. `index.html` contains markup and loads assets. Styles live in `css/styles.css`, behavior in `js/app.js`, spell data in `js/spells.js`, and the normalized SQLite database in `db/`. Audio assets are under `sounds/`; `sounds/pwk.mp3` is shared, and `sounds/wizard_male/` plus `sounds/wizard_female/` contain school-specific files.

Keep markup in `index.html`, visual changes in `css/styles.css`, behavior in `js/app.js`, and spell updates in `js/spells.js`. Regenerate `db/spells.db` after spell data changes. Add media under `sounds/` with lowercase names.

## Build, Test, and Development Commands

No package manager or build step is currently configured. The app can be run directly in a browser:

```powershell
Start-Process .\index.html
```

For a local HTTP server, use any simple static server from the repository root, for example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`. Use this when browser security rules affect local files or audio.

Regenerate the SQLite spell database:

```powershell
C:\python\313\python.exe db\seed_spells.py
```

## Coding Style & Naming Conventions

Use the existing style: CSS custom properties in `:root`, compact selectors, and camelCase JavaScript functions such as `showCreateCharacterPage()` and `toggleSounds()`. Keep DOM IDs descriptive and stable because many controls use inline event handlers. Prefer small, focused functions over adding large blocks inside event attributes.

Use two or four spaces consistently within the area being edited, matching nearby code. Avoid renaming existing IDs, functions, or asset files unless all references are updated.

## Testing Guidelines

There is no automated test framework in this repository. Validate changes manually in a browser. At minimum, check character creation, navigation between pages, spell search and filters, prepared/known/all tabs, rest buttons, sound toggling, and audio playback from `sounds/`.

When adding spell data or assets, verify the related UI renders without console errors and that missing audio does not break spell interactions.

## Commit & Pull Request Guidelines

Recent history uses simple upload-style messages, so there is no strict commit convention yet. Prefer concise imperative messages going forward, for example `Add spell filter reset state` or `Fix wizard audio path`.

Pull requests should include a short summary, manual test notes, and screenshots or screen recordings for visible UI changes. Link related issues when available and call out any new assets added under `sounds/`.

## Agent-Specific Instructions

Keep changes scoped and avoid introducing build tooling unless the task explicitly needs it. This app is intentionally lightweight, so preserve the direct static-file workflow.
