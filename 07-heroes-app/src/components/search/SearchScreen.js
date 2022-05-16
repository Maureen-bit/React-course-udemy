import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroeByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../hero/HeroeCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  /* se utiliza para conocer la ruta actual */
  const location = useLocation();
  /* obtiene por separado cada parámetro de la consulta realizada */
  const { q = '' } = queryString.parse(location.search);

  const initialForm = {
    searchText: q
  };

  const [ formValues, handleInputChange ] = useForm(initialForm);
  const { searchText } = formValues;
  /* se utiliza un useMemo aqui para evitar que se está llamando la funcion de  getHeroeByName cada
  vez que cambiaba el searchText, es decir, con cada letra escrita en el input. Si no que se ejecutara y se
  memorice nuevamente el valor solo cuando cambie el query 'q'*/
  const heroesFiltered = useMemo(() => getHeroeByName(q), [q]);
  
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`)
  };
  
  return (
    <>
      <h1>Search Heroe!</h1>
      <hr/>

      <div className='row'>
        <div className='col-5'>
          <h4>Búscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input 
              type='text'
              placeholder='Búscar un héroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button 
              type='submit' 
              className='btn btn-outline-primary mt-1'
            > 
              Buscar...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          {
            (q === '') ? <div className='alert alert-info'> Búscar un héroe </div> :  
            ( heroesFiltered.length === 0 ) && <div className='alert alert-danger'> No hay resultados para: {q} </div>
          }
          {
            heroesFiltered.map(heroe => (
              <HeroeCard
                key={heroe.id}
                {...heroe}
              />
            ))
          }


        </div>
      </div>
    </>
  )
}
