//reducer cambios de estado en respuesta a las acciones
//recibe el estado inicial y la acciones que se esta renderizando
export const todoReducer = ( initialState, action) => {

    //determinar que accion se esta realizando
    switch (action.type) {
        case '[TODO] addTodo':
            //debo regresar un nuevo estado evitando mutarlos, se utiliza el spread para espacir los elemenots del arreglo
            return [...initialState, action.payload];//en actio
            
        case '[TODO] removeTodo':
            return initialState.filter(todos => todos.id !== action.payload ); 

        case '[TODO] ToggleTodo':
            return initialState.map(todo => {
                if (todo.id === action.payload ) {//si es el mismo ID le camvio el toggle
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;//sino lo dejo como estaba
            });
        
        case '[TODO] countTodo':
            return initialState.length;
        
        default:
            return initialState;
    }
}