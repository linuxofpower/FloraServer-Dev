# FloraServer — Development

**DEV:** `linuxofpower/FloraServer-Dev`, branch `main`.

**Original source / production-side repository:** `yaMorozYaroslav/FloraDevServer-relocate-`, branch `master`.

This is a separate development repository with independent Git history. Original source is preserved. Work in DEV and require separate user approval before merging any changes into production. This repository's CI must not deploy production.

## Migration evidence

- Source tree: `c1eb5d38e997cdb8f8526248309d17f687faf1c4`.
- All 15 tracked source paths imported and verified against source blobs, except intentionally sanitized `.env.example`.
- `Procfile` and `package-lock.json` exactly match original blob hashes.
- This README and `.github/workflows/ci.yml` were added for development.
- This is a source snapshot, **not** a transfer of prior Git commit history, branches or tags.

## Development verification

```bash
npm ci --ignore-scripts
find . -path './node_modules' -prune -o -type f -name '*.js' -print0 | xargs -0 -r -n1 node --check
```

The original package requests Node 21.6.2, which is no longer a supported release. DEV CI uses Node 22; review and update the runtime engine separately before any deployment.

Never commit database credentials, SMTP passwords, access tokens, or operational `.env` files. The source `.env.example` contained a credential-shaped connection string and was sanitized in DEV; rotate any credential if confirmed real.
