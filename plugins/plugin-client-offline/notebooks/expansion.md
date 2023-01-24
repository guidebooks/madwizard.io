# Dynamically Enumerating a set of Choices

The `expand(...)` syntax allows you to dynamically expand a set of
choices. The arguments to expand will be executed in a subshell, the
results of which will be interpreted as a newline-separated list of
options. You can optionally specify a second argument, a "please wait"
message to display while the expansion subshell is executing. An
optional third argument allows you to tell `madwizard` to memoize the
results of the expansion with the given `memoKey`. You can use the
shell variable `$choice` to grab the option selected by the user.

=== "expand(echo 1; echo 2; echo 3)"
    ```shell
    export YOU_SELECTED="$choice"
    ```
    
This will be executed sequentially, after the above choice is made by the user.

```shell
echo "Testing $YOU_SELECTED"
```
