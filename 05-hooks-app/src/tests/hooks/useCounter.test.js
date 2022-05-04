import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Test custom hook <useCounter />', () => {
    test('it should return default values', () => {
        const { result } = renderHook( () => useCounter() )
        expect(result.current.counter).toBe(10);
        expect( typeof result.current.increment).toBe('function');
        expect( typeof result.current.decrement).toBe('function');
        expect( typeof result.current.reset).toBe('function');
    })

    test('it should return 130 in counter value', () => {
        const { result } = renderHook( () => useCounter(130) )
        expect(result.current.counter).toBe(130);
    })

    test('it should increment and decrement 1 counter value and reset value', () => {
        const { result } = renderHook( () => useCounter(130) )
        const { increment, decrement, reset } = result.current;
        /* act -> se utiliza cuando se quiere realizar alguna acción con las funciones que están dentro del hook */
        act(() => {
            increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(131);
        act(() => {
            decrement();
        });
        const { counter: counterDec } = result.current;
        expect(counterDec).toBe(129);
        act(() => {
            decrement();
            reset();
        });
        const { counter: counterReset } = result.current;
        expect(counterReset).toBe(130);
    });
})