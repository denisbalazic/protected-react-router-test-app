import React, {ReactElement} from 'react';
import SimpleRouter from './router/SimpleRouter';
import FakeDBProvider from './pseudoStore/pseudoStoreContext';

const App = (): ReactElement => {
    return (
        <FakeDBProvider>
            <SimpleRouter />
        </FakeDBProvider>
    );
};

export default App;
