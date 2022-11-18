import React, {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import RouterSelect from './RouterSelect';
import useAuth from '../pseudoStore/useAuth';

const Navigation = (): ReactElement => {
    const {authenticated, roles, setAuthenticated, setRoles} = useAuth();
    const handleLogout = (): void => {
        setAuthenticated(false);
        setRoles(undefined);
    };

    return (
        <div className="navigation">
            <NavLink to="/" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                Home
            </NavLink>
            <NavLink to="/about" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                About
            </NavLink>
            <NavLink to="/dogs" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                Dogs
            </NavLink>
            <NavLink to="/cats" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                Cats
            </NavLink>

            <RouterSelect />

            {authenticated || roles?.length ? (
                <>
                    <div className="navlink" style={{display: 'flex'}}>
                        <p>Authed:</p>
                        {roles ? roles.map((role: string) => <p>{role}</p>) : 'no role'}
                    </div>
                    <button type="button" className="navlink" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <NavLink to="/login" end className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}>
                    Login
                </NavLink>
            )}
        </div>
    );
};

export default Navigation;
