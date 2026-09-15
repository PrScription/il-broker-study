# IL Broker Study v2 — Free iPhone PWA

A zero-subscription study app for Illinois Broker exam preparation.

## Main workflow
- Add your own flashcards directly on iPhone.
- Add your own four-choice multiple-choice questions and explanations.
- Use long definitions/scenarios: the app does not impose a per-field character limit.
- Upload a course PDF to ChatGPT, convert it to an IL Broker Study Pack JSON, then import that pack.
- Study offline after the app has loaded/cached successfully.

## Included
- Separate Add Flashcard and Add Multiple Choice interfaces
- Long-form text areas with live character counts
- Topic/chapter organization and search
- Flashcards with Again / Hard / Know It tracking
- Study only Hard/Again cards
- Practice tests: 10 / 25 / 50 / all available
- Randomized question order and optional randomized choices
- Optional immediate answer feedback
- Missed-question review with explanations
- Progress dashboard: test accuracy, tests completed, questions answered, cards reviewed, cards known, cards needing review
- Accuracy and weak-topic tracking
- Study Pack JSON import that APPENDS material
- Full backup/restore including bank + progress
- Offline PWA / iPhone Home Screen installation
- No external libraries, paid APIs, accounts, or database required

## PDF workflow
The app intentionally does not call a paid AI API. Upload your PDF to ChatGPT and ask for an `IL Broker Study Pack v2` JSON. A reusable request is included in `PDF_TO_STUDY_PACK_PROMPT.txt`. Import the returned JSON using Study Bank → Import Study Pack.

## Data/storage note
Study material and progress are stored in browser localStorage. Individual fields have no app-set character cap, but Safari/browser storage has a finite overall quota. Export a Full Backup periodically, especially before clearing browser data or changing devices.

## Free GitHub Pages setup
1. Create a free GitHub repository, e.g. `il-broker-study`.
2. Upload all files from this folder to the repository root.
3. Open Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: main. Folder: /(root).
6. Save and use the GitHub Pages URL GitHub provides.

## Install on iPhone
1. Open the GitHub Pages URL in Safari.
2. Tap Share.
3. Tap Add to Home Screen.
4. Enable Open as Web App if shown.
5. Tap Add.

## Study Pack format
See `STUDY_PACK_SCHEMA.md` and `SAMPLE_STUDY_PACK.json`.

## Important
Starter items are convenience examples, not a substitute for your current Illinois course materials or current law. Use your course/source PDFs as the source of truth when generating study packs.
