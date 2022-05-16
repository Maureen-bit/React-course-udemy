import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes"

describe('Tests in DasboardRoutes', () => { 
    const contextValue = {
        user: {
            logged: false,
            name: 'Maureen'
        }
    }

    test('It should render correctly with marvel as component in "/" root path' , () => { 

        /* MemoryRouter: nos permite realizar pruebas como si estuvieramos en el navegador web */
        /*initialEntries: en donde se define el path inicial */
        const wrapper = mount(
        <AuthContext.Provider value={contextValue} >
            <MemoryRouter initialEntries={['/']}>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Maureen');
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Heroes');
     })

     test('It should render correctly with dc as component in "/dc"' , () => { 
        const wrapper = mount(
        <AuthContext.Provider value={contextValue} >
            <MemoryRouter initialEntries={['/dc']}>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DC Heroes');
     })
 })