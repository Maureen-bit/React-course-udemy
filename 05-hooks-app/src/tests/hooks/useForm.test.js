import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm"

describe('useForm hook tests', () => { 
    const initialForm = {
        name: 'Maureen',
        email: 'maureen@gmail.com'
    }
    const target = {
        name: 'name',
        value: 'Candy'
    };

    test('it should return default form values', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;
        expect(formValues).toStrictEqual(initialForm);
        expect( typeof handleInputChange).toBe('function');
        expect( typeof reset).toBe('function');
    });

    test('it should return new name in form values', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        act(() => {
            handleInputChange({target});
        });
        const [ formValues ] = result.current;
        expect(formValues.name).toEqual('Candy');
    });

    test('it should reset form values', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;
        act(() => {
            handleInputChange({target});
            reset();
        });
        const [ formValues ] = result.current;
        expect(formValues).toStrictEqual(initialForm);
    });   
 });