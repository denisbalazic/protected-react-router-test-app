import React, {ChangeEvent, ReactElement, useContext} from 'react';
import {prRouterContext} from '../router/routerContext';

const RouterSelect = (): ReactElement => {
    const [prRouter, setPrRouter] = useContext(prRouterContext);

    const handleRouterChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setPrRouter(e.target.value);
    };

    return (
        <div>
            <select value={prRouter} onChange={handleRouterChange}>
                <option value="Simple">Simple Router</option>
                <option value="Roles">Roles Router</option>
                <option value="Combined">Combined Router</option>
                <option value="Hierarchy roles">Hierarchy Roles Router</option>
            </select>
        </div>
    );
};

export default RouterSelect;
