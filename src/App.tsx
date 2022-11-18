import React, {ReactElement} from 'react';
import FakeDBProvider from './pseudoStore/fakeDbContext';
import PrRouterProvider from './router/routerContext';
import RouterRouter from './router/RouterRouter';
import AuthProvider from './pseudoStore/authContext';

const App = (): ReactElement => {
    return (
        <FakeDBProvider>
            <AuthProvider>
                <PrRouterProvider>
                    <RouterRouter />
                </PrRouterProvider>
            </AuthProvider>
        </FakeDBProvider>
    );
};

export default App;
