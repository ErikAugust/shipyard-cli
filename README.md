# Shipyard
> The winds and waves are always on the side of the ablest navigators.
>
> -- <cite>Edward Gibbon</cite>

Shipyard is a to-do list application that draws its design very loosely from the principles of [Getting Things Done (GTD)](https://gettingthingsdone.com/what-is-gtd/) by David Allen. It is built first and foremost to help you get things out of your head so that you can be relaxed and present.

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
Upon creation of the first to-do item, `data/todo.json` is created. Here is an example of the object structure:
```
{
    "collected": [
        {
            "title": "Purchase more coffee"
        },
        {
            "title": "Spend more time with family"
        }
    ],
    "clarified": [
        {
            "title": "Create Shipyard",
            "intention": "To give people a free, open source to do list software that is loosely based on the princples of GTD.",
            "uuid": "",
            "createdAt": "",
            "updatedAt": "",
            "actions": [
                {
                    "title": "Complete README",
                    "intention": "To explain the intention and usage of Shipyard.",
                    "actions": [
                    ]
                }
            ],
            "notes": []
        }
    ],
    "projects": [
    ],
    "someday-maybe": [
    ],
    "archive": [
    ],
    "trash": [
    ]
}
```
Your to-do list is decoupled from any interface. In fact, you can add items by modifying the JSON with any editor. Any Shipyard interface will later append any missing metadata to any items upon your next interaction.

#### Collected versus Clarified

Shipyard models the to-do list data around the GTD concept of clarifying items.

#### Actions
`actions` are endlessly recursive, as any task can have a set of actions.

### Configuration
Shipyard also saves configuration in a flat JSON file. A default `data/config.json` is present in the project.
```
{
    "todo": {
        "list": "data/todo.json"
    }
}
```

## Roadmap  
  
- Command-line interface  
- "Hybrid-Web" interface that includes:  
  - Android  
  - iOS  
  - Web (Progressive Web Application)
  
## Contributors
- Erik August Johnson ([@ErikAugust](https://github.com/ErikAugust))

## License
This project is licensed under the terms of the Creative Commons Attribution-NonCommercial 2.0 license (CC BY-NC 2.0).