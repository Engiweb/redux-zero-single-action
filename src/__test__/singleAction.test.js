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
  ARRAY_DELETE_INDEX
} from '../constants'
import singleAction from '../singleAction'

describe('Actions', () => {
  describe('GENERAL', () => {
    describe('GENERAL_SET', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]

        const value = 'new'
        const action = GENERAL_SET

        const state = {
          parent: 'old'
        }

        const newState = {
          parent: value
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = {
          subsubchild: 'test'
        }
        const action = GENERAL_SET

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 1
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: value
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })

    describe('GENERAL_APPEND', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]

        const value = 'new'
        const action = GENERAL_APPEND

        const state = {
          parent: 'old'
        }

        const newState = {
          parent: `old${value}`
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'new'
        const action = GENERAL_APPEND

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 'old'
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 'oldnew',
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })

    describe('GENERAL_DELETE', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const action = GENERAL_DELETE

        const state = {
          parent: 'value'
        }

        const newState = {
          parent: undefined
        }

        expect(singleAction(state, { keys, action })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const action = GENERAL_DELETE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 'value'
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
            }
          }
        }

        expect(singleAction(state, { keys, action })).toEqual(newState)
      })
    })
  })

  describe('BOOLEAN', () => {
    describe('BOOLEAN_TOGGLE', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const action = BOOLEAN_TOGGLE

        const state = {
          parent: false
        }

        const newState = {
          parent: true
        }

        expect(singleAction(state, { keys, action })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const action = BOOLEAN_TOGGLE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: true
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: false
            }
          }
        }

        expect(singleAction(state, { keys, action })).toEqual(newState)
      })
    })
  })

  describe('NUMBER', () => {
    describe('NUMBER_ADD', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const value = 1
        const action = NUMBER_ADD

        const state = {
          parent: 1
        }

        const newState = {
          parent: 2
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 1
        const action = NUMBER_ADD

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 1
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 2
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })

    describe('NUMBER_MULTIPLY', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const value = 4
        const action = NUMBER_MULTIPLY

        const state = {
          parent: 2
        }

        const newState = {
          parent: 8
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 7
        const action = NUMBER_MULTIPLY

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 2
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: 14
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })
  })

  describe('ARRAY', () => {
    describe('ARRAY_PUSH', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const value = 'two'
        const action = ARRAY_PUSH

        const state = {
          parent: ['one', 'two']
        }

        const newState = {
          parent: ['one', 'two', 'two']
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'two'
        const action = ARRAY_PUSH

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              subchild: ['one', 'two']
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              subchild: ['one', 'two', 'two']
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })

    describe('ARRAY_PUSH_UNIQUE', () => {
      it('should work correctly when single key and not existing', () => {
        const keys = [
          'parent',
        ]
        const value = 'three'
        const action = ARRAY_PUSH_UNIQUE

        const state = {
          parent: ['one', 'two']
        }

        const newState = {
          parent: ['one', 'two', 'three']
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when single key and existing', () => {
        const keys = [
          'parent',
        ]
        const value = 'two'
        const action = ARRAY_PUSH_UNIQUE

        const state = {
          parent: ['one', 'two']
        }

        const newState = {
          parent: ['one', 'two']
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key and not existing', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'three'
        const action = ARRAY_PUSH_UNIQUE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              subchild: ['one', 'two']
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              subchild: ['one', 'two', 'three']
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key and existing', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'two'
        const action = ARRAY_PUSH_UNIQUE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              subchild: ['one', 'two']
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              subchild: ['one', 'two']
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })

    describe('ARRAY_TOGGLE', () => {
      it('should work correctly when single key and field not existing', () => {
        const keys = [
          'parent',
        ]

        const value = 'new'
        const action = ARRAY_TOGGLE

        const state = {
          parent: ['old']
        }

        const newState = {
          parent: ['old', 'new']
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when single key and field existing', () => {
        const keys = [
          'parent',
        ]

        const value = 'new'
        const action = ARRAY_TOGGLE

        const state = {
          parent: ['old', 'new']
        }

        const newState = {
          parent: ['old']
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key and field not existing', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'new'
        const action = ARRAY_TOGGLE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['old']
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['old', 'new']
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key and field existing', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'new'
        const action = ARRAY_TOGGLE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['old', 'new']
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['old']
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })

    describe('ARRAY_DELETE', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const value = 'two'
        const action = ARRAY_DELETE

        const state = {
          parent: ['one', 'two', 'three']
        }

        const newState = {
          parent: ['one', 'three']
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multikey', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'two'

        const action = ARRAY_DELETE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['one', 'two']
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['one']
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multikey and no subkey', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 'two'

        const action = ARRAY_DELETE

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: []
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })

    describe('ARRAY_DELETE_INDEX', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const value = 1
        const action = ARRAY_DELETE_INDEX

        const state = {
          parent: ['one', 'two', 'three']
        }

        const newState = {
          parent: ['one', 'three']
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multikey', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 1

        const action = ARRAY_DELETE_INDEX

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['one', 'two']
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: ['one']
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multikey and no subkey', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = 1

        const action = ARRAY_DELETE_INDEX

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: 'test',
              subchild: []
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })
  })

  describe('OBJECT_SPREAD', () => {
    describe('OBJECT_SPREAD', () => {
      it('should work correctly when single key', () => {
        const keys = [
          'parent',
        ]
        const value = { b: '2' }
        const action = OBJECT_SPREAD

        const state = {
          parent: {
            a: '1'
          }
        }

        const newState = {
          parent: {
            a: '1',
            b: '2'
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })

      it('should work correctly when multi key', () => {
        const keys = [
          'parent',
          'child',
          'subchild'
        ]
        const value = { b: '2' }
        const action = OBJECT_SPREAD

        const state = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: ['one'],
              subchild: {
                a: '1'
              },
            }
          }
        }

        const newState = {
          parent: {
            otherChild: 'test',
            child: {
              otherSubchild: ['one'],
              subchild: {
                a: '1',
                b: '2'
              },
            }
          }
        }

        expect(singleAction(state, { keys, action, value })).toEqual(newState)
      })
    })
  })
})
