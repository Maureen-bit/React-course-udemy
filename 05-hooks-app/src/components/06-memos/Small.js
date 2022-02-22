import React, { memo } from 'react'

export const Small = memo(({value}) => {
    /* Memo es una función de React que nos permite memorizar el estado del componente y solo lo actualiza
    o vuelve a renderizar hasta que alguna propiedad de dicho componente cambie, es decir, este componente no se va a volver
    a llamar / renderizar con cambios en propiedades del padre, sino solamente con el cambio en {value}
    para este caso como el value es el valor del counter, entonces cada vez que incrtemente ese valor 
    se llamará de nuevo este componente, de  lo contrario mostrará la versión memorizada cuando tenga que 
    redibujar algo */
    console.log('me están llamando!')
  return (
    <small> {value} </small> 
  )
})
