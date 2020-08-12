# Shipyard

> The winds and waves are always on the side of the ablest navigators.
>
> -- <cite>Edward Gibbon</cite>

Shipyard is a to-do list application that draws its design very loosely from the principles of [Getting Things Done (GTD)](https://gettingthingsdone.com/what-is-gtd/) by David Allen. It is built first and foremost to help you get things out of your head so that you can be relaxed and present.

> There has been a missing piece in our culture of knowledge work: a system with a coherent set of behaviors and tools that functions effectively at the level at which work really happens. It must incorporate the results of big-picture thinking as well as the smallest of open details. It must manage multiple tiers of priorities. It must maintain control over hundreds of new inputs daily. It must save a lot more time and effort than are needed to maintain it. It must make it easier to get things done.
> 
> -- <cite>David Allen</cite>
  
## Data

> Your mind is for having ideas, not holding them.  
>  
> -- <cite>David Allen</cite>

Shipyard saves your data in JSON files in the `data` directory.

### To Do List

Upon creation of the first to-do item, `data/todo.json` is created. Here is an example of the object structure:
```
{
    "title": "An Example Item",
    "description": "I need to show an example.",
    "uuid": "",
    "createdAt": "",
    "updatedAt": "",
    "subtasks": []
}
```

Your to-do list is decoupled from any interface. In fact, you can add items by modifying the JSON with any editor. Any Shipyard interface will append any missing metadata to any items upon your next interaction.

Sub-tasks are endlessly recursive, as any task can have a set of sub-tasks.

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