import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <LoginScreen /> Component', () => { 
    const setUser = jest.fn();
    const param = {
        id: 123456, 
        name:"Maureen y Candy", 
        email: "maureen@gmail.com" 
    };
    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser: setUser
        }}>
            <LoginScreen />
        </UserContext.Provider> 
    );
    test('It should renders correctly', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('it should call setUser with an expected argument', () => { 
        /* paréntesis al final significa ejecución de la función que se encuentra en la propiedad del onClick */
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith(param);
      })
 })