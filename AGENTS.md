# AGENTS

This repository is a small LINE LIFF registration app for Doctor2Go.

## What this project contains
- Frontend: `index.html`, `style.css`, `app.js`
- Backend: Firebase Cloud Functions in `functions/index.js`
- Firebase configuration: `firebase.json`
- Documentation folder: `Doctor2Go-Document/`

## Key behaviors
- The web app uses LINE LIFF to log in and Firebase Auth phone OTP to verify a Thai phone number.
- `app.js` loads Firebase SDK modules from CDN and calls a callable Cloud Function `completeRegistration`.
- `functions/index.js` verifies the LINE ID token, checks for duplicate users, increments a transactional member code counter, writes to Firestore, and sends a LINE push message.

## Development commands
- Run function emulator locally: `npm --prefix functions run serve`
- Start functions shell: `npm --prefix functions run shell`
- Deploy functions: `npm --prefix functions run deploy`
- View Cloud Functions logs: `npm --prefix functions run logs`

## Project conventions
- Frontend is static and uses browser ES module imports from Firebase CDN.
- Backend uses Node 24 with `firebase-functions` v7 and `firebase-admin` v13.
- `functions/index.js` uses `defineSecret("LINE_CHANNEL_ACCESS_TOKEN")`; do not hardcode production secrets in code.
- Firestore collections used: `members`, `counters`.

## Notes for AI agents
- Do not assume a frontend bundler or build pipeline exists; modifications should preserve the current static HTML/CSS/JS structure unless adding a deliberate architecture change.
- Keep Firebase callable function behavior intact: validation, duplicate detection, transaction-safe member code generation, and LINE push notification.
- Use the existing documentation in `Doctor2Go-Document/` for product/domain details rather than duplicating it here.

## Suggested next customization
- Add a repo-specific skill for common Firebase tasks such as `deploy functions`, `run emulator`, or `fix LINE auth flow`.
- Add a prompt or hook for updating the registration flow and keeping Thai/English text consistent across UI and LINE messages.
