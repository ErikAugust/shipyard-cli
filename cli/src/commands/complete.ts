import {Command} from '@oclif/command';
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
