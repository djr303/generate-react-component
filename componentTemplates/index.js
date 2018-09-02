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

const componentTemplates = (component, componentName, cssLine) => {
    switch (component) {
        case "pure":
            return generateStringFromJs(component, componentName, cssLine);
        case "class":
            return generateStringFromJs(component, componentName, cssLine);
    }
}

module.exports = componentTemplates; 