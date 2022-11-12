import React, {ReactElement, useContext} from 'react';
import SimpleRouter from './SimpleRouter';
import {prRouterContext} from './routerContext';
import RolesRouter from './RolesRouter';
import HierarchyRolesRouter from './HierarchyRolesRouter';

const RouterRouter = (): ReactElement | null => {
    const [prRouter] = useContext(prRouterContext);

    const getRouter = (router: string): ReactElement | null => {
        switch (router) {
            case 'R1':
                return <SimpleRouter />;
            case 'R2':
                return <RolesRouter />;
            case 'R3':
                return <HierarchyRolesRouter />;
            default:
                return null;
        }
    };

    return getRouter(prRouter);
};

export default RouterRouter;
