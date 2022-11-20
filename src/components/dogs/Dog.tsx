import React, {ReactElement} from 'react';
import {Link, useParams} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const Dog = (): ReactElement => {
    const {dogId} = useParams();
    const {getDog} = useFakeDb();
    const dog = getDog(Number(dogId));
    return (
        <div className="card">
            <h3>{dog.name}</h3>
            <img src={dog.image} alt="" />
            <Link to={`/dogs/${dogId}/edit`}>Edit</Link>
        </div>
    );
};

export default Dog;
