import * as inquirer from 'inquirer';

export async function promptToCreateNewFile() {
  return await inquirer.prompt([{
    type: 'input',
    name: 'newFile',
    message: 'Create a new file?',
    default: `${process.cwd()}/shipyard.json`
  }]);
}