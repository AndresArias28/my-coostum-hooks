
import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [

]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init) //init para iniciar el reducer

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos || []))

    }, [todos])

    const handleNewTodo = (todo) => {
        //action que deseo envaiarle al reducer
        const action = {
            type: '[TODO] addTodo',  //etiqueta para identificarla en el 
            payload: todo
        }
        //despachar la accion
        dispatch(action);//envio la accio al reducer mediante el dispatch
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] removeTodo', 
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] ToggleTodo', 
            payload: id
        });
    }

    

    return {//regreso selectivo de la informacion, existen otras formas de regrear
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        //,
        

    }

}



    