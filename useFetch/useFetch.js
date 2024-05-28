 import { useEffect, useState } from "react";

const localCache = {

}; 

export const useFetch = (url) => {

  const [state, setState] = useState({ //state recibe un objeto 
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url])//cada vez que el url cambia, se dispara useEfect

  const setLoadingState = () => { //despues de hacer la peticion HTTP, se cambia el estado del hook a loading
    setState({
      data: null,
      isLoading: false,
      hasError: null,
      error: null,
    });
  }

  const getFetch = async () => {//decir que es una funcion asincrona
    
    if(localCache[url]){
      console.log('usando cache'); 
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: null,
        error: null

      });
      return;
    }
    setLoadingState();// li                                                 mpiar los atributos de pantalla

    const resp = await fetch(url);//empieza una peticcion HTTP a la url. La funcion asincrona se pausa hasta completar la peticion

    await new Promise(resolve => setTimeout(resolve, 1500));//sleep

    if (!resp.ok) {//validar error
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {            //enviar errores
          code: resp.status,
          message: resp.statusText,
        }
      });
      return; //finalizar el ciclo
    }

    const data = await resp.json();//extraer Json de la informacion que viene del servidor. Permite extraer un objeto JSON de la respuesta.
    setState({
        data: data,//TODA la data del api
        isLoading: false,
        hasError: false,
        error: null,
    })
    localCache[url] = data;
  };
//manejo del cache
    return {//regreso selectivo de la informacion, existen otras formas de regrear
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
    };
}
