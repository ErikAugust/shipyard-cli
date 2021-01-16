import {Command} from '@oclif/command';
import chalk from 'chalk';

import Item from '../shared/item';
import {getItemsByCategory, sortByDueDate} from '../shared/list';
import Shipyard from '../shared/shipyard';
import {promptToSelectItemFromList} from '../shared/prompt';
import {getItemTable} from '../shared/table';

/**
 * @class View
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class View extends Command {
  static description = 'view a list by category or item by uuid';
  static flags = {};
  static args = [
    {
      name: 'category',
      description: 'category of items',
      default: 'inbox'
    }
  ];

  async run(): Promise<void> {
    try {
      const {args} = this.parse(View);
      const category = args.category?.toLowerCase();
      const shipyard = new Shipyard();
      const list = shipyard.list;
      
      // Show all, if the category is 'all':
      let items = category === 'all' ? list : getItemsByCategory(list, args.category);
      if (!items.length) {
        this.log(`There are no items for ${chalk.green.bold(category)}.\n`);
        process.exit(0);
      }

      // Sort by due date:
      items = sortByDueDate(items);
      
      this.log(`Listing ${items.length} items for ${chalk.green.bold(category)}...\n`);
      const itemIndex = await promptToSelectItemFromList(items);
      const itemToView: Item = items[itemIndex];

      // Displays selected item:
      getItemTable(itemToView);

    } catch (error) {
      this.log('An error has occurred:');
      console.error(error);
    }
  }
}
