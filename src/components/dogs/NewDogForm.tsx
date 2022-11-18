import React, {FormEvent, ReactElement, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const NewDogForm = (): ReactElement => {
    const navigate = useNavigate();
    const [dogName, setDogName] = useState('');
    const {createDog} = useFakeDb();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const createdDogId = createDog({name: dogName});
        navigate(`/dogs/${createdDogId}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={dogName} onChange={(e) => setDogName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewDogForm;
