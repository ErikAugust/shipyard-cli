import {Command, flags} from '@oclif/command';
import {getTable} from '../shared/table';
import {loadFile} from '../shared/file';
import {getItemsByCategory} from '../shared/list';

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
  ]

  async run() {
    try {
      const {args, flags} = this.parse(View);
      const category = args.category?.toLowerCase();
      const list = loadFile().list;
      
      // Display all, if the category is 'all':
      const items = category === 'all' ? list : getItemsByCategory(list, args.category);
      const table = getTable(items);
      this.log(`Displaying ${items.length} items for ${category}...`);
      this.log(table.toString());
    } catch (error) {
      console.error(error);
    }
  }
}
