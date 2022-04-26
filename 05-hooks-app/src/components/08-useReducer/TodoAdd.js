import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    /*COMPONENTE CREADO PARA SEPARAR LA LÓGICA DEL FORMULARIO DEL COMPONENTE PRINCIPAL */

        /* Valores que retorna el custom hook creado para el manejo de los cambios en los inputs y los valores
    del formulario */
    const [ { description }, handleInputChange, reset ] = useForm({
        /*tiene que ser la misma key que le puse al input */
        description: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (description.trim().length <= 1 ) {
            return;
        };

        /* Nueva tarea que se enviará al reducer para que se modifique el estado y agregar la nueva tarea */
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

  return (
   <>
        <h4>Agregar tarea</h4>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input  
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
                onChange={handleInputChange}
                value={description}
            />
            <button type='submit' className='btn btn-outline-primary mt-1 btn-block'>Agregar</button>
        </form>
   </>
  )
}
