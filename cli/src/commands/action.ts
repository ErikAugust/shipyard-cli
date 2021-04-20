import {Command, flags} from '@oclif/command';
import chalk from 'chalk';
import Shipyard from '../shared/shipyard';
import Item from '../shared/item';

/**
 * `ship action`: Adds an action to an item
 * @class Action
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Action extends Command {
  static description = 'adds an action to specified item';

  static args = [
    {
      name: 'uuid',
      required: true,
      description: 'id of item'
    },
    {
      name: 'action',
      required: true,
      description: 'action to add'
    },
    {
      name: 'intention',
      description: 'intention of action'
    }
  ];

  async run(): Promise<void> {
    try {
      const {args} = this.parse(Action);
      const shortUuid = args.uuid?.toLowerCase();
      // Add action as Item:
      const action = new Item({
        title: args.action,
        intention: args.intention
      });
      const shipyard = new Shipyard();
      
      // Find item by ID:
      const item: Item | undefined = shipyard.findItem(shortUuid);
      if (!item) {
        this.log(`There are no items found for ${chalk.green.bold(shortUuid)}.\n`);
        process.exit(0);
      } else {
        // Add note and save list:
        item.addAction(action);
        this.log(`\nAction added to ${chalk.underline(item.title)} [${chalk.bold(item.getUuidShortcode())}].\n`);
        shipyard.save();
      }
    } catch (error) {
      this.log('An error has occurred:');
      console.error(error);
    }
  }
}
