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
* [`ship action [FILE]`](#ship-action-file)
* [`ship add TITLE [INTENTION] [ACTION]`](#ship-add-title-intention-action)
* [`ship complete [CATEGORY]`](#ship-complete-category)
* [`ship help [COMMAND]`](#ship-help-command)
* [`ship note UUID NOTE`](#ship-note-uuid-note)
* [`ship view [CATEGORY]`](#ship-view-category)

## `ship action [FILE]`

describe the command here

```
USAGE
  $ ship action [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/action.ts](https://github.com/ErikAugust/shipyard/blob/v0.1.0/src/commands/action.ts)_

## `ship add TITLE [INTENTION] [ACTION]`

add an item to list

```
USAGE
  $ ship add TITLE [INTENTION] [ACTION]

ARGUMENTS
  TITLE      title of item
  INTENTION  intention of item
  ACTION     next action to be taken

OPTIONS
  -c, --category=category  [default: inbox] category where item will be added
  -d, --dueDate=dueDate    due date of item (example: "2020-09-30")
  -u, --url=url            hyperlink relating to item (example: "https://google.com")
```

_See code: [src/commands/add.ts](https://github.com/ErikAugust/shipyard/blob/v0.1.0/src/commands/add.ts)_

## `ship complete [CATEGORY]`

marks an item complete

```
USAGE
  $ ship complete [CATEGORY]

ARGUMENTS
  CATEGORY  [default: inbox] category of items
```

_See code: [src/commands/complete.ts](https://github.com/ErikAugust/shipyard/blob/v0.1.0/src/commands/complete.ts)_

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

## `ship note UUID NOTE`

adds a note to specified item

```
USAGE
  $ ship note UUID NOTE

ARGUMENTS
  UUID  id of item
  NOTE  note to add
```

_See code: [src/commands/note.ts](https://github.com/ErikAugust/shipyard/blob/v0.1.0/src/commands/note.ts)_

## `ship view [CATEGORY]`

view a list by category or item by uuid

```
USAGE
  $ ship view [CATEGORY]

ARGUMENTS
  CATEGORY  [default: inbox] category of items
```

_See code: [src/commands/view.ts](https://github.com/ErikAugust/shipyard/blob/v0.1.0/src/commands/view.ts)_
<!-- commandsstop -->
