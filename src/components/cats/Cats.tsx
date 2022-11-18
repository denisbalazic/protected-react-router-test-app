import React, {ReactElement} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const Cats = (): ReactElement => {
    const {getCats} = useFakeDb();
    const cats = getCats();

    return (
        <div className="main">
            <div className="sidebar">
                {cats.map((cat: any) => (
                    <NavLink to={`/cats/${cat.id}`}>{cat.name}</NavLink>
                ))}
                <Link to="/cats/new">Add New Cat</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Cats;
