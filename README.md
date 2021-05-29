# fikasentaniTypeScript

TypeScript learning running on Deno or Node run time.

## Install Node or Deno

if using Deno as a run time, execute using the code below for example

`deno run --allow-write=message.txt app.ts`

## Deno external packages

Looks like deno does not have a package manager as in _npm install_. Instead you add the url of where the package is hosted and it is downloaded on the fly and stored to cache. NPM on the other hand stores the packages on local disk.

# Deno WebServer

to run a local webserver, deno needs your permission to do so. Run with `deno run --allow-net server.ts`

# CheatSheet

_--allow-write=message.txt_ - allow to write to file system, meaning allow to create a file on local disk
_--allow-net_ - allow netwaork access to create a port for the webserver.
