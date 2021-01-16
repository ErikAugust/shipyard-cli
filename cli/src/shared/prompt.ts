import * as inquirer from 'inquirer';
import Item from '../shared/item';

/**
 * Prompts user to create new file
 * @author Erik August Johnson <erik@eaj.io>
 * @returns Promise<inquirer.Inquirer>
 */
export async function promptToCreateNewFile(): Promise<inquirer.Inquirer> {
  return await inquirer.prompt([{
    type: 'input',
    name: 'newFile',
    message: 'Create a new file?',
    default: `${process.cwd()}/shipyard.json`
  }]);
}

/**
 * Prompts user to set any items to complete in a list
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item>} items
 * @returns Promise<string[]>
 */
export async function promptToComplete(items: Array<Item>): Promise<string[]> {
  const prompt = await inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Set item(s) to complete',
      name: 'items',
      choices: items.map(item => {
        const label = item.dueDate ? `${item.title} [${item.dueDate.format('YYYY-MM-DD')}]` : item.title;
        return { name: label, value: item.uuid, checked: item.completed }
      })
    }
  ]);
  return prompt.items;
}

export async function promptToSelectItemFromList(items: Array<Item>): Promise<number> {
  const prompt = await inquirer.prompt([
    {
      type: 'list',
      message: 'Select item to view details',
      name: 'items',
      choices: items.map((item, index)=> {
        const label = item.dueDate ? `${item.title} [${item.dueDate.format('YYYY-MM-DD')}]` : item.title;
        return { name: label, value: index }
      })
    }
  ]);
  return prompt.items;
}