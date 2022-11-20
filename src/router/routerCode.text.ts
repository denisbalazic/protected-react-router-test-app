export const simpleRouterCode = `<BrowserRouter>
    <Routes authenticated={authenticated} notAuthenticatedRoute="/login" notAuthenticatedAction={notAuthenticatedAction}>
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
                <Route path=":catId/edit" element={<EditCatForm />} />
                <Route path="new" element={<NewCatForm />} />
            </Route>
            <Route isPrivate path="dragon" element={<Dragon />} />
            <Route path="login" element={<Login />} />
        </Route>
    </Routes>
</BrowserRouter>`;

export const rolesRouterCode = `<BrowserRouter>
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
                <Route roles={['user', 'admin', 'superadmin']} path=":dogId/edit" element={<EditDogForm />} />
                <Route roles={['user', 'admin', 'superadmin']} path="new" element={<NewDogForm />} />
            </Route>
            <Route roles={['user', 'admin', 'superadmin']} path="cats" element={<Cats />}>
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
</BrowserRouter>`;

export const combinedRouterCode = `<BrowserRouter>
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
</BrowserRouter>`;

export const hierarchyRolesRouterCode = `<BrowserRouter>
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
            <Route path="router" element={<RouterPage />} />
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
</BrowserRouter>`;
