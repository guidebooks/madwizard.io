# Kui-based Static Web Site

This repository houses the logic for [madwizard.io](https://madwizard.io).

It uses [Kui](https://github.com/kubernetes-sigs/kui) to display a set
of wizards that are auto-generated from markdown, using
[madwizard](https://github.com/guidebooks/madwizard).

## Development

Start the watcher:

```shell
npm run watch
```

then visit [http://localhost:9080](http://localhost:9080). We use
[Playwright](https://playwright.dev/) for tests.

## Production Builds

This repository uses a [GitHub Actions
workflow](.github/workflows/deploy) to build the webpack bundles and
deploy them to a site managed by GitHub Pages.

If you want to build the bundles manually, use `npm run build`, and
look in `dist/webpack` for the index.html, etc.
