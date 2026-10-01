# Sindangan Sentinel — Local Development README

Quick overview
- Lightweight single-page app for emergency reporting.
- Data is persisted locally using `localStorage` under the key `sindangan_state`.

Run locally
- Easiest: open `index.html` in a browser.
- Prefer a local server (recommended) to avoid some browser restrictions:

  ```bash
  # Python 3
  python -m http.server 8000

  # or Node.js (install http-server globally first)
  npx http-server -c-1 .  # or: npx http-server
  ```

  Then open http://localhost:8000 in your browser.

Files to know
- App entry: [index.html](index.html)
- App logic: [script.js](script.js)

Accounts
- No accounts are seeded by default. Citizens can create accounts using Register.
- Admin and agency accounts must be provisioned separately before those roles can sign in.

Data persistence (localStorage)
- The app saves these objects to localStorage: `authUsers`, `reports`, `alerts`, `users`.
- Storage key: `sindangan_state`.
- To clear all persisted data in the browser console:

  ```js
  localStorage.removeItem('sindangan_state');
  location.reload();
  ```

Notes & next steps
- For production or multi-user usage, integrate a backend or a proper auth provider — do not keep passwords in plain text.
- If you want cloud sync (Realtime DB / Firestore) or Firebase Authentication, tell me and I can add it.

Contact
- Tell me if you want: secure auth, export/import backup, or a debug panel that displays stored state.
