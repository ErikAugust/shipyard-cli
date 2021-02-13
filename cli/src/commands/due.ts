import {Command} from '@oclif/command';
import chalk from 'chalk';
import Shipyard from '../shared/shipyard';
import Item from '../shared/item';

/**
 * `ship due`: Adds/modifies/removes a due date for an item
 * @class Due
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Due extends Command {
  static description = 'adds/modifies/removes a due date from specified item';

  static args = [
    {
      name: 'uuid',
      required: true,
      description: 'id of item'
    },
    {
      name: 'dueDate',
      required: true,
      description: 'due date to add/update ("YYYY-MM-DD", use "none" to remove)'
    }
  ];

  async run(): Promise<void> {
    try {
      const {args} = this.parse(Due);
      const shortUuid = args.uuid?.toLowerCase();
      const dueDate = args.dueDate;
      const shipyard = new Shipyard();
      
      // Find item by ID:
      const item: Item | undefined = shipyard.findItem(shortUuid);
      if (!item) {
        this.log(`There are no items found for ${chalk.green.bold(shortUuid)}.\n`);
        process.exit(0);
      } else {
        // Update due date and save list:
        if (dueDate.toLowerCase() === 'none') {
          item.removeDueDate();
        } else {
          item.addDueDate(dueDate);
        }
        this.log(`\nDue date updated for ${chalk.underline(item.title)} [${chalk.bold(item.getUuidShortcode())}].\n`);
        shipyard.save();
      }
    } catch (error) {
      this.log('An error has occurred:');
      console.error(error);
    }
  }
}
