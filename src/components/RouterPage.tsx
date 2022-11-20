import React, {ReactElement, useContext} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {prRouterContext} from '../router/routerContext';
import {combinedRouterCode, hierarchyRolesRouterCode, rolesRouterCode, simpleRouterCode} from '../router/routerCode.text';
import {ProtectedWrapper, useLastLocation} from '../protected-react-router/src';
import RouterSelect from './RouterSelect';

const RouterPage = (): ReactElement => {
    const [prRouter] = useContext(prRouterContext);
    const lastLocation = useLastLocation();

    const getRouterCode = (router: string): string => {
        switch (router) {
            case 'Simple':
                return simpleRouterCode;
            case 'Roles':
                return rolesRouterCode;
            case 'Combined':
                return combinedRouterCode;
            case 'Hierarchy roles':
                return hierarchyRolesRouterCode;
            default:
                return '';
        }
    };

    return (
        <div>
            <p>You can select which router will be used in app:</p>
            <RouterSelect />
            <SyntaxHighlighter language="jsx" style={docco}>
                {getRouterCode(prRouter)}
            </SyntaxHighlighter>
            <ProtectedWrapper isPrivate>
                <p>this text is for authenticated user only</p>
            </ProtectedWrapper>
            <ProtectedWrapper roles={['user']}>
                <p>this text is for user</p>
            </ProtectedWrapper>
            <ProtectedWrapper roles={['admin']}>
                <p>this text is for admin</p>
            </ProtectedWrapper>
            <ProtectedWrapper roles={['superadmin']}>
                <p>this text is for superadmin</p>
            </ProtectedWrapper>
            <ProtectedWrapper roles={['user', 'admin']}>
                <p>this text is for user and admin</p>
            </ProtectedWrapper>
            <p>{lastLocation?.pathname}</p>
        </div>
    );
};

export default RouterPage;
