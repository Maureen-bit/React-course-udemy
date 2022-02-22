import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    const {counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({});
    /* !null = true, !!null = false  */
    /* Nos sirve para obtener datos o mediciones de algun elemento después de que se haya renderizado el HTML */

    const pageTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pageTag.current.getBoundingClientRect());
    }, [quote])
 
    return (
        <>
            <h1> Breaking bad </h1>
            <hr />
                    <blockquote className='blockquote text-center'>
                        <p className='mb-2' ref={pageTag} > {quote} </p>
                    </blockquote>
                    <pre>
                        {JSON.stringify(boxSize, null, 3)}
                    </pre>
            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote!
            </button>
        </>
    )
};