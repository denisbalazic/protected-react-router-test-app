import React, {ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {PrRoute as Route, PrRoutes as Routes} from '../protected-react-router/src';
import Home from '../components/Home';
import NewDogForm from '../components/dogs/NewDogForm';
import EditDogForm from '../components/dogs/EditDogForm';
import Dog from '../components/dogs/Dog';
import Dogs from '../components/dogs/Dogs';
import About from '../components/About';
import Login from '../components/Login';
import Layout from '../components/Layout';
import DogIndex from '../components/dogs/DogIndex';
import Cats from '../components/cats/Cats';
import NewCatForm from '../components/cats/NewCatForm';
import EditCatForm from '../components/cats/EditCatForm';
import CatIndex from '../components/cats/CatIndex';
import Cat from '../components/cats/Cat';
import useAuth from '../pseudoStore/useAuth';
import NotAuthorized from '../components/NotAuthorized';
import Dragon from '../components/Dragon';

const HierarchyRolesRouter = (): ReactElement => {
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
                rolesHierarchy={['user', 'admin', 'superadmin']}
                notAuthenticatedRoute="/login"
                notAuthenticatedAction={notAuthenticatedAction}
                notAuthorizedRoute="/notAuthorized"
                notAuthorizedAction={notAuthorizedAction}
            >
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dogs" element={<Dogs />}>
                        <Route index element={<DogIndex />} />
                        <Route path=":dogId" element={<Dog />} />
                        <Route roles={['user']} path=":dogId/edit" element={<EditDogForm />} />
                        <Route roles={['user']} path="new" element={<NewDogForm />} />
                    </Route>
                    <Route roles={['user']} path="cats" element={<Cats />}>
                        <Route index element={<CatIndex />} />
                        <Route path=":catId" element={<Cat />} />
                        <Route roles={['admin']} path=":catId/edit" element={<EditCatForm />} />
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

export default HierarchyRolesRouter;
