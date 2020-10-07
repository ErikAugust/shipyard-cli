import Table = require('cli-table');
import chalk from 'chalk';
import Item from '../shared/item';

/**
 * Retrieves instance of CLI Table for a given list of items
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item>} items
 * @param {string} category
 */
export function getTable(items: Array<Item>) {
  const table = new Table({
    head: [
      chalk.greenBright('uuid'),
      chalk.greenBright('title'),
      chalk.greenBright('next action')
    ]
  });
  for (let i = 0; i < items.length; i++) {
    const uuid = items[i].uuid.slice(-6);
    const actions = items[i].actions;
    const action = actions && actions[0] ? actions[0].title : '';
    table.push([uuid, items[i].title, action]);
  }
  return table;
}