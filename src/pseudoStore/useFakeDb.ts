import {useContext} from 'react';
import {fakeDbContext} from './fakeDbContext';

const useFakeDb = () => {
    const [db, setDb] = useContext(fakeDbContext);

    const createDog = (dog: any) => {
        const newIndex = db.dogs.length + 1;
        setDb({...db, dogs: [...db.dogs, {...dog, id: newIndex}]});
        return newIndex;
    };
    const editDog = (dog: any) => {
        setDb({...db, dogs: db.dogs.map((m: any) => (m.id === dog.id ? dog : m))});
    };
    const getDogs = () => {
        return db.dogs;
    };
    const getDog = (id: number) => {
        return db.dogs.find((m: any) => m.id === id);
    };

    const createCat = (cat: any) => {
        const newIndex = db.cats.length + 1;
        setDb({...db, cats: [...db.cats, {...cat, id: newIndex}]});
        return newIndex;
    };
    const editCat = (cat: any) => {
        setDb({...db, cats: db.cats.map((m: any) => (m.id === cat.id ? cat : m))});
    };
    const getCats = () => {
        return db.cats;
    };
    const getCat = (id: number) => {
        return db.cats.find((m: any) => m.id === id);
    };

    return {createDog, editDog, getDogs, getDog, createCat, editCat, getCats, getCat};
};

export default useFakeDb;
