import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Tests in Auth reducer', () => { 
    test('it should return default state', () => { 
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
     })

     test('It should authenticate and set user name', () => { 
        const action = {
            type: types.login,
            payload: {
                name: 'Maureen'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            name: 'Maureen'
        })
      })

      test('It should clear user name and set logged in false', () => { 
        const action = {
            type: types.logout
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: false
        })
       })
 })