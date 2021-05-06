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
import actions, {
  BOOLEAN_TOGGLE
} from 'redux-zero-single-action'
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

## Action types
* GENERAL_SET: default key-value replacement
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: GENERAL_SET,
      value: 'new'
    })
```

* GENERAL_DELETE: remove key
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: GENERAL_DELETE,
    })
```

* BOOLEAN_TOGGLE: toggle boolean value
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: BOOLEAN_TOGGLE,
    })
```

* NUMBER_ADD: add number to existing value (if no value, it sets the value as the added number)
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: NUMBER_ADD,
      value: 1
    })
```

* NUMBER_MULTIPLY: multiply number to existing value (if no value, it sets the value to 0)
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: NUMBER_MULTIPLY,
      value: 8
    })
```

* OBJECT_SPREAD: spread object value into existing object-type key 
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: OBJECT_SPREAD,
      value: { id: 1 }
    })
```

* ARRAY_PUSH: push valueinto existing array-type key 
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: ARRAY_PUSH,
      value: 'item
    })
```

* ARRAY_PUSH_UNIQUE: push value into existing array-type key only if item is not present in the array
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: ARRAY_PUSH,
      value: 'item'
    })
```

* ARRAY_TOGGLE: push value into existing array-type key if item is not present in the array, otherwise removes it from the array
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: ARRAY_TOGGLE,
      value: 'item'
    })
```

* ARRAY_DELETE: removes item from existing array-type key if item is present
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: NUMBER_MULTIPLY,
      value: 'item'
    })
```

* ARRAY_DELETE_INDEX: removes item from existing array-type key by index, if index is present
```
singleAction({
      keys: ['propToSet', 'propToSetSubKey', 'propToSetSubSubKey'],
      action: NUMBER_MULTIPLY,
      value: 8
    })
```

## Why redux-zero-single-action?
[Redux-zero](https://github.com/redux-zero/redux-zero) does a great job in simplifying the Redux flow.
Having a single action bring an additional simplification, as:
* less actions to connect to components and pass around
* less code
* focus on functions development rather than store actions

## Next steps
* Add example folder
