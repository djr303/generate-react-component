# generate-react-component

An opinionated CLI generator for ReactJS components.
<br>

## Why?

As a ReactJS developer, from time to time, I have to create components of same structure, by manual copy & paste. It is a time consuming no-brainer process that any React dev may repeat everyday. 

Typically, there are two kinds of components: [Functional and Class Components](https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components), the basic structure of either could always look the same, in one project:

Functional Component:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import from './<ComponentName>.css'

const <ComponentName> = (props) => (
    <div></div>
);

<ComponentName>.propTypes = {

}

<ComponentName>.defaultProps = {

}

export default <ComponentName>
```  

Class Component:

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import from './<ComponentName>.css'

class <ComponetName> extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
      return (
          <div></div>
      )
    }
  }

<ComponentName>.defaultProps = {

}

export default <CompoentName> 
```

It should be a super easy tool to automatically generate these files, without manual new file creation or copy & paste. So, here you are.
<br>

## Install

Run

```npm install -g generate-your-react-component```

You may need to ```sudo``` it.

<br>
## Usage

### Generate Class Component

Run

```rcmp -k[or --class] <ComponentName>```

This will create a folder of your component name, and a **Class Component** js file with the same name.

<br>

### Generate Pure Function Component

Run

```rcmp <ComponentName> --pure```

or

```rcmp <ComponentName> -p```

This will create a folder of your component name, and **Pure Function Component** js file of the same name.

<br>
### Generate Component (Class or Pure) with a CSS file

Run

```rcmp <ComponentName> --pure/--class -c/--css```

<br>
That's it!

Enjoy and feel free to share your suggestion!

###TODO

- [ ] Add ```yarn add global```support
- [ ] Add Chalk fancy colors