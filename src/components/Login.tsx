import React, {FormEvent, ReactElement, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from '../pseudoStore/useAuth';

const Login = (): ReactElement => {
    const [role, setRole] = useState<string | undefined>();
    const {setAuthenticated, setRoles} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setAuthenticated(true);
        setRoles(role ? [role] : undefined);
        navigate(`/`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value={undefined}>no role</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
                <option value="superadmin">superadmin</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;
