import Table = require('cli-table');
const terminal = require('terminal-kit').terminal;

import chalk from 'chalk';
import Item from '../shared/item';

/**
 * Retrieves instance of CLI Table for a given list of items
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item>} items
 * @param {string} category
 */
export function getTable(items: Array<Item>): Table {
  const table = new Table({
    head: [
      chalk.greenBright('uuid'),
      chalk.greenBright('title'),
      chalk.greenBright('next action')
    ]
  });
  for (let i = 0; i < items.length; i++) {
    const uuid = items[i].uuid.slice(0, 6);
    const nextAction = items[i].getNextAction()?.title || '';
    table.push([uuid, items[i].title, nextAction]);
  }
  return table;
}

export function getItemTable(item: Item): void {
  // Uses markup:
  // https://github.com/cronvel/terminal-kit/blob/master/doc/markup.md
  terminal.table(
    [
      [ 'title', `^+${item.title}` ],
      [ 'intention', `^/${item.intention || ''}` ],
      [ 'created at', item.createdAt.format('MMMM Do YYYY [at] h:mm:ss a') ],
      [ 'due date', item.dueDate?.format('MMMM Do YYYY [at] h:mm:ss a') ],
      [ 'actions', item.actions?.map(action => action.title).join('\n') ]
    ],
    {
      hasBorder: true,
      contentHasMarkup: true,
      borderAttr: { color: 'blue' },
      textAttr: { bgColor: 'default' },
      firstColumnTextAttr: { color: 'blue' },
      width: 60,
      fit: true
    }
  );
}