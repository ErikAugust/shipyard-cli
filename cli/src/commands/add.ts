import {Command, flags} from '@oclif/command';
import chalk from 'chalk';
import Shipyard from '../shared/shipyard';
import Item from '../shared/item';

/**
 * `ship add`: Add an item to list
 * @class Add
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Add extends Command {
  static description = 'add an item to list';

  static args = [
    {
      name: 'title',
      required: true,
      description: 'title of item'
    },
    {
      name: 'intention',
      description: 'intention of item'
    },
    {
      name: 'action',
      description: 'next action to be taken'
    }
  ];

  static flags = {
    category: flags.string({
      char: 'c',
      default: 'inbox',
      multiple: false,
      description: 'category where item will be added'
    }),
    dueDate: flags.string({
      char: 'd',
      multiple: false,
      description: 'due date of item (example: "2020-09-30")'
    }),
    url: flags.string({
      char: 'u',
      multiple: false,
      description: 'hyperlink relating to item (example: "https://google.com")'
    })
  }

  async run(): Promise<void> {
    try {
      const {args, flags} = this.parse(Add);

      // TODO: Prompt user for intention and next action, if missing:
    
      const shipyard = new Shipyard();
      const item = new Item({
        title: args.title,
        intention: args.intention,
        dueDate: flags.dueDate,
        category: flags.category,
        url: flags.url
      });
      if (args.action) {
        item.actions = [
          new Item({ title: args.action })
        ];
      }
      shipyard.list.push(item);
      shipyard.save();

      this.log(`\n${chalk.underline(args.title)} [${chalk.bold(item.getUuidShortcode())}] added to ${chalk.bold(flags.category)}.\n`);
    } catch (error) {
      this.log(error.message);
    }
  }
}
