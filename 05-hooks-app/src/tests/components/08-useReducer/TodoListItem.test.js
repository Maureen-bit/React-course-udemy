import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../dataTest/demoTodos';

describe('Tests in <TodoListItem />', () => { 
    const props = {
        todo: demoTodos[0],
        index: 0,
        handleToggle: jest.fn(),
        handleDelete: jest.fn()
      };

    const wrapper = shallow( < TodoListItem {...props} />);
    test('should render correctly', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('should call handleDelete function', () => { 
       wrapper.find('.btn-danger').simulate('click');
       expect(props.handleDelete).toHaveBeenCalledWith(props.todo.id);
      })

    test('should call handleToggle function', () => { 
        wrapper.find('p').simulate('click');
        expect(props.handleToggle).toHaveBeenCalledWith(props.todo.id);
    })

    test('should show text of P correctly', () => { 
        const {index, todo} = props;
        expect(wrapper.find('p').text()).toBe(`${index + 1}. ${todo.desc}`);
     })

     test('should have complete class if todo.done is true', () => { 
        const todo = props.todo;
        todo.done = true;
        const wrapper = shallow( < TodoListItem todo={todo} />);
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
      })
 })