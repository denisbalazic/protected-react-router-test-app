import {useContext} from 'react';
import {authContext} from './authContext';

const useAuth = () => {
    const [user, setUser] = useContext(authContext);

    const {authenticated, roles} = user;

    const setAuthenticated = (authenticated: boolean): void => setUser({...user, authenticated});
    const setRoles = (roles: string[] | undefined): void => setUser({...user, roles});

    return {authenticated, roles, setAuthenticated, setRoles};
};

export default useAuth;
