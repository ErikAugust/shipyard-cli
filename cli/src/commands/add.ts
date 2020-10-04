import {Command, flags} from '@oclif/command';
import chalk from 'chalk';
import {saveList, loadFile} from '../shared/file';
import List from '../shared/list';
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
    }
  ]

  static flags = {
    category: flags.string({
      char: 'c',
      default: 'inbox',
      multiple: true,
      description: 'category where item will be added'
    }),
    dueDate: flags.string({
      char: 'd',
      multiple: false,
      description: 'due date of item (example: "2020-09-30")'
    }),
  }

  async run() {
    const {args, flags} = this.parse(Add);
    
    const list: List = loadFile().list;
    const item = new Item({
      title: args.title,
      intention: args.intention,
      dueDate: flags.dueDate
    });
    list[flags.category].push(item);
    saveList(list);

    this.log(`\n${chalk.underline(args.title)} added to ${chalk.bold(flags.category)}.\n`);
  }
}
