import React, {FormEvent, ReactElement, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useFakeDb from '../../pseudoStore/useFakeDb';

const EditCatForm = (): ReactElement => {
    const {catId} = useParams();
    const navigate = useNavigate();
    const {editCat, getCat} = useFakeDb();
    const cat = getCat(Number(catId));
    const [catName, setCatName] = useState(cat.name);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        editCat({...cat, name: catName});
        navigate(`/cats/${Number(catId)}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={catName} onChange={(e) => setCatName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EditCatForm;
