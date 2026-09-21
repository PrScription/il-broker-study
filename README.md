# IL Broker Study V4

V4 is the full product/graphical overhaul.

## New in V4
- Separate Flashcard, Quiz, Test, Create, Play, Library, and Progress workflows.
- Quiz = immediate feedback; Test = exam-style end-of-session scoring.
- Manual long-form flashcard and multiple-choice editors remain first-class.
- Smart Import can paste notes or upload TXT/Markdown/PDF and create editable local source-backed drafts.
- AI Study Pack import remains the higher-quality route: generate the JSON in ChatGPT from your supplied source, then import it.
- Games: Speed Round, Streak Challenge, Match, and a Kahoot-like Solo Showdown.
- XP and local best scores.
- Read-aloud for flashcards when supported by the browser.
- Quizlet-style multi-card library, quick edit, drag reorder, selection, search, filters, starring, and weak-card review.

## Important: paid course privacy
Do not upload your paid course PDFs, private Study Pack JSON files, or full backups to the public GitHub repository. The app code contains no paid course content. Import course material into the running app on your own device.

## Updating GitHub Pages
1. In the current app, use Backup / Import -> Export full backup.
2. Download and unzip V4.
3. Replace the old app files in your GitHub repository with the files from V4.
4. Keep Pages publishing from main / (root).
5. Wait for GitHub Pages to redeploy, then refresh the installed PWA.

V4 preserves the original localStorage keys for the study bank, history, and ratings, so same-browser/device data should carry forward. Keep the backup anyway.
