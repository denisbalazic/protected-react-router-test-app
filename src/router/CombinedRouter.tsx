import React, {ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {PrRoute as Route, PrRoutes as Routes} from '../protected-react-router/src';
import Home from '../components/Home';
import NewDogForm from '../components/dogs/NewDogForm';
import EditDogForm from '../components/dogs/EditDogForm';
import Dog from '../components/dogs/Dog';
import Dogs from '../components/dogs/Dogs';
import RouterPage from '../components/RouterPage';
import Login from '../components/Login';
import Layout from '../components/Layout';
import DogIndex from '../components/dogs/DogIndex';
import Cats from '../components/cats/Cats';
import NewCatForm from '../components/cats/NewCatForm';
import EditCatForm from '../components/cats/EditCatForm';
import CatIndex from '../components/cats/CatIndex';
import Cat from '../components/cats/Cat';
import NotAuthorized from '../components/NotAuthorized';
import Dragon from '../components/Dragon';
import useAuth from '../pseudoStore/useAuth';

const SimpleRouter = (): ReactElement => {
    const {roles} = useAuth();

    const notAuthenticatedAction = (): void => {
        // do some stuff like clear state/reducer and toast a message
    };

    const notAuthorizedAction = (): void => {
        // do some stuff like clear state/reducer and toast a message
    };

    return (
        <BrowserRouter>
            <Routes
                userRoles={roles}
                notAuthenticatedRoute="/login"
                notAuthenticatedAction={notAuthenticatedAction}
                notAuthorizedRoute="/notAuthorized"
                notAuthorizedAction={notAuthorizedAction}
            >
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="router" element={<RouterPage />} />
                    <Route path="dogs" element={<Dogs />}>
                        <Route index element={<DogIndex />} />
                        <Route path=":dogId" element={<Dog />} />
                        <Route isPrivate path=":dogId/edit" element={<EditDogForm />} />
                        <Route isPrivate path="new" element={<NewDogForm />} />
                    </Route>
                    <Route isPrivate path="cats" element={<Cats />}>
                        <Route index element={<CatIndex />} />
                        <Route path=":catId" element={<Cat />} />
                        <Route roles={['admin', 'superadmin']} path=":catId/edit" element={<EditCatForm />} />
                        <Route roles={['superadmin']} path="new" element={<NewCatForm />} />
                    </Route>
                    <Route roles={['superadmin']} path="dragon" element={<Dragon />} />
                    <Route path="login" element={<Login />} />
                    <Route path="notAuthorized" element={<NotAuthorized />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default SimpleRouter;
