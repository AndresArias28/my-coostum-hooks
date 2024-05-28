
import {useState} from 'react'

export const useForm = ( initialForm = {} ) => {//se asigna un valor inicial al fomulario, un objeto vacio -enviar al useForm un objeto vacio para recibir cualuiera

    const [formState, setformState] = useState( initialForm )
 
    const onInputChange = ({target}) => {//cuando hay cambios en el teclado, se activa y asigna value a la variable name
        const {name, value} = target;
        setformState({
          ...formState,
          [name] : value //propiedad computada entre corchetes
        });
    }

    const onResetForm = () => { //accion para resetear el darle click al boton
        setformState( initialForm )//se modifica el estado mediante la funcion 
  
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm, 
    }
}
