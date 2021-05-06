"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GENERAL_SET", {
  enumerable: true,
  get: function get() {
    return _constants.GENERAL_SET;
  }
});
Object.defineProperty(exports, "GENERAL_DELETE", {
  enumerable: true,
  get: function get() {
    return _constants.GENERAL_DELETE;
  }
});
Object.defineProperty(exports, "BOOLEAN_TOGGLE", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_TOGGLE;
  }
});
Object.defineProperty(exports, "NUMBER_ADD", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_ADD;
  }
});
Object.defineProperty(exports, "NUMBER_MULTIPLY", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_MULTIPLY;
  }
});
Object.defineProperty(exports, "OBJECT_SPREAD", {
  enumerable: true,
  get: function get() {
    return _constants.OBJECT_SPREAD;
  }
});
Object.defineProperty(exports, "ARRAY_PUSH", {
  enumerable: true,
  get: function get() {
    return _constants.ARRAY_PUSH;
  }
});
Object.defineProperty(exports, "ARRAY_PUSH_UNIQUE", {
  enumerable: true,
  get: function get() {
    return _constants.ARRAY_PUSH_UNIQUE;
  }
});
Object.defineProperty(exports, "ARRAY_TOGGLE", {
  enumerable: true,
  get: function get() {
    return _constants.ARRAY_TOGGLE;
  }
});
Object.defineProperty(exports, "ARRAY_DELETE", {
  enumerable: true,
  get: function get() {
    return _constants.ARRAY_DELETE;
  }
});
Object.defineProperty(exports, "ARRAY_DELETE_INDEX", {
  enumerable: true,
  get: function get() {
    return _constants.ARRAY_DELETE_INDEX;
  }
});
exports["default"] = void 0;

var _singleAction = _interopRequireDefault(require("./singleAction"));

var _constants = require("./constants");

var _default = {
  singleAction: _singleAction["default"]
};
exports["default"] = _default;