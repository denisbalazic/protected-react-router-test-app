import React, {ReactElement} from 'react';
import {Link, useParams} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const Cat = (): ReactElement => {
    const {catId} = useParams();
    const {getCat} = useFakeDb();
    const cat = getCat(Number(catId));
    return (
        <div>
            <p>{cat.name}</p>
            <Link to={`/cats/${catId}/edit`}>Edit</Link>
        </div>
    );
};

export default Cat;
