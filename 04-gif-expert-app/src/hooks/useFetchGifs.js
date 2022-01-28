import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGIF";

export const useFetchGifts = (category ) => {

    /* Custom hooks son diferentes a functional components, el custom hook se 
    encarga de hacer el trabajo pesado, de la logica fuerte, como obtener información de las Api y retornarlas al 
    functional component para que las muestre */
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category)
            .then( images => 
                setstate({
                    data: images,
                    loading: false
                })
            )
    }, [category]);

    return state;
}