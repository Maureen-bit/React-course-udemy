import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from "enzyme";
import '@testing-library/jest-dom'

describe('Pruebas en componente: PrimeraApp', () => {
  /* Si quiero que esta prueba sirva debo descomentar la linea de 
  import '@testing-library/jest-dom/extend-expect'; para que se 
  extiendan caracteristicas del expect
  
  test('Debe de mostrar el mensaje Hola Maureen', () => {
    const saludo = "Hola Maureen";
    const view = render(<PrimeraApp saludo={saludo}/>);
    // Pregunta si existe el saludo en el documento
    expect(view.getByText(saludo)).toBeInTheDocument();
  }); */

  test('Debe de mostra el componenten <PrimeraApp />> correctamente ', () => {
    const saludo = "Hola Maureen";
    const view = shallow(<PrimeraApp saludo={saludo}/>);
    /* Snapshot le toma una foto instantanea al componente y compara el componente y 
    el snapshot tomado, si no coinciden la prueba falla, esto puede ocurrir por algún cambio
    en el componente original*/
    expect(view).toMatchSnapshot();
  });
  
  test('Debe de mostra el subtitulo enviado por props al componenten <PrimeraApp /> ', () => {
    const saludo = "Hola Maureen";
    const subTitulo = "Soy el subtitulo de las props"
    const view = shallow(<PrimeraApp saludo={saludo} subtitulo={subTitulo}/>);
    /*Retorna el texto que tiene la etiqueta h2, si hay más d euna etiqueta devuelve un arreglo */
    const textoParrafo = view.find('h2').text();
    console.log("🚀 ~ file: PrimeraApp.test.js ~ line 33 ~ test ~ textoParrafo", textoParrafo);
    expect(textoParrafo).toBe(subTitulo);
  });
});
