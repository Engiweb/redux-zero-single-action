import { RzsaGenericObject, RzsaOutput, RzsaPayload } from '../@types/types';
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
declare const singleAction: (state: RzsaGenericObject, payload: RzsaPayload) => RzsaOutput;
export default singleAction;
