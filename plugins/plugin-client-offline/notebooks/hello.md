Hello world! Any markdown files that you drop in the "notebooks"
directory of your client are available for use via the filepath
`/kui/client/<filename.md>`.

On top of that, you may edit `config.d/notebooks.json` to define the
menu structure that appears in the left-hand "sidebar" UI. Those menu
entries will need to specify a filepath; here you can use the
`/kui/client/<filename.md>` auto-generated filepaths, for files you
drop in this directory.

Finally, to define which of these files is loaded on initial page
load, edit `config.d/autoplay.json`.
