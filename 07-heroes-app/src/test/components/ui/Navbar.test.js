import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/NavBar"
import { types } from "../../../types/types";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ 
    /* Usar todo el paquete de react-router-dom para solo reescribir useNavigate*/
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
 }) )

describe('Tests in Navbar Component', () => { 
    
    const contextValue = {
        user: {
            logged: false,
            name: 'Maureen'
        },
        dispatch: mockDispatch
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue} >
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
        );

    test('It should render correctly', () => { 
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim() ).toBe('Maureen');            
     })

     test('It should call logout, navigate and dispatch functions', () => { 
            const actionLogout = {
                type: types.logout
            }
            wrapper.find('button').simulate('click');
            expect(mockDispatch).toHaveBeenCalledWith(actionLogout);
            expect(mockNavigate).toHaveBeenCalledWith('/login', {"replace": true});
      })
 })