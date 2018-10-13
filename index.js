#!/usr/bin/env node
'use strict';

var path = require('path');
var fs = require('fs-extra');
var componentTemplates = require('./componentTemplates/index.js');

var componentName;

var program = require('commander')
  .version(require('./package.json').version)
  .arguments('<component-directory>')
  .action(function (name) {
    componentName = name;
  })
  .option('-p, --pure', 'Create Pure Function Component')
  .option('-k --class', 'Create Class Component')
  .option('-c, --css', `Add ${componentName}.css`)
  .option('-i, --index', 'Create index.js file for all components in supplied directory')
  .parse(process.argv)
 
createComponent(componentName);

function createComponent(name) {
  var root = path.resolve(name);

  if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  var cssLine = ''
  if (program.css) {
    fs.writeFileSync(
      path.join(root, `${name}.css`),
      `.${name}{}`
    )
    cssLine = `import from './${name}.css'\n\n`
  }
  if (program.index){
    const template = componentTemplates('index', null, null, root);
    fs.writeFileSync(path.join(root, 'index.js'), template);
  } else if (program.pure) {
    const template = componentTemplates('pure', name, cssLine);
    fs.writeFileSync(
      path.join(root, `${name}.js`),
      template
    )

  } else if (program.class) {
    const template = componentTemplates('class', name, cssLine);
    fs.writeFileSync(
      path.join(root, `${name}.js`), 
      template
    );
  }

  console.log(`Component ${name} created`);
}
