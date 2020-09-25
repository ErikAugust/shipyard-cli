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

Shipyard saves your data in JSON files in the `data` directory.

### To Do List
Upon creation of the first to-do item, `data/lists.json` is created. Here is an example of the object structure:
```
{
    "inbox": [
        {
            "uuid": "3aed8322-af53-4faf-bec0-d70f5e74e2ed",
            "title": "Purchase a kayak",
            "intention": "To have a kayak to paddle the local waters.",
            "createdAt": "2020-09-25T14:15:54.393Z",
            "updatedAt": "2020-09-25T14:15:54.394Z",
            "actions": [],
            "notes": [],
            "completed": false
        }
    ],
    "projects": [
        {
            "uuid": "96784116-47c0-4af4-82b0-adf4a4e61aad",
            "title": "Shipyard",
            "intention": "To give people a free, open source to do list software that is loosely based on the princples of GTD.",
            "createdAt": "2020-09-25T13:48:42.302Z",
            "updatedAt": "2020-09-25T13:48:42.302Z",
            "actions": [
                {
                    "uuid": "2d7a597b-beed-48b5-af93-c3a040dd429a",
                    "title": "Complete an initial draft of the README",
                    "intention": "To explain the intention and usage of Shipyard.",
                    "createdAt": "2020-09-25T14:19:22.775Z",
                    "updatedAt": "2020-09-25T14:19:22.775Z",
                    "actions": [],
                    "notes": [],
                    "completed": false
                }

            ],
            "notes": [],
            "completed": false
        }
    ],
    "someday-maybe": [
        {
            "uuid": "6d6ce13e-f85d-4ccf-b0ef-93712c32cfde",
            "title": "Sail to Iceland",
            "intention": "",
            "createdAt": "2020-09-25T13:56:51.409Z",
            "updatedAt": "2020-09-25T13:56:51.409Z",
            "actions": [],
            "notes": [],
            "completed": false
        }
    ],
    "archive": [
    ],
    "trash": [
        {
            "uuid": "d988ea36-2fa3-40a9-9d9a-1c09ab1b8147",
            "title": "Some waste of time",
            "intention": "Something that I will feel not necessary.",
            "createdAt": "2020-09-25T14:01:39.231Z",
            "updatedAt": "2020-09-25T14:01:39.232Z",
            "actions": [],
            "notes": [],
            "completed": false
        }
    ]
}
```
Your to-do list is decoupled from any interface. In fact, you can add items by modifying the JSON with any editor. Any Shipyard interface will later append any missing metadata to any items upon your next interaction.

#### Collected versus Clarified

Shipyard models the to-do list data around the GTD concept of clarifying items. Shipyard assists in collecting items easily, but also to get you to clarify what your intentions are.

#### Actions
`actions` are endlessly recursive, as any task can have a set of actions.

#### Items
Items make up to-do lists. The Item class can be found in `shared/Item.js`.

### Configuration
Shipyard also saves configuration in a flat JSON file. A default `data/config.json` is present in the project.
```
{
    "lists": "data/lists.json",
    "s3": {
        "backups": "my-shipyard-backups",
        "sync": {
            "enabled": true,
            "bucket": "my-shipyard-sync"
        }
    }
}
```

## Roadmap  
  
- Command-line interface  
- "Hybrid-Web" interfaces that include:  
  - Android  
  - iOS  
  - Web (Progressive Web Application)
  
## Contributors
- Erik August Johnson ([@ErikAugust](https://github.com/ErikAugust))

## License
The Shipyard project is under the terms of the Creative Commons Attribution-NonCommercial 2.0 license (CC BY-NC 2.0).