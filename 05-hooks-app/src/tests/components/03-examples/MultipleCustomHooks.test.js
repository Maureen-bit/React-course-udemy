import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

/* Al tratar de usar el custom hook aquí en este archivo se realizará una implementación mockeada, este mock
evita las llamadas al hook, en esta prueba no importa como está implementado el useFerch porque ya se probó */
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Multiple custom hooks tests', () => { 

    test('should render correctly', () => { 
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow( < MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
     })

     test('should show information', () => { 
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
        useFetch.mockReturnValue({
            data: [{
                author: "Maureen",
                quote: "amo a Candy"
            }],
            loading: false,
            error: null
        })
        const wrapper = shallow( < MultipleCustomHooks />)
        /* esta alerta no debe existir porque ya hay información renderizada */
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('p').text().trim()).toBe('amo a Candy');
        expect(wrapper.find('footer').text().trim()).toBe('Maureen');
      })
 })