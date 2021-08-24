/// <reference types="types.d.ts" />
// general
declare const GENERAL_SET = "set";
declare const GENERAL_DELETE = "delete";
declare const GENERAL_APPEND = "append"; // booleans
// booleans
declare const BOOLEAN_TOGGLE = "booleanToggle"; // numbers
// numbers
declare const NUMBER_ADD = "numberAdd";
declare const NUMBER_MULTIPLY = "numberMultiply"; // objects
// objects
declare const OBJECT_SPREAD = "objectSpread"; // arrays
// arrays
declare const ARRAY_PUSH = "arrayPush";
declare const ARRAY_PUSH_UNIQUE = "arrayPushUnique";
declare const ARRAY_TOGGLE = "arrayToggle";
declare const ARRAY_DELETE = "arrayDelete";
declare const ARRAY_DELETE_INDEX = "arrayDeleteIndex";
declare const _default: {
    singleAction: (state: import("../@types/types").RzsaGenericObject, payload: import("../@types/types").RzsaPayload) => import("../@types/types").RzsaOutput;
};
export { _default as default, GENERAL_SET, GENERAL_APPEND, GENERAL_DELETE, BOOLEAN_TOGGLE, NUMBER_ADD, NUMBER_MULTIPLY, OBJECT_SPREAD, ARRAY_PUSH, ARRAY_PUSH_UNIQUE, ARRAY_TOGGLE, ARRAY_DELETE, ARRAY_DELETE_INDEX };
