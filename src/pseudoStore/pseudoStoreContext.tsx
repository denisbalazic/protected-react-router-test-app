import React, {createContext, PropsWithChildren, ReactElement, useMemo, useState} from 'react';
import {seed} from './seed';

export const pseudoStoreContext = createContext<any[]>([]);

const FakeDBProvider = ({children}: PropsWithChildren): ReactElement => {
    const [fakeDB, setFakeDB] = useState(seed);
    const contextValue = useMemo(() => [fakeDB, setFakeDB], [fakeDB, setFakeDB]);

    return <pseudoStoreContext.Provider value={contextValue}>{children}</pseudoStoreContext.Provider>;
};

export default FakeDBProvider;
