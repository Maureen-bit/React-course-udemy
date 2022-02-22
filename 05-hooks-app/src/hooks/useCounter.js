import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    /* Un custom hook se utiliza para centralizar lógica y poderla reutilizar en otro componente */
  const [counter, setCounter] = useState(initialState);

  const increment = ( ) => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(initialState);
  }

  return {
      counter,
      increment,
      decrement,
      reset
  }
};
