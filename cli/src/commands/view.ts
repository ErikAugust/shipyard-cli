import {Command, flags} from '@oclif/command';
import {getCategoryTable} from '../shared/table';
import {loadFile} from '../shared/file';

/**
 * @class View
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class View extends Command {
  static description = 'view a list by category or item by uuid';
  static flags = {};
  static args = [];

  async run() {
    try {
      const {args, flags} = this.parse(View);

      const list = loadFile().list;

      const table = getCategoryTable(list, 'inbox');
      this.log(table.toString());
    } catch (error) {
      console.error(error);
    }
  }
}
