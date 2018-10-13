const fs = require('fs');
const path = require('path');

const generateStringFromJs = (component, componentName, cssLine) => {
    let componentStr = fs.readFileSync(path.join(__dirname, component + '.js'), 'utf-8');
    componentStr = componentStr.replace(/__COMPONENT_NAME__/g, componentName);
    if (cssLine.length > 0){
        componentStr = componentStr.replace(/__CSS_LINE__/g, cssLine)
    }
    return componentStr;
}

generateIndexFile = (root) => {
    let files = fs.readdirSync(root);
    files = files.filter((file) => !file.includes('.css') && !file.includes('index.js'));

    //if there is only one file in the directory use single index
    if (files.length === 1){
        let componentStr = fs.readFileSync(path.join(__dirname, 'singleComponentIndex.js'), 'utf-8');
        componentStr = componentStr.replace(/__COMPONENT_NAME__/g, files[0].replace(/\.js$/, ''));
        return componentStr;
    //else use the multi component file (loop over)
    } else if (files.length > 1){
        let index = '';
        let componentStr = fs.readFileSync(path.join(__dirname, 'multiComponentIndex.js'), 'utf-8');
        for (let i = 0; i < files.length; i++){
                index = index + componentStr.replace(/__COMPONENT_NAME__/g, files[i].replace(/\.js/, '')) + '\n';
        }
        return index;
    } else {
        throw new Errow('You don\'t have any javascript files in that directory');
    }
}

const componentTemplates = (component, componentName, cssLine, root) => {
    switch (component) {
        case 'pure':
            return generateStringFromJs(component, componentName, cssLine);
        case 'class':
            return generateStringFromJs(component, componentName, cssLine);
        case 'index':
            return generateIndexFile(root);
    }
}

module.exports = componentTemplates; 