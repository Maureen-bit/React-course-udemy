import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../dataTest/demoTodos';
import { act } from '@testing-library/react';

describe('Tests in <TodoApp /> component', () => { 
    const wrapper = shallow( <TodoApp/> );
    Storage.prototype.setItem = jest.fn(() => {});

    test('it should renders correctly', () => { 
        expect(wrapper).toMatchSnapshot();
     })

     /* This test is not working because an issue about compatibility with this version of some test libraries with 
     React. Mount line is breaking out the test */
     test('it should add a new TODO', () => { 
         /* mount: monta todo el componente y los hijos del componente además de renderizarlo completamente, 
         si tiene componentes hijos también se renderizaran*/
         const wrapper = mount(<TodoApp/>);
         act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
         })
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
      });

      test('it should delete a todo', () => { 
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodosList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
       });
 });
