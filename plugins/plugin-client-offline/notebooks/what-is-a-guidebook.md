# Wizards from Markdown

Welcome to `madwizard`, a trick to generate a **wizard UX**
automatically from **markdown source**. `madwizard` can understand any
markdown, but with some care, you can craft rich stories to guide
users through tasks. We term these specially crafted markdown files
"guidebooks".

As part of this guidance, the wizard knows how to sequence the
sub-tasks, and when a sub-task cannot proceed until the user makes a
choice.

Some sub-tasks may be expensive or non-indempotent. With a guidebook,
it is possible to validate whether sub-tasks are truly needed for any
given user in their current context; e.g. this laptop versus that
laptop, or this cluster versus that, etc.

## Implementation Details

The [`madwizard`](https://github.com/guidebooks/madwizard) tool can be
used to "vet" that a markdown file is suitable for this kind of
treatment. `madwizard` parses the markdown into various models,
including a wizard model.

What you are seeing here is a UI on top of these models. These models
can also be run through automated tests, ensuring that your
documentation works, and continues to do so.
