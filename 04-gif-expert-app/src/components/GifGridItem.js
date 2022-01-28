import React from 'react';
import 'animate.css';

export const GifGridItem = ( {title, url} ) => {
  return (
    <div className='card animate__animated animate__heartBeat'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
};
