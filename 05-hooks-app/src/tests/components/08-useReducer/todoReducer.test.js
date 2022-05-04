import todoReducer from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../dataTest/demoTodos";

describe('Tests in todoReducer', () => { 
    const newTodo =  {
        id: 3,
        desc: 'aprender Node JS',
        done: false
     };
    test('should return default state', () => { 
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
     });

     test('should add a new task in todos list', () => { 
        const actionAdd = {
            type: 'ADD',
            payload: newTodo
        }
        const state = todoReducer(demoTodos, actionAdd);
        expect(state.length).toEqual(3);
        expect(state).toEqual([...demoTodos, newTodo]);
      })

      test('should delete a todo item', () => { 

        const actionDelete = {
            type: 'DELETE',
            payload: 1
        };

        const state = todoReducer(demoTodos, actionDelete);
        expect(state.length).toEqual(1);
        expect(state).toEqual([demoTodos[1]]);
       });

       test('should change done value to todo item', () => { 

        const actionToggle = {
            type: 'TOGGLE',
            payload: 2
        };

        const state = todoReducer(demoTodos, actionToggle);
        expect(state.length).toEqual(2);
        /* esta línea es para asegurarme que el toggle no cambió el otro elemento */
        expect(state[0]).toEqual(demoTodos[0]);
        expect(state[1].done).toEqual(true);
       });
 })