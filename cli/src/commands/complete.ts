import {Command} from '@oclif/command';
import chalk from 'chalk';

import Shipyard from '../shared/shipyard';
import {getItemsByCategory} from '../shared/list';
import Item from '../shared/item';
import {promptToComplete} from '../shared/prompt';
/**
 * @class Complete
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Complete extends Command {
  static description = 'marks an item complete';
  static args = [
    {
      name: 'category',
      description: 'category of items',
      default: 'inbox'
    }
  ];

  async run(): Promise<void> {
    const {args} = this.parse(Complete);
    const category = args.category?.toLowerCase();
    const shipyard = new Shipyard();
    const list = shipyard.list;

    // Display all, if the category is 'all':
    const items: Array<Item> = category === 'all' ? list : getItemsByCategory(list, args.category);

    if (!items.length) {
      // Search for a particular item by 'shortcode':

      this.log(`There are no item(s) for ${chalk.green.bold(category)}.\n`);
      process.exit(0);
    }

    // Sort by due date:
    items.sort((a, b) => {
      if (a.dueDate && b.dueDate) {
        return a.dueDate?.unix() - b.dueDate?.unix();
      } else if (a.dueDate && !b.dueDate) {
        return -1;
      } else {
        return 0;
      }
    });

    const itemsToComplete = await promptToComplete(items);
    itemsToComplete.forEach(item => {
      // Find index:
      const index = list.findIndex((element: Item) => element.uuid === item);

      // Continue if not found:
      if (index === -1) {
        return;
      }

      // Make a copy of the item:
      const copy = list[index];
      copy.complete();

      // Remove from our list:
      list.splice(index, 1);

      // Add item to archive:
      shipyard.archive.push(copy);
    });
    // Save results to list:
    shipyard.save();
  }
}
