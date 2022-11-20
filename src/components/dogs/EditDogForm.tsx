import React, {FormEvent, ReactElement, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const EditDogForm = (): ReactElement => {
    const {dogId} = useParams();
    const navigate = useNavigate();
    const {editDog, getDog} = useFakeDb();
    const dog = getDog(Number(dogId));
    const [dogName, setDogName] = useState(dog.name);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        editDog({...dog, name: dogName});
        navigate(`/dogs/${Number(dogId)}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={dogName} onChange={(e) => setDogName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EditDogForm;
