# generate-react-component

An opinionated CLI generator for ReactJS components.

## Why?

ReactJS is full of repetitive patterns this simple tool which can be extended quite easily
allows you generate code based on templates. Currently the templates available are Class, Functional
and Index files

Functional Component:

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const <ComponentName> = props => <div></div>;

<ComponentName>.displayName = '<ComponentName>'

<ComponentName>.propTypes = {}

<ComponentName>.defaultProps = {}

export default <ComponentName>
```  

Class Component:

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import from './<ComponentName>.css'

class <ComponetName> extends Component {

    static propTypes = {};
    static defaultProps = {};
    static displayName = '<ComponentName>'

    constructor(props) {
        super(props)
    }
    
    render() {
      return (
          <div></div>
      )
    }
  }

export default <ComponentName>
```



## Install

Run

```npm install -g generate-your-react-component```

You may need to ```sudo``` it.

## Usage

### Generate Class Component

Run

```grc -k[or --class] <ComponentDirectory> <ComponentName>```

This will create a folder within the current folder named <ComponentDirectory>,
and a **Class Component** js file named <ComponentName>.

<br>

### Generate Functional component

Run

```grc -f[or --functional] <ComponentDirectory> <ComponentName>```

### Generate index.js file in directory for all React components

```grc -i[or --index] <ComponentDirectory>


###TODOs

- [ ] Add ```yarn add global```support
- [ ] Add Chalk fancy colors
