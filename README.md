# Shipyard

> The winds and waves are always on the side of the ablest navigators.
>
> -- <cite>Edward Gibbon</cite>

Shipyard is a productivity (to-do list) system that draws its design loosely from the principles of [Getting Things Done (GTD)](https://gettingthingsdone.com/what-is-gtd/) by David Allen. It is built first and foremost to help you get things out of your head so that you can be relaxed and present. To help you to enjoy productivity, how about that?

> There has been a missing piece in our culture of knowledge work: a system with a coherent set of behaviors and tools that functions effectively at the level at which work really happens. It must incorporate the results of big-picture thinking as well as the smallest of open details. It must manage multiple tiers of priorities. It must maintain control over hundreds of new inputs daily. It must save a lot more time and effort than are needed to maintain it. It must make it easier to get things done.
>
> -- <cite>David Allen</cite>

## Data

> Data dominates. If you've chosen the right data structures and organized things well, the algorithms will almost always be self-evident. Data structures, not algorithms, are central to programming.
>
> -- <cite>Rob Pike</cite>

> Your mind is for having ideas, not holding them.
>
> -- <cite>David Allen</cite>

Shipyard saves your data (lists and configuration) in a single JSON file, `shipyard.json`.

### To Do List

Upon creation of the first to-do item, `shipyard.json` is created. The properties of the Shipyard object are `lists`, `archive`, and `trash`.

#### Collected versus Clarified

Shipyard models the to-do list data around the GTD concept of clarifying items. Shipyard assists in collecting items easily, but also to get you to clarify what your intentions are.

#### Actions

`actions` are endlessly recursive, as any task can have a set of actions.

### Items

Items make up to-do lists. The Item class and definitions can be found in `shared/item.js`.

## Command-line interface (CLI)

The command-line interface (`ship`) is built using [Oclif](https://oclif.io/). The source lives in the `cli` directory.

Please note: This is currently under heavy construction.

To install the command-line interface:
`npm install -g @eaj/shipyard-cli`.

### Commands

- `add` - Add a new item to a list. The default list is `inbox`.
- `complete` - Set item(s) to `completed`, by category or by ID.
- `view` - View a list of items, by category or by `all`.
- `note` - Add a note to an item, by ID.
- `action` - Add an action to an item, by ID.

## Roadmap

- Command-line interface
- A REST API interface
- "Hybrid-Web" interfaces that include:
  - Android
  - iOS
  - Web (Progressive Web Application)

## Contributors

- Erik August Johnson ([@ErikAugust](https://github.com/ErikAugust))

## License

The Shipyard project is under the terms of the Creative Commons Attribution-NonCommercial 2.0 license (CC BY-NC 2.0).
