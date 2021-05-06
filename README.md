# redux-zero-single-action

Single action for redux-zero which tries to cover most state change operations.

## Dependencies
```
npm i -g npm
npm i redux-zero
npm i react react-dom
```

## Installation
```
npm i redux-zero-single-action
```

## Usage
In your React component, import actions and the action constants required:

```
import { connect } from 'redux-zero/react'
import actions from 'redux-zero-single-action'
import {
  BOOLEAN_TOGGLE
} from 'redux-zero-single-action/constants'
```

Connect your component to the store:
```
<< COMPONENT GOES HERE >>

const mapToProps = ({
  propToSet,
}) => ({
  propToSet,
})

export default connect(
  mapToProps,
  actions
)(TestComponent)
```

Finally use the action in your component:
```
const TestComponent = ({
  singleAction,
  propToSet,
}) => (
    <div className="container">
      <button
        onClick={() => singleAction({
          keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
          action: GENERAL_SET,
          value: 'new'
        })}
      />
    </div>
  )
}
```

Example folder coming soon.


## Why redux-zero-single-action?
[Redux-zero](https://github.com/redux-zero/redux-zero) does a great job in simplifying the Redux flow.
Having a single action bring an additional simplification, as:
* less actions to connect to components and pass around
* less code
* focus on testing functions rather than store actions

## Next steps
* Add example folder
