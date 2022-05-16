import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../auth/authContext"
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../types/types";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
 }) )

describe('Tests in LoginScreen component', () => { 
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
                <LoginScreen />
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('It should render correctly', () => { 
        expect(wrapper).toMatchSnapshot();
     })

     test('It should run dispatch and navigation', () => { 
            const actionLogin = {
                type: types.login,
                payload: {
                  name: 'Maureen'
                }
            }
            wrapper.find('button').simulate('click');
            expect(mockDispatch).toHaveBeenCalledWith(actionLogin);
            expect(mockNavigate).toHaveBeenCalledWith('/marvel', {"replace": true});
            localStorage.setItem('lastPath', '/dc');
            wrapper.find('button').simulate('click');
            expect(mockNavigate).toHaveBeenCalledWith('/dc', {"replace": true});
      })
 })