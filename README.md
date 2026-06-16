# Next.js Music Dashboard

A Next.js prototype for connecting a Spotify account, searching tracks, and managing a client-side saved-track library.

## Flow

```text
Spotify authorization -> callback -> authenticated dashboard
                                      |-- search tracks
                                      `-- saved library context
```

The App Router separates callback, home, and search pages. Services wrap authentication and track requests, while `LibraryContext` coordinates saved items across the dashboard.

## Local setup

Create a Spotify developer application and configure `.env.local` with replacement values:

```dotenv
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=replace-me
NEXT_PUBLIC_SPOTIFY_AUTH_URL=https://accounts.spotify.com
NEXT_PUBLIC_SPOTIFY_API_URL=https://api.spotify.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

```bash
pnpm install
pnpm dev
```

Register the local callback URL in the Spotify dashboard.

## Boundaries

- Client-prefixed variables are bundled for the browser; a Spotify client secret must never be placed in them.
- The repository demonstrates the dashboard flow, not production token storage or refresh-token security.
- Saved-track state and provider behavior require live Spotify verification.
