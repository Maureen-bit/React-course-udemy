/* Establecemos el estado inicial */
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

/* Creación del reducer */
const todoReducer  = (state = initialState, action) => {
    /* la accion es la que modifica el state */
    if (action?.type === 'agregar') {
        /* No se puede usar push porque ese modifica el objeto inicial entonces se destructura todo el arreglo y al final se agrega el
        nuevo objeto */
        return [...state, action.payload]
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 3,
    todo: 'Comprar huevos',
    done: false
}

/* Creación de la acción con los parámetros estándar, el tipo de acción: lo que se va a hacer (agregar, modificar o eliminar) y
payload: el nuevo estado */
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer( todos, agregarTodoAction );

console.log("🚀 ~ file: intro-reducer.js ~ line 17 ~ todos", todos)