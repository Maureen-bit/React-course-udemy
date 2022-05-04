import React from 'react';
import { shallow } from 'enzyme';
import { TodosList } from '../../../components/08-useReducer/TodosList';
import { demoTodos } from '../../dataTest/demoTodos';

describe('Tests in <TodosList /> component', () => { 

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow( 
    < TodosList 
          todos={demoTodos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
    />);

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
     });

     test('should has two < TodoListItem />', () => { 
         expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
         expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
      })
 });