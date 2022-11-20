import React, {ReactElement, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import useAuth from '../pseudoStore/useAuth';
import {prRouterContext} from '../router/routerContext';

const Navigation = (): ReactElement => {
    const {authenticated, roles, setAuthenticated, setRoles} = useAuth();
    const [prRouter] = useContext(prRouterContext);

    const handleLogout = (): void => {
        setAuthenticated(false);
        setRoles(undefined);
    };

    return (
        <div className="navigation">
            <div className="navigation-section">
                <NavLink to="/" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                    Home
                </NavLink>
                <NavLink to="/router" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                    Router
                </NavLink>
                <NavLink to="/dogs" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                    Dogs
                </NavLink>
                <NavLink to="/cats" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                    Cats
                </NavLink>
            </div>

            <div className="navigation-section">
                <p className="navlink">Router: {prRouter}</p>

                {authenticated || roles?.length ? (
                    <>
                        <div className="navlink" style={{display: 'flex'}}>
                            <p>Authenticated as:</p>
                            {roles ? roles.map((role: string) => <p>{role}</p>) : 'no role'}
                        </div>
                        <div className="navlink">
                            <button type="button" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <NavLink to="/login" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navigation;
