import React from "react";
import {shallow} from "enzyme";
import '@testing-library/jest-dom'
import CounterApp from "../CounterApp";

describe('Pruebas en componente: CounterApp', () => {
    // se deja este valor por defecto para seguir viedo las opciones que ofrece shallow
    let view = shallow(<CounterApp />);
    beforeEach(() => {
        // Se ejecuta antes de cada prueba
        // se reinicia el componente al estado inicial antes de cada test
        view = shallow(<CounterApp />);
    })

  test('Debe de mostrar el componenten <CounterApp />> correctamente con valores por defecto', () => {
    expect(view).toMatchSnapshot();
  });
  
  test('Debe de mostrar el valor enviado por props al componenten <CounterApp />', () => {
    const value = 2;
    view = shallow(<CounterApp value={value} />);
    expect(view).toMatchSnapshot();
    const valorH2 = view.find('h2').contains(value);
    expect(valorH2).toBeTruthy();
  });

  test('Debe de incrementar con el botón +1', () => {
    // Simular evento click
    view.find('button').at(2).simulate('click');
    const valuePlusOne = view.find('h2').text().trim();
    expect(valuePlusOne).toBe('14');
  });

  test('Debe de decrementar con el botón -1', () => {
    // Simular evento click
    view.find('button').at(0).simulate('click');
    const valuePlusOne = view.find('h2').text().trim();
    /* Como primero se espicho el aumentar uno entonces estaría en 14 y cuando resto volvería 
    al 13, por eso espera el 13, para evitar estos casos usamos el beforeEach para reiniciar el 
    componente
    expect(valuePlusOne).toBe('13');
    */
    expect(valuePlusOne).toBe('12');
  });

  test('Debe de colocar el valor por defecto con el boton reset', () => {
    const value = 90;
    view = shallow(<CounterApp value={value} />);
    view.find('button').at(1).simulate('click');
    const reset = view.find('h2').text().trim();
    expect(reset).toBe('90');
  });
});
