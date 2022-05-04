import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('tests in  <RealExampleRef />', () => { 
    /* Shallow: me sirve para evaluar el componente de manera aislada sin montar nigun otro componente */

    const wrapper = shallow( < RealExampleRef  />);
    test('should render correctly', () => { 
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
     })

     test('should show  <MultipleCustomHooks />', () => { 
        wrapper.find('.btn-primary').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
      })
 })