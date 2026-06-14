# ClubSync Web

ClubSync Web is the public Next.js migration of ClubSync, a StuImpact platform concept for connecting student clubs, ASB leaders, schools, and administrators across Washington. The original version lived as a Flask application; this repo is the modern frontend rebuild that separates the user experience into typed App Router pages, shared design primitives, and Firebase-ready client infrastructure.

This is an active migration repo. The current codebase is intentionally focused on the public product surface, auth screens, theming, and route scaffolding while the former Flask-era backend workflows are being ported into a more maintainable architecture.

## What the app is getting after

ClubSync is designed to be a safe, school-centered coordination layer for student leadership:

- Students discover clubs, service opportunities, internships, mentorship, and cross-school collaborations.
- Clubs can present themselves, recruit members, and coordinate joint events.
- ASB and student leaders get tooling for event coordination, approvals, and impact visibility.
- Administrators get a more controlled alternative to unmonitored student coordination channels.

The current public build communicates that product direction while the operational dashboard and real auth/data workflows are still being migrated.

## Current migration status

Implemented now:

- Next.js App Router structure with routes for `/`, `/login`, `/signup`, and `/in-progress`.
- Responsive ClubSync landing page with sections for students, ASB, clubs, administrators, and platform features.
- Login and signup UI shells for email/password and Google SSO flows.
- Password-strength and password-match feedback on signup.
- Firebase app, auth, and realtime database initialization scaffold.
- Global `AuthProvider` wrapper using Firebase auth state.
- Theme toggle with pre-paint theme initialization to avoid flash.
- Tailwind CSS 4 design system ported from the broader StuImpact visual language.

Still in progress:

- Wiring the login/signup forms to real Firebase auth actions.
- Replacing placeholder Firebase config with environment-driven project config.
- Porting Flask backend workflows into API routes, server actions, or dedicated services.
- Building protected dashboards for students, clubs, ASB, and administrators.
- Persisting club signup applications instead of using the temporary simulated submission flow.
- Adding automated tests around auth, routing, and form validation.

## Engineering value

This repo shows a real migration in flight, not a throwaway starter app. The useful engineering signal is in the conversion from a monolithic Flask-style project into a modern frontend architecture:

- Product decomposition: broad Flask-era behavior is being broken into explicit routes and user journeys.
- Frontend architecture: typed React components, App Router pages, global context, shared theme behavior, and responsive UI states.
- Migration honesty: unfinished backend/auth pieces route to a dedicated in-progress experience instead of pretending to be complete.
- Product thinking: the UI is written around concrete user groups, not generic placeholder content.
- Verification discipline: the current public tree passes lint and production build checks.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Firebase Auth and Realtime Database client SDK
- ESLint with Next.js rules

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

Last verified locally on 2026-06-14:

- `npm run lint` passes.
- `npm run build` passes with static routes for `/`, `/login`, `/signup`, and `/in-progress`.

## Project structure

```text
src/app/page.tsx             Main ClubSync product landing page
src/app/login/page.tsx       Login UI shell for email and Google flows
src/app/signup/page.tsx      Signup UI shell with validation feedback
src/app/in-progress/page.tsx Migration placeholder for unavailable workflows
src/app/layout.tsx           Metadata, theme bootstrapping, and AuthProvider
src/app/globals.css          StuImpact/ClubSync visual system and theme tokens
src/components/ThemeToggle.tsx
src/context/AuthContext.tsx
src/lib/firebase.ts          Firebase client initialization scaffold
```

## Firebase note

The checked-in Firebase values are placeholders for the migration scaffold. Production credentials and project configuration should be supplied through environment variables and locked down with Firebase security rules before any real user data is connected.

## Migration roadmap

1. Move Firebase config to environment variables.
2. Implement real email/password and Google sign-in/sign-up.
3. Add route protection and role-aware redirects.
4. Port the Flask data flows into API routes or service modules.
5. Persist club partnership applications.
6. Build dashboard views for students, club officers, ASB, and administrators.
7. Add tests for form validation, auth state, and protected navigation.

## Status

ClubSync Web is a public snapshot of an ongoing migration. It is useful for understanding the frontend architecture, product direction, and remaining backend/auth work that will complete the next phase.
