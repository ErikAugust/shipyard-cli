@eaj/shipyard-cli
=================

CLI for Shipyard, the &#39;Getting Things Done&#39;-inspired productivity (to-do list) system

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@eaj/shipyard-cli.svg)](https://npmjs.org/package/@eaj/shipyard-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@eaj/shipyard-cli.svg)](https://npmjs.org/package/@eaj/shipyard-cli)
[![License](https://img.shields.io/npm/l/@eaj/shipyard-cli.svg)](https://github.com/ErikAugust/shipyard/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @eaj/shipyard-cli
$ ship COMMAND
running command...
$ ship (-v|--version|version)
@eaj/shipyard-cli/0.1.0 darwin-x64 node-v12.18.4
$ ship --help [COMMAND]
USAGE
  $ ship COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ship add TITLE [INTENTION]`](#ship-add-title-intention)
* [`ship hello [FILE]`](#ship-hello-file)
* [`ship help [COMMAND]`](#ship-help-command)

## `ship add TITLE [INTENTION]`

add an item to list

```
USAGE
  $ ship add TITLE [INTENTION]

ARGUMENTS
  TITLE      title of item
  INTENTION  intention of item

OPTIONS
  -d, --dueDate=dueDate  due date of item (example: "2020-09-30")
  -l, --list=list        [default: inbox] list where item will be added
```

_See code: [src/commands/add.ts](https://github.com/ErikAugust/shipyard/blob/v0.1.0/src/commands/add.ts)_

## `ship hello [FILE]`

describe the command here

```
USAGE
  $ ship hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ship hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ErikAugust/shipyard/blob/v0.1.0/src/commands/hello.ts)_

## `ship help [COMMAND]`

display help for ship

```
USAGE
  $ ship help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
