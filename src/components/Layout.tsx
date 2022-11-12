import React, {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from './Navigation';

const Layout = (): ReactElement => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};

export default Layout;
