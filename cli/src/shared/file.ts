import {config} from 'dotenv';
import {readFileSync, writeFileSync} from 'fs';
import List from './list';

// Check for .env configuration file:
config();

export const PATH: string = process.env.SHIPYARD_PATH || `${process.cwd()}/shipyard.json`;

/**
 * Retrieves todo lists from Shipyard JSON file
 */
export function loadFile() {
  const file: Buffer = readFileSync(PATH);
  return JSON.parse(file.toString());
}

/**
 * Saves the list to Shipyard JSON file
 * @param {List} list 
 */
export function saveList(list: List) {
  const shipyard = loadFile();
  shipyard.list = list;
  return writeFileSync(PATH, JSON.stringify(shipyard));
}
