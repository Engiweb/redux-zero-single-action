"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("./constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
* The singleAction action takes the current state from the first keys array item
* and recursively loops through the other subkeys, setting a new value
* based on the chosen action
*
* @param {Object} state The current redux-zero state
* @param {Object} payload The actual payload
* @param {Array} payload.keys Array which contains state key and optional subkeys
* @param {String} payload.action Action name from the following list:
*                                  GENERAL_SET,
*                                  GENERAL_APPEND,
*                                  GENERAL_DELETE,
*                                  BOOLEAN_TOGGLE,
*                                  NUMBER_ADD,
*                                  NUMBER_MULTIPLY,
*                                  OBJECT_SPREAD,
*                                  ARRAY_PUSH,
*                                  ARRAY_PUSH_UNIQUE,
*                                  ARRAY_TOGGLE,
*                                  ARRAY_DELETE,
*                                  ARRAY_DELETE_INDEX
* @param {Array} [payload.value]  Optional value to set
* @returns {Object} Returns the updated state
*/
var singleAction = function singleAction(state, _ref) {
  var keys = _ref.keys,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? _constants.GENERAL_SET : _ref$action,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value;
  var stateKey = keys[0];
  var newState = (0, _defineProperty2["default"])({}, stateKey, state[stateKey] ? JSON.parse(JSON.stringify(state[stateKey])) : undefined);
  var subValues = [newState];
  keys.map(function (currentKey, index) {
    var isLastKey = index === keys.length - 1;
    var nextSubvalue = subValues[index][currentKey];

    if (isLastKey) {
      // general
      if (action === _constants.GENERAL_SET) {
        subValues[index][currentKey] = value;
      }

      if (action === _constants.GENERAL_APPEND) {
        subValues[index][currentKey] += value;
      }

      if (action === _constants.GENERAL_DELETE) {
        if (subValues[index][currentKey]) {
          delete subValues[index][currentKey];
        }
      } // boolean


      if (action === _constants.BOOLEAN_TOGGLE) {
        subValues[index][currentKey] = !subValues[index][currentKey];
      } // number


      if (action === _constants.NUMBER_ADD) {
        if (typeof subValues[index][currentKey] === 'number') {
          subValues[index][currentKey] += value;
        } else {
          subValues[index][currentKey] = value;
        }
      }

      if (action === _constants.NUMBER_MULTIPLY) {
        if (typeof subValues[index][currentKey] === 'number') {
          subValues[index][currentKey] *= value;
        } else {
          subValues[index][currentKey] = 0;
        }
      } // object


      if (action === _constants.OBJECT_SPREAD) {
        if (!subValues[index][currentKey]) {
          subValues[index][currentKey] = {};
        }

        subValues[index][currentKey] = _objectSpread(_objectSpread({}, subValues[index][currentKey]), value);
      } // array


      if (action === _constants.ARRAY_PUSH) {
        if (!subValues[index][currentKey] || !Array.isArray(subValues[index][currentKey])) {
          subValues[index][currentKey] = [];
        }

        subValues[index][currentKey].push(value);
      }

      if (action === _constants.ARRAY_PUSH_UNIQUE) {
        if (!subValues[index][currentKey] || !Array.isArray(subValues[index][currentKey])) {
          subValues[index][currentKey] = [];
        }

        if (!subValues[index][currentKey].includes(value)) {
          subValues[index][currentKey].push(value);
        }
      }

      if (action === _constants.ARRAY_TOGGLE) {
        if (!subValues[index][currentKey] || !Array.isArray(subValues[index][currentKey])) {
          subValues[index][currentKey] = [];
        }

        var valueIndex = subValues[index][currentKey].indexOf(value);

        if (valueIndex > -1) {
          subValues[index][currentKey].splice(valueIndex, 1);
        } else {
          subValues[index][currentKey].push(value);
        }
      }

      if (action === _constants.ARRAY_DELETE) {
        if (!Array.isArray(subValues[index][currentKey])) {
          subValues[index][currentKey] = [];
        }

        var _valueIndex = subValues[index][currentKey].indexOf(value);

        if (_valueIndex > -1) {
          subValues[index][currentKey].splice(_valueIndex, 1);
        }
      }

      if (action === _constants.ARRAY_DELETE_INDEX) {
        if (!subValues[index][currentKey] || !Array.isArray(subValues[index][currentKey])) {
          subValues[index][currentKey] = [];
        }

        if (value > -1) {
          subValues[index][currentKey].splice(value, 1);
        }
      }
    }

    return subValues.push(nextSubvalue);
  });
  return (0, _defineProperty2["default"])({}, stateKey, subValues[0][stateKey]);
};

var _default = singleAction;
exports["default"] = _default;