import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Tests in <TodoAdd />', () => { 
    const handleAddTodo = jest.fn();
    const wrapper = shallow(< TodoAdd handleAddTodo = {handleAddTodo} />);
    test('should renders correctly', () => { 
        expect(wrapper).toMatchSnapshot();
     })

    test('it should not call addTodo', () => { 
      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({ preventDefault(){} });
      expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })

    test('should call handleAddTodo with an argument', () => { 

      const value = 'aprender React';
      wrapper.find('input').simulate('change', {
        target: {
          value,
          name: 'description'
        }
      });

      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({ preventDefault(){} });
      expect(handleAddTodo).toHaveBeenCalledTimes(1);
      expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // {}
      expect(handleAddTodo).toHaveBeenCalledWith({
        id: expect.any(Number),
        desc: value,
        done: false
      })
     })
 });