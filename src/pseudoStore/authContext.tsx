import React, {createContext, PropsWithChildren, ReactElement, useMemo, useState} from 'react';

export const authContext = createContext<any>(null);

const AuthProvider = ({children}: PropsWithChildren): ReactElement => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [roles, setRoles] = useState<string[] | undefined>(undefined);
    const contextValue = useMemo(
        () => ({authenticated, roles, setAuthenticated, setRoles}),
        [authenticated, roles, setAuthenticated, setRoles]
    );

    return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};

export default AuthProvider;
