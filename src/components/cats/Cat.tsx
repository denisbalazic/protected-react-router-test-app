import React, {ReactElement} from 'react';
import {Link, useParams} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const Cat = (): ReactElement => {
    const {catId} = useParams();
    const {getCat} = useFakeDb();
    const cat = getCat(Number(catId));
    return (
        <div className="card">
            <h3>{cat.name}</h3>
            <img src={cat.image} alt="" />
            <Link to={`/cats/${catId}/edit`}>Edit</Link>
        </div>
    );
};

export default Cat;
