import React, {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from './Navigation';

const Layout = (): ReactElement => {
    return (
        <div className="layout-container">
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Layout;
