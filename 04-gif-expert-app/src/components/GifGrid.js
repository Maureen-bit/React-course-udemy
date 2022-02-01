import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifts } from '../hooks/useFetchGifs.js';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifts(category);

  return (
    <>
    <h3>{category}</h3>
   { loading && <p>Loading...</p>}
    <div className='card-grid'>
            {
                images.map( (image) => 
                    <GifGridItem
                        key={image.id}
                        /* Enviar propiedades del componente como propiedades independientes */
                        { ...image }
                />)
            }
    </div>
  </>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};