import React from 'react';
import { mount, shallow } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <HomeScreen /> Component', () => { 
    const user = {
        name: 'Maureen',
        email: 'maureen@gmail.com'
    }
    const wrapper = mount(
        /* Provider: provee el contexto que se creo para que la prueba se ejecute correctamente */
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
        );
    test('It should renders correctly', () => { 
        expect(wrapper).toMatchSnapshot();
     });
 })