import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodosList = ({todos,  handleToggle, handleDelete}) => {

  return (
    <ol className='list-group list-group-flush'>
            {
                todos.map((todo, index) => (
                    <TodoListItem 
                        key={todo.id}
                        todo={todo}
                        index={index}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    /> )
                )
            }
        </ol>
  )
}
