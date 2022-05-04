import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in <AppRouter /> Components', () => {
    const user = {
        name: 'Maureen',
        email: 'maureen@gmail.com'
    }
    const wrapper = mount( 
    <UserContext.Provider value={{user}}>
       <AppRouter />
    </UserContext.Provider>  );
    test('should first', () => { 
        expect(wrapper).toMatchSnapshot();
     })
 })