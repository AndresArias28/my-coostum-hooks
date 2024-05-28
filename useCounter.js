// se antepone use, para saber que es un hook como estandar de react
import { useState } from "react";

//este Hook recibe un numero entero y retorna un objeto con atributos para un contador
export const useCounter = ( valorInicial = 1) => {

    const  [counter, setCounter] = useState(valorInicial)

    const increment = ( value=1 ) => {
    setCounter(counter+value);
    }

    const decrement = ( value=1 ) => {
        if(counter === 0 ) return;
        setCounter(counter-value);
    }

    const reset = ( ) => {
        setCounter(valorInicial);
    }

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}