### As a Library

You can use the `madwizard` npm directly, and consume the wizard
models for custom purposes. The [`madwizard` API]() includes
entrypoints for parsing markdown, compiling the parsed AST into a task
graph model, optimizing this task graph, generating a wizard model
from the task graph, and finally a collection of views over these
models.

### As a Markdown Execution Engine

One of the included views is `guide`, which bundles parsing, compiling
and optimizing, wizardifying, and then interprets the wizard. The
default UI for the wizard presentation is ASCII. `guide` also allows
for inversion of control, which allows you to present a custom (even
graphical) UI to offer choices to user, and to customize the execution
code blocks.
   
### As a CLI

If you install either of the `madwizard-cli` and `madwizard-cli-core`
npms, you will get a `madwizard` CLI (e.g. `npm install -g
madwizard-cli`). This CLI uses the core `madwizard` npm to present an
terminal-based wizard interface. When presented with a choice, users
can select an option using arrow keys. If you want to use these
unchanged, you need only point it to your guidebook, e.g. `madwizard
foo.md`. You may also offering a collection of guidebooks in a
"store", and pass this via the `-s/--store` command line option;
e.g. `madwizard -s /path/to/my/store nameOfGuidebookInStore`. The
`madwizard-cli` npm includes a [bundled
store](https://github.com/guidebooks/store).

### As a Test Rig

`madwizard` can be used to test your documentation! Is your
documentation sufficient for users to accomplish the desired task?
You can write tests that use `madwizard` to parse and execute your
markdown in a variety of configurations. Each configuration can
approximate a possible user; e.g. macOS versus Windows versus Linux,
CLIs installed or not, credentials valid or not, etc.

`madwizard` terms these configurations **profiles**.
