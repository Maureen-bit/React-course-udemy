import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddcATEGORY.JS";

describe("Pruebas en el componente: <AddCategory />", () => {
    const setCategories = jest.fn();
    let view = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        /* Limpia los mocks de jest usados antes de cada prueba */
        jest.clearAllMocks();
        view = shallow(<AddCategory setCategories={setCategories} />);
    })

    const value = "Candy";
    const eventSimulate = {
        target:{
            value: value
        },
        preventDefault: () => {}
    };

    test('Debe de mostrarse correctamente', () => {
      expect(view).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
      const input = view.find('input');
      /* se envia el parámetro eventSimulate que simula el evento que se envía al cambiar el
      texto en el input y que se dispara en la función del onChange */
      input.simulate('change', eventSimulate);
      expect(view.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la información con submit', () => {
        view.find('form').simulate('submit', eventSimulate);
        /* Como no está cumpliendo la condiciones de tener un string mayor a 2 letras en el componente
        las funciones no debieron llamarse, por eso la cantidad de llamadas para la prueba debe ser 0 */
        expect(setCategories).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar el setCategories y limpiar el input', () => {
        /* Ejecucición de lo que está dentro del if del onSubmitForm en el componente */
        const input = view.find('input');
        input.simulate('change', eventSimulate);
        view.find('form').simulate('submit', eventSimulate);
        expect(setCategories).toHaveBeenCalledTimes(1);
        /* Evalúa que  el argumento de setCategories sea cualquier tipo de función */
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value')).toBe('');
    });
})