import React, {ReactElement} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const Dogs = (): ReactElement => {
    const {getDogs} = useFakeDb();
    const dogs = getDogs();

    return (
        <div className="main">
            <div className="sidebar">
                {dogs.map((dog: any) => (
                    <NavLink to={`/dogs/${dog.id}`}>{dog.name}</NavLink>
                ))}
                <Link to="/dogs/new">Add New Dog</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Dogs;
