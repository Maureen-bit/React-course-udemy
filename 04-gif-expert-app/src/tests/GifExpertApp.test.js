import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas unitarias en el componente <GifExpertApp />", () => {
    test('Debe renderizar correctamente el componente', () => {
        let view = shallow( <GifExpertApp />);
        expect(view).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['The Simpsons', 'Heidi'];
        let view = shallow( <GifExpertApp defaultCategories={categories} />);
        expect(view).toMatchSnapshot();
        expect(view.find('GifGrid').length).toBeGreaterThan(0);
    });
    
})