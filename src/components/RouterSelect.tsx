import React, {ChangeEvent, ReactElement, useContext} from 'react';
import {prRouterContext} from '../router/routerContext';

const RouterSelect = (): ReactElement => {
    const [prRouter, setPrRouter] = useContext(prRouterContext);

    const handleRouterChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setPrRouter(e.target.value);
    };

    return (
        <div style={{color: 'white'}}>
            <select value={prRouter} onChange={handleRouterChange}>
                <option value="R1">Simple Router</option>
                <option value="R2">Rules Router</option>
                <option value="R3">Hierarchy Rules Router</option>
            </select>
        </div>
    );
};

export default RouterSelect;
