import { RzsaGenericObject, RzsaOutput, RzsaPayload } from '../@types/types'
import {
  GENERAL_SET,
  GENERAL_APPEND,
  GENERAL_DELETE,
  BOOLEAN_TOGGLE,
  NUMBER_ADD,
  NUMBER_MULTIPLY,
  OBJECT_SPREAD,
  ARRAY_PUSH,
  ARRAY_PUSH_UNIQUE,
  ARRAY_TOGGLE,
  ARRAY_DELETE,
  ARRAY_DELETE_INDEX,
} from './constants'

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
const singleAction = (
  state: RzsaGenericObject,
  payload: RzsaPayload
): RzsaOutput => {
  const { keys, value } = payload

  if (!payload.action) {
    payload.action = GENERAL_SET
  }

  const stateKey = keys[0]

  const newState = {
    [stateKey]:
      typeof state === 'object' && state && state[stateKey]
        ? JSON.parse(JSON.stringify(state[stateKey]))
        : undefined,
  }

  const subValues = [newState]

  const keysLength: number = keys.length

  for (let index = 0; index < keysLength; index++) {
    const currentKey = keys[index]

    // keys.map((currentKey: string | number, index: number) => {
    const isLastKey = index === keys.length - 1

    const nextSubvalue = subValues[index][currentKey]

    if (isLastKey) {
      // general
      if (payload.action === GENERAL_SET) {
        subValues[index][currentKey] = value
        continue
      }

      if (payload.action === GENERAL_APPEND) {
        if (!subValues[index][currentKey]) {
          subValues[index][currentKey] = value
        } else {
          subValues[index][currentKey] += value
        }

        continue
      }

      if (payload.action === GENERAL_DELETE) {
        if (subValues[index][currentKey]) {
          delete subValues[index][currentKey]
        }

        continue
      }

      // boolean
      if (payload.action === BOOLEAN_TOGGLE) {
        subValues[index][currentKey] = !subValues[index][currentKey]
        continue
      }

      // number
      if (payload.action === NUMBER_ADD) {
        if (typeof subValues[index][currentKey] === 'number') {
          subValues[index][currentKey] += value
        } else {
          subValues[index][currentKey] = value
        }
        continue
      }

      if (payload.action === NUMBER_MULTIPLY && typeof value === 'number') {
        if (typeof subValues[index][currentKey] === 'number') {
          subValues[index][currentKey] *= value
        } else {
          subValues[index][currentKey] = 0
        }
        continue
      }

      // object
      if (payload.action === OBJECT_SPREAD) {
        if (!subValues[index][currentKey]) {
          subValues[index][currentKey] = {}
        }

        if (typeof value === 'object') {
          subValues[index][currentKey] = {
            ...subValues[index][currentKey],
            ...value,
          }
        }

        continue
      }

      // array
      if (payload.action === ARRAY_PUSH) {
        if (
          !subValues[index][currentKey] ||
          !Array.isArray(subValues[index][currentKey])
        ) {
          subValues[index][currentKey] = []
        }

        subValues[index][currentKey].push(value)
        continue
      }

      if (payload.action === ARRAY_PUSH_UNIQUE) {
        if (
          !subValues[index][currentKey] ||
          !Array.isArray(subValues[index][currentKey])
        ) {
          subValues[index][currentKey] = []
        }

        if (!subValues[index][currentKey].includes(value)) {
          subValues[index][currentKey].push(value)
        }
        continue
      }

      if (payload.action === ARRAY_TOGGLE) {
        if (
          !subValues[index][currentKey] ||
          !Array.isArray(subValues[index][currentKey])
        ) {
          subValues[index][currentKey] = []
        }

        const valueIndex = subValues[index][currentKey].indexOf(value)

        if (valueIndex > -1) {
          subValues[index][currentKey].splice(valueIndex, 1)
        } else {
          subValues[index][currentKey].push(value)
        }
        continue
      }

      if (payload.action === ARRAY_DELETE) {
        if (!Array.isArray(subValues[index][currentKey])) {
          subValues[index][currentKey] = []
        }

        const valueIndex = subValues[index][currentKey].indexOf(value)

        if (valueIndex > -1) {
          subValues[index][currentKey].splice(valueIndex, 1)
        }
        continue
      }

      if (payload.action === ARRAY_DELETE_INDEX) {
        if (
          !subValues[index][currentKey] ||
          !Array.isArray(subValues[index][currentKey])
        ) {
          subValues[index][currentKey] = []
        }

        if (value && typeof value === 'number' && value > -1) {
          subValues[index][currentKey].splice(value, 1)
        }
        continue
      }

      continue
    }

    subValues.push(nextSubvalue)
  }

  return { [stateKey]: subValues[0][stateKey] }
}

export default singleAction
