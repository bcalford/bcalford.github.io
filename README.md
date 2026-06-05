# Eric Wadkins Portfolio Mirror

This is an Express-based mirror of `http://www.ericwadkins.com`.

## Run Locally

```sh
npm install
npm start
```

The app serves at `http://127.0.0.1:3000` by default.

## Runtime Options

- `PORT`: local port, default `3000`
- `HOST`: bind host, default `127.0.0.1`
- `DB_CONNECT=true`: opt in to the original MongoDB connection
- `TRACK_VISITS=true`: opt in to the original visit tracker/mail side effects
- `MAILGUN_KEY` and `FORM_ID`: required for the original contact/tracking integrations
