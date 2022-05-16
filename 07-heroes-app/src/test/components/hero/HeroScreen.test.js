import { mount } from "enzyme"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
 }) )

describe('Tests in LoginScreen component', () => { 

    test('It should not render heroScreen if there is not a hero in the URL', () => { 

        const wrapper = mount(
         /* Es la ruta con la quiero hacer el test, en este caso, hero sin ningún argumento */
            <MemoryRouter initialEntries={['/heroe']}>
                <Routes>
                    { /* Ruta creada para probar el componente de Hero */ }
                    <Route path="/heroe" element={ <HeroScreen /> } />
                    { /* Ruta creada para probar cuando no existe un héroe en la URL y se redirige al root */ }
                    <Route path="/" element={ <h1> No hero page! </h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim() ).toBe('No hero page!');
     })

     test('It should render heroScreen if there is a hero in the URL', () => { 

        const wrapper = mount(
         /* Es la ruta con la quiero hacer el test, en este caso, hero con  /marvel-spiderman como argumento*/
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Routes>
                    <Route path="/heroe/:heroeId" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1> No hero page! </h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists() ).toBe(true);
     })

     test('It should navigate to previous screen', () => { 

        const wrapper = mount(
            /* Es la ruta con la quiero hacer el test, en este caso, hero con  /marvel-spiderman como argumento*/
               <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                   <Routes>
                       <Route path="/heroe/:heroeId" element={ <HeroScreen /> } />
                       <Route path="/" element={ <h1> No hero page! </h1> } />
                   </Routes>
               </MemoryRouter>
           );

           wrapper.find('button').simulate('click');
           expect(mockNavigate).toHaveBeenCalledWith(-1);
      })

      test('It should navigate to root path if hero in param doesn`t exist', () => { 

        const wrapper = mount(
            /* Es la ruta con la quiero hacer el test, en este caso, hero con  /marvel-spiderman como argumento*/
               <MemoryRouter initialEntries={['/heroe/marvel-spider-test']}>
                   <Routes>
                       <Route path="/heroe/:heroeId" element={ <HeroScreen /> } />
                       <Route path="/" element={ <h1> No hero page! </h1> } />
                   </Routes>
               </MemoryRouter>
           );

           expect(wrapper.find('h1').text().trim() ).toBe('No hero page!');
      })


 })