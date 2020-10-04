import * as inquirer from 'inquirer';

/**
 * Prompts user to create new file
 * @author Erik August Johnson <erik@eaj.io>
 */
export async function promptToCreateNewFile() {
  return await inquirer.prompt([{
    type: 'input',
    name: 'newFile',
    message: 'Create a new file?',
    default: `${process.cwd()}/shipyard.json`
  }]);
}