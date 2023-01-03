#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();

program.name('gendiff')
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1> <filepath2>');

program.parse();
