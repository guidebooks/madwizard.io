# madwizard: Automatic Wizards

Welcome to [`madwizard`](https://github.com/guidebooks/madwizard), a
tool that generates a **wizard UX** automatically from **markdown
source**. It does some by adopting common markdown conventions for
denoting choice and sequencing. For example, `madwizard` adopts the
[PyMdown
Tabbed](https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/)
syntax, and uses to to denote a **choice** --- each tabs presents an
alternative to the user.

Using these conventions, you can craft rich stories that guide users
through tasks.  We term these crafted markdown files "guidebooks". As
part of this guidance, the wizard knows how to sequence the sub-tasks,
and when a sub-task cannot proceed until the user makes a choice.

If you select the **Craft a Wizard** option to the left, you will see
an example of a custom browser-based UI and the default textual
UI. You can play around with the markdown source, and see the
resulting wizard experience in both interfaces.

## Getting Fancy

Some sub-tasks may be expensive or non-indempotent. With a guidebook,
it is possible to validate whether sub-tasks are truly needed for any
given user in their current context; e.g. this user's laptop may
already have a prerequisite CLI installed, or this cluster may already
have a required set of resources installed.

## Profiles

A profile is a set of answers to the choices presented by a
guidebook. For example, when presented with a request to choose an S3
bucket, the profile remembers which bucket was chosen. You may switch
between profiles by using the `-p/--profile` command line option; as a
library, you can pass `profile` and `profile-path` programmatic
options.

