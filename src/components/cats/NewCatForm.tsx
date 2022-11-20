import React, {FormEvent, ReactElement, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const NewCatForm = (): ReactElement => {
    const navigate = useNavigate();
    const [catName, setCatName] = useState('');
    const {createCat} = useFakeDb();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const createdCatId = createCat({name: catName});
        navigate(`/cats/${createdCatId}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={catName} onChange={(e) => setCatName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewCatForm;
