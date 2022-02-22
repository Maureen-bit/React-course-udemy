import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const {counter, increment } = useCounter(1);
    const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    /* !null = true, !!null = false  */
 
    return (
        <>
            <h1> Breaking bad </h1>
            <hr />

            {loading  ? 
                (
                <div className='alert alert-info text-center'>
                    Loading...
                </div> 
                )
             :
                (
                    <blockquote className='blockquote text-center'>
                        <p className='mb-2'> {quote} </p>
                        <footer className='blockquote-footer' > {author} </footer>
                    </blockquote>
                )
            }

            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote!
            </button>
        </>
    )
};
