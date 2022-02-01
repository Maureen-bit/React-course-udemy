import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifts } from "../../hooks/useFetchGifs";
/* Creación de mock para fingir/simular la llamada a este archivo y suponer o controlar la información que 
este useFetch va a responder*/
jest.mock('../../hooks/useFetchGifs');

describe("Pruebas unitarias componente <GifGrid />", () => {
    const category = "Heidi";
    test('Debe de mostrar el componente correctamente', () => {
        /* Cuando se llame en el componente retornará el valor */
        useFetchGifts.mockReturnValue(
            {
                /*Aqui dentro va el resultado que yo esperaría del useFetch, iniciamos con los valores que el componente tiene por defecto
                para renderizarse por primera vez, es decir, cuando no hay data aún */
                data: [],
                loading: true
            }
        );
        const view = shallow(<GifGrid category={category} />);
        expect(view).toMatchSnapshot();
    });    
    test('Debe de mostrar items cuando se cargan imagenes después de useFetchGifs', () => {
        const gifs = [{
            id: 'ABC123',
            title: 'The Simpsons Family',
            url: 'https://www.giftestthasimpsonsfamily.com'
        }]
        /* Simulación de que ya cargó data */
        useFetchGifts.mockReturnValue({
                data: gifs,
                loading: false
        });
        const view = shallow(<GifGrid category={category} />);
        /* Evaluación de existencia o no de elementos */
        /* 1. Como loading está en false entonces el elemento p no debe existir */ 
        /* Nota: en este caso el snapshot no es tan confiable ya que al actualizarlo puede pasar la prueba a pesar
        de que no haya data, por eso es mejor evaluar la existencia de los otros elementos */
        expect(view).toMatchSnapshot();
        expect(view.find('p').exists()).toBe(false);
        expect(view.find('GifGridItem').length).toBeGreaterThan(0);
    });
})