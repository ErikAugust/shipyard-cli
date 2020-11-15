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
   * Loads and deserializes the Shipyard JSON file
   */
  private load(): DeserializedShipyard {
    const file: Buffer = readFileSync(this.path);
    return JSON.parse(file.toString());
  }
}