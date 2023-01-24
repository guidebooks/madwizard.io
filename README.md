# madwizard.io Web Site

This repository houses the logic for the web site
[https://madwizard.io](https://madwizard.io). It showcases
[`madwizard`](https://github.com/guidebooks/madwizard), which is a way
to automate turning markdown source into a wizard user experience.

This repo uses the [Kui](https://github.com/kubernetes-sigs/kui)
project to generate a static single page web app. Kui includes a
plugin that visualizes the `madwizard` wizard experience.

## Using this repo as a template

You may use this repo as a starting point for crafting your own
(similar) site. After cloning, start the watcher:

```shell
npm run watch
```

then visit [http://localhost:9080](http://localhost:9080). We use
[Playwright](https://playwright.dev/) for [tests](./tests). Run the
tests via `npm test`.

### Production Builds

This repository uses a [GitHub Actions
workflow](.github/workflows/deploy) to build the webpack bundles and
deploy them to a site managed by GitHub Pages.

If you want to build the bundles manually, use `npm run build`, and
look in `dist/webpack` for the index.html, etc.

### Customizing your web app

You can customize your web app in the following ways:

1. Custom list of guidebooks: [guidebook
   config](plugins/plugin-client-offline/config.d/notebooks.json); you
   can also specify which of these should be displayed onload via
   [autoplay
   config](plugins/plugin-client-offline/config.d/autoplay.json). Drop
   any new guidebooks in
   `plugins/plugin-client-offline/config.d/notebooks/`, and they will
   automatically be available on the filepath
   e.g. `/kui/client/foo.md` for a file `foo.md` that you dropped into
   the `notebooks/` directory. Use this filepath in the
   `autoplay.json` and `notebooks.json` config files.

2. Custom name: [name config](plugins/plugin-client-offline/config.d/name.json)

3. Custom icon: [icon files](plugins/plugin-client-offline/icons) and
   [icon config](plugins/plugin-client-offline/config.d/icons.json)

4. Custom bottom stripe widgets: modify the [React client
   code](plugins/plugin-client-offline/src/index.tsx). In particular,
   look for the `ContextWidgets` and `MeterWidgets` bits. Here are
   some example bottom stripe widgets:

   - [`<MadeWithKui/>`](https://github.com/kubernetes-sigs/kui/blob/master/plugins/plugin-client-common/src/components/Client/StatusStripe/MadeWithKui.tsx)
   - [`<CurrentContext/>`](https://github.com/kubernetes-sigs/kui/blob/master/plugins/plugin-kubectl/components/src/CurrentContext.tsx)
   - [`<CurrentWorkingDirectory/>`](https://github.com/kubernetes-sigs/kui/blob/master/plugins/plugin-client-common/src/components/Client/StatusStripe/CurrentWorkingDirectory.tsx)

   Beware that the latter two may make less sense (in their current
   form) in an offline static-single-page web application. Hopefully
   they can provide at least some inspiration.

5. Custom info to be displayed when pasting your URL in Slack,
   Twitter, etc. [OpenGraph
   config](plugins/plugin-client-offline/config.d/opengraph.json).
