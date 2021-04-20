import {config} from 'dotenv';
import {readFileSync, writeFileSync} from 'fs';
import Item, {DeserializedItem} from '../shared/item';
import * as os from 'os';

// Check for .env configuration file:
config();

export const PATH: string = process.env.SHIPYARD_PATH || `${os.homedir()}/shipyard.json` || `${process.cwd()}/shipyard.json`;

interface ShipyardConfig {
  created?: string;
}

interface DeserializedShipyard {
  list: Array<DeserializedItem>;
  archive: Array<DeserializedItem>;
  trash: Array<DeserializedItem>;
  config: ShipyardConfig;
}

/**
 * @class Shipyard
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Shipyard {
  path: string;
  list: Array<Item>;
  archive: Array<Item>;
  trash: Array<Item>;
  file!: Buffer;

  constructor(path?: string) {
    this.path = path || PATH;
    const shipyard: DeserializedShipyard = this.load();
    this.list = shipyard.list.map(item => new Item(item));
    this.archive = shipyard.archive.map(item => new Item(item));
    this.trash = shipyard.trash.map(item => new Item(item));
  }

  /**
   * Saves the current Shipyard instance to the Shipyard JSON file
   */
  public save(): void {
    const shipyard = {
      list: this.list,
      archive: this.archive,
      trash: this.trash,
      config: {}
    };
    writeFileSync(this.path, JSON.stringify(shipyard, null, 2));
  }

  /**
   * Finds an item via shortcode - can be a deeply nested action
   * @param {string} shortUuid 
   */
  public findItem(shortUuid: string): Item | undefined {
    if (this.listHasItem(shortUuid)) {
      for (const item of this.list) {
        // Base case:
        const condition = item.uuid.slice(0, 6) === shortUuid;
        if (condition) {
          return item;
        } else if (item.actions && item.actions.length) {
          const nested = this.findNestedItem(shortUuid, item.actions);
          if (nested) {
            return nested;
          }
        }
      }
      return undefined;
    }
  }

  private findNestedItem(shortUuid: string, items: Array<Item>): Item | undefined {
    for (const item of items) {
      // Base case:
      const condition = item.uuid.slice(0, 6) === shortUuid;
      if (condition) {
        return item;
      }
      if (item.actions && item.actions.length) {
        return this.findNestedItem(shortUuid, item.actions);
      }
    }
    return undefined;
  }

  /**
   * Gleans if list has the ID present via looking at the serialized version
   * @param {string} shortUuid 
   */
  public listHasItem(shortUuid: string): boolean {
    return this.file.toString().indexOf(shortUuid) > -1;
  }

  /**
   * Loads and deserializes the Shipyard JSON file
   */
  private load(): DeserializedShipyard {
    this.file = readFileSync(this.path);
    return JSON.parse(this.file.toString());
  }
}