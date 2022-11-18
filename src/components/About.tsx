import React, {ReactElement, useContext} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {prRouterContext} from '../router/routerContext';
import {combinedRouterCode, hierarchyRolesRouterCode, rolesRouterCode, simpleRouterCode} from '../router/routerCode.text';
import {ProtectedWrapper} from '../protected-react-router/src';

const About = (): ReactElement => {
    const [prRouter] = useContext(prRouterContext);

    const getRouterCode = (router: string): string => {
        switch (router) {
            case 'R1':
                return simpleRouterCode;
            case 'R2':
                return rolesRouterCode;
            case 'R3':
                return combinedRouterCode;
            case 'R4':
                return hierarchyRolesRouterCode;
            default:
                return '';
        }
    };

    return (
        <div>
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
        </div>
    );
};

export default About;
