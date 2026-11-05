# mhalikosen.com

Muhammed Ali Kösen's personal site: a Next.js App Router app built with `output: "standalone"`.

## Develop

```sh
pnpm install
pnpm dev
```

`pnpm lint` and `pnpm build` are the checks.

## Deploy

A push to `main` builds the image in GitHub Actions, pushes it to `ghcr.io/mhalikosen/mhalikosen-com-web` tagged with the commit SHA, and asks the Kosenworks box to run it as `mhalikosen/website` through `kw-deploy`. The box side (compose file, Caddy site, deploy key) lives in the `kosenworks/kosenworks` repository under `server/clients/mhalikosen/website/`. The workflow runs only while the repository variable `KOSENWORKS_DEPLOY` is `on`.
