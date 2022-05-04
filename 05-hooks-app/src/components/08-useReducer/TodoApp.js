import React, { useReducer, useEffect } from 'react'
import './styles.css';
import { TodoAdd } from './TodoAdd';
import todoReducer from './todoReducer';
import { TodosList } from './TodosList';

export const TodoApp = () => {

    const init = () => {
        /* Establece el estado inicial del reducer */
        return JSON.parse(localStorage.getItem('todos')) || []
    };

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    /* en destructuración de arreglos se puede cambiar el nombre de las variables ya que el resultado
    es posicionado, es decir, state es posición cero asi se llame todos.
    DISPATCH: función que recibe una action para ejecutar  y enviar la información al reducer específico que 
    se está usando ya que es pasado por referencia y cuando cambie el state va a redibujar lo que cambie */



    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])

    const handleDelete = (todoId) => {
    const action = {
        type: 'DELETE',
        payload: todoId
    };
    dispatch(action);
    };

    const handleToggle = (todoId) => {
        const action = {
            type: 'TOGGLE',
            payload: todoId
        };

        dispatch(action);
    }

    const handleAddTodo = (newTodo) =>{
        dispatch({
            type: 'ADD',
            payload: newTodo
        }) 
    }
    
  return (
    <>
    <h1>TodoApp ({ todos.length })</h1>
    <hr />
    <div className='row'>
        <div className='col-7'>
            <TodosList
                todos={todos}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
             />
        </div>
        <div className='col-5'>
            <TodoAdd 
                handleAddTodo={handleAddTodo}
            />
        </div>
    </div>
    </>
  )
}
