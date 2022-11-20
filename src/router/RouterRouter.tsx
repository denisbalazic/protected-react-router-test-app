import React, {ReactElement, useContext} from 'react';
import SimpleRouter from './SimpleRouter';
import {prRouterContext} from './routerContext';
import RolesRouter from './RolesRouter';
import HierarchyRolesRouter from './HierarchyRolesRouter';
import CombinedRouter from './CombinedRouter';

const RouterRouter = (): ReactElement | null => {
    const [prRouter] = useContext(prRouterContext);

    const getRouter = (router: string): ReactElement | null => {
        switch (router) {
            case 'Simple':
                return <SimpleRouter />;
            case 'Roles':
                return <RolesRouter />;
            case 'Combined':
                return <CombinedRouter />;
            case 'Hierarchy roles':
                return <HierarchyRolesRouter />;
            default:
                return null;
        }
    };

    return getRouter(prRouter);
};

export default RouterRouter;
