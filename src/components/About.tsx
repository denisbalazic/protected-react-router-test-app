import React, {ReactElement} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const About = (): ReactElement => {
    const code = `<BrowserRouter>
    <Routes
        authenticated={user.authed}
        notAuthenticatedRoute={'/login'}
    >
        <Route path={"/"} element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route  path={"dogs"} element={<Dogs />} >
                <Route index element={<DogIndex />} />
                <Route path={":dogId"} element={<Dog />} />
                <Route path={":dogId/edit"} element={<EditDogForm />} />
                <Route path={"new"} element={<NewDogForm />} />
            </Route>
            <Route path={"cats"} element={<Cats />} >
                <Route index element={<CatIndex />} />
                <Route path={":catId"} element={<Cat />} />
                <Route path={":catId/edit"} element={<EditCatForm />} />
                <Route path={"new"} element={<NewCatForm />} />
            </Route>
            <Route path={"login"} element={<Login />} />
        </Route>
    </Routes>
</BrowserRouter>`;

    return (
        <div>
            <SyntaxHighlighter language="jsx" style={docco}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default About;
