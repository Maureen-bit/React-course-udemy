import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext";
import { PrivateRoutes } from "../../routers/PrivateRoutes"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <p>Mock de componente: Navigate</p>
 }) )

describe('Tests in PrivateRoutes Component', () => { 

    Storage.prototype.setItem = jest.fn();

    test('It should render component if user is authenticated and save it in localstorage', () => { 

        const contextValue = {
            user: {
                logged: true,
                name: 'Maureen'
            }
        }
    
        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/']}>
                   <PrivateRoutes>
                       <h1> Private component </h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper.find('h1').text().trim() ).toBe('Private component');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
     })

     test('It should block private component if user is not authenticated', () => { 

        const contextValue = {
            user: {
                logged: false
            }
        }
    
        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/']}>
                   <PrivateRoutes>
                       <h1> Private component </h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
        expect(wrapper.find('p').text().trim() ).toBe('Mock de componente: Navigate');
     })

 })