import { shallow } from 'enzyme';
import React from 'react';
import { HookApp } from '../HookApp';

describe('Test custom hook <HookApp />', () => {
    test('render <HookApp />', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
})