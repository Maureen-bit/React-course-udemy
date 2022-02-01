import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas unitarias componente <GifGridItem />", () => {
    let title = "Gif One";
    let url = "www.gifone.com";
    const view = shallow(<GifGridItem title={title} url={url} />);
    test('Debe de mostrar el componente correctamente', () => {
      expect(view).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el title', () => {
      const p = view.find('p');
      expect(p.text().trim()).toBe(title);
    });

    test('Debe tener una imagen con alt y src de los props', () => {
      const image = view.find('img');
      // acceder a las propiedades de un elemento .props().propiedadBuscada o .props('propiedadBuscada')
      expect(image.props().src).toBe(url);
      expect(image.props().alt).toBe(title);
    });
    
    test('Debe tener el className: animate__heartBeat en el div', () => {
      const div = view.find('div');
      const classDiv  = div.props().className; // o también: div.props('className');
      /* Forma uno */
      expect(classDiv).toContain('animate__heartBeat');
      /* Forma dos */
      expect(classDiv.includes('animate__heartBeat')).toBe(true);
    });
})