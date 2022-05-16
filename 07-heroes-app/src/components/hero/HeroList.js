import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroList = ( { publisher } ) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher] );

  return (
    <div className='row rows-cols-1 row-cols-md-3  g-3 animate__animated animate__tada'>
           {
               heroes.map(heroe => (
                <HeroeCard 
                   key={heroe.id} 
                   {...heroe}
                  />
               ))
           }
    </div>
  )
}
