import List from '../shared/list';
import Table = require('cli-table');
import chalk from 'chalk';

/**
 * Retrieves instance of CLI Table for the items in a list category
 * @author Erik August Johnson <erik@eaj.io>
 * @param {List} list
 * @param {string} category
 */
export function getCategoryTable(list: List, category: string = 'inbox') {
  const table = new Table({
    head: [
      chalk.greenBright('uuid'),
      chalk.greenBright('title'),
      chalk.greenBright('next action')
    ]
  });
  const items = list[category];
  for (let i = 0; i < items.length; i++) {
    const uuid = items[i].uuid.slice(-6);
    // TODO: Refactor list/item to provide functions to retrieve next action:
    const actions = items[i].actions;
    const action = actions && actions[0] ? actions[0].title : '';
    table.push([uuid, items[i].title, action]);
  }
  return table;
}