import {Command, flags} from '@oclif/command';
import chalk from 'chalk';
import Shipyard from '../shared/shipyard';
import Item from '../shared/item';

/**
 * `ship note`: Adds a note to an item
 * @class Note
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Note extends Command {
  static description = 'adds a note to specified item';

  static args = [
    {
      name: 'uuid',
      required: true,
      description: 'id of item'
    },
    {
      name: 'note',
      required: true,
      description: 'note to add'
    }
  ];

  async run(): Promise<void> {
    try {
      const {args} = this.parse(Note);
      const shortUuid = args.uuid?.toLowerCase();
      const note = args.note;
      const shipyard = new Shipyard();
      
      // Find item by ID:
      const item: Item | undefined = shipyard.findItem(shortUuid);
      if (!item) {
        this.log(`There are no items found for ${chalk.green.bold(shortUuid)}.\n`);
        process.exit(0);
      } else {
        // Add note and save list:
        item.addNote(note);
        this.log(`\nNote added to ${chalk.underline(item.title)} [${chalk.bold(item.getUuidShortcode())}].\n`);
        shipyard.save();
      }
    } catch (error) {
      this.log('An error has occurred:');
      console.error(error);
    }
  }
}
