const {Command, flags} = require('@oclif/command');
const chalk = require('chalk');

/**
 * `ship add`: Add an item to list
 * @class AddCommand
 * @author Erik August Johnson <erik@erikaugust.com>
 */
class AddCommand extends Command {
  static args = [
    {
      name: 'title',
      required: true,
      description: 'title of item'
    },
    {
      name: 'intention',
      description: 'intention of item'
    }
  ];

  static flags = {
    list: flags.string({
      char: 'l',
      default: 'inbox',
      multiple: true,
      description: 'list where item will be added'
    }),
    dueDate: flags.string({
      char: 'd',
      multiple: false,
      description: 'due date of item (example: "2020-09-30")'
    })
  };

  async run() {
    const {args, flags} = this.parse(AddCommand);
    // TODO: Add to list:
    this.log(`${chalk.underline(args.title)} added to ${chalk.bold(flags.list)}.`);
  }
}

AddCommand.description = `add an item to list`;

module.exports = AddCommand;
