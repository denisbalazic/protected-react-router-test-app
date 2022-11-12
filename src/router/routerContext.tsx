import React, {createContext, PropsWithChildren, ReactElement, useMemo, useState} from 'react';

export const prRouterContext = createContext<any[]>([]);

const PrRouterProvider = ({children}: PropsWithChildren): ReactElement => {
    const [prRouter, setPrRouter] = useState('R1');
    const contextValue = useMemo(() => [prRouter, setPrRouter], [prRouter, setPrRouter]);

    return <prRouterContext.Provider value={contextValue}>{children}</prRouterContext.Provider>;
};

export default PrRouterProvider;
