import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Tests in AppRouter', () => { 

    /* Creando el value del provider del contexto creado para esta APP */

    test('it should show login if user is not authenticated', () => { 
        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>
        );

        /*Si el usuario no está autenticado renderizará la página de Login */
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');
     })

     test('it should show marvel if user is authenticated', () => { 
        const contextValue = {
            user: {
                logged: true,
                name: 'Maureen'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>
        );

        /* Si el usuario está autenticado se renderizará el componente de navbar y por eso buscamos la clase */
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBeTruthy();
     })
 })