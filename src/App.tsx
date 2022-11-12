import React, {ReactElement} from 'react';
import FakeDBProvider from './pseudoStore/pseudoStoreContext';
import PrRouterProvider from './router/routerContext';
import RouterRouter from './router/RouterRouter';

const App = (): ReactElement => {
    return (
        <FakeDBProvider>
            <PrRouterProvider>
                <RouterRouter />
            </PrRouterProvider>
        </FakeDBProvider>
    );
};

export default App;
