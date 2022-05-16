import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

/*el nombre de mocl es clave para que la prueba no falle */
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ 
    /*nos permite usar todo el modulo de react router dom en vez de mockear todas sus funciones y hooks */
    ...jest.requireActual('react-router-dom'),
    /* de esta forma nos permite sobreescribir el hook que necesitamos probar, en este caso, useNavigate es un hook que retorna
    la funcióm navigate y esa es la que vamos a mockear con jest.fn */
    useNavigate: () => mockNavigate
 }) )

describe('Tests in <SearchScreen />', () => { 
    test('It should render correctly with default values', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim() ).toBe('Búscar un héroe');
     })

     test('It should render Batman card and show input with batman in value prop', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value') ).toBe('batman');
        expect(wrapper).toMatchSnapshot();
      })

    test('It should render an error if hero does not exist', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=candy']}>
                <SearchScreen />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value') ).toBe('candy');
        expect(wrapper.find('.alert-danger').text().trim() ).toBe('No hay resultados para: candy');
     })

     test('It should called navigate() to redirect to new page', () => { 
         /* test handleSearch -> que se llame navigate() */
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=candy']}>
                <SearchScreen />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', { target: { name: 'searchText', value: 'wonder' }});
        wrapper.find('form').prop('onSubmit')({  preventDefault: () => {} });
        expect(mockNavigate).toHaveBeenCalledWith('?q=wonder');
      })
 })