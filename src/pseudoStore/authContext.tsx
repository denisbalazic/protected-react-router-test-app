import React, {createContext, PropsWithChildren, ReactElement, useMemo, useState} from 'react';

export const authContext = createContext<any[]>([]);

const AuthProvider = ({children}: PropsWithChildren): ReactElement => {
    const [user, setUser] = useState<boolean>(false);
    const contextValue = useMemo(() => [user, setUser], [user, setUser]);

    return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};

export default AuthProvider;
