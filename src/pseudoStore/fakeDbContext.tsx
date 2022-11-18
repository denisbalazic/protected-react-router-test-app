import React, {createContext, PropsWithChildren, ReactElement, useMemo, useState} from 'react';
import {seed} from './seed';

export const fakeDbContext = createContext<any[]>([]);

const FakeDBProvider = ({children}: PropsWithChildren): ReactElement => {
    const [fakeDB, setFakeDB] = useState(seed);
    const contextValue = useMemo(() => [fakeDB, setFakeDB], [fakeDB, setFakeDB]);

    return <fakeDbContext.Provider value={contextValue}>{children}</fakeDbContext.Provider>;
};

export default FakeDBProvider;
