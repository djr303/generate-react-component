#!/usr/bin/env node
'use strict';

const colors = require('colors');
const path = require('path');
const fs = require('fs-extra');
const componentTemplates = require('./componentTemplates/index.js');

//incoming arguments from cli command
let componentDir;
let componentName;

//setup commander with switches and args
const program = require('commander')
  .version(require('./package.json').version)
  .arguments('<component-directory> [component-name]')
  .action(function(cDir, cName) {
    componentDir = cDir;
    componentName = cName;
  })
  .option('-f, --functional', 'Create functional component')
  .option('-k --class', 'Create class component')
  .option(
    '-i, --index',
    'Create index.js file for all components in supplied directory',
  )
  .parse(process.argv);

//function which takes, the directory to create and the type of componennt to create
const createComponent = (dir, name) => {
  const root = path.resolve(dir);

  if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  if (program.index) {
		
		//if we're going to produce an index file these can simply
		//be overwritten as they are rarely modified also need to provide
		//'index' as a component name for the console output
    const template = componentTemplates('index', null, root);
    const fileToWrite = path.join(root, 'index.js');

		//I know a shadow variable but no problems here
		name = 'index';
		fs.writeFileSync(fileToWrite, template);
  } else if (program.functional) {
    const template = componentTemplates('functional', name);
    const fileToWrite = path.join(root, `${name}.js`);
    checkExistsAndWriteFile(fileToWrite, template);
  } else if (program.class) {
    const template = componentTemplates('class', name);
    const fileToWrite = path.join(root, `${name}.js`);
    checkExistsAndWriteFile(fileToWrite, template);
  } else {
    console.error('Big problems boss, try again :('.red);
    process.exit(2);
  }

  console.log(`Component '${name}' created`.green);
  process.exit(0);
}

//function to make sure we don't overwrite a file that already exists
const checkExistsAndWriteFile = (fileToWrite, template) => {
  if (fs.existsSync(fileToWrite)) {
    console.error(
      "This file in this location already exists, I'm not going to do anything stupid..".red
    );
    process.exit(2);
  } else {
    fs.writeFileSync(fileToWrite, template);
  }
};

createComponent(componentDir, componentName);
