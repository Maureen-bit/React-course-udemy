import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroeById } from '../../helpers/getHeroById';

export const HeroScreen = () => {

  const { heroeId } = useParams();
  const navigate = useNavigate();

  /* El getHeroeById solo se ejecutará si cambia el id del heroe y no cuando cambie algún state externo */
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId] );

  const handleReturn = ( /*publisher*/ ) => {
    /* el -1 significa que vaya al historial anterior */
    navigate(-1);
    /* Mi solución */
    /* if (publisher === 'Marvel Comics') {
        navigate('/marvel');
    } else if (publisher === 'DC Comics') {
      navigate('/dc');
    } else {
      navigate('/');
    } */
  };

  if (!heroe) {
    return <Navigate to='/' />
  }

  const { id, superhero, alter_ego, publisher, first_appearance, characters } = heroe;

  const imagePath = `/assets/heroes/${id}.jpg`;

  return (
    <div className='row mt-5'>
      <h1>{superhero}</h1>
      <div className='col-4'>
        <img src={imagePath} alt={superhero} className='img-thumbnail animate__animated animate__pulse' />
      </div>
      <div className='col-8'>
          <ul className='list-group list-group-flush'>
             <li className='list-group-item'><b>Alter ego: </b> {alter_ego }</li>
             <li className='list-group-item'><b>Publisher: </b> {publisher }</li>
             <li className='list-group-item'><b>First appearance: </b> { first_appearance }</li>
          </ul>
          <h5 className='mt-3'>Characters</h5>
          <p>{characters}</p>
        <button
          className='btn btn-outline-info'
          onClick={() => handleReturn(/*publisher*/)}
        >
          Back
        </button>
      </div>
    </div>
  )
}
