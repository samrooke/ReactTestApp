import React, { useState } from 'react';
import UserRepository from '../../services/repositories/user/UserRepository';
import { useSessionState } from '../../services/session/context/SessionContext';
import EnumSessionActionTypes from '../../services/session/EnumSessionActionTypes';

interface ILoginModel {
    username: string;
    password: string;
}

class LoginModel implements ILoginModel {
    public username: string = "";
    public password: string = "";
};

const Login: React.FC = () => {
    const [ userState, setUserState ] = useState(new LoginModel());
    const { dispatch } = useSessionState();

    const setValue = (attribute: string, value: string) => {
        setUserState({...userState, [attribute]: value});
    }

    const attemptLogin = () => {
        const userRepository = new UserRepository();
        userRepository.login(userState.username, userState.password)
            .then((data: any) => {
                dispatch({ type: EnumSessionActionTypes.UPDATE, state: { user: data.entity } });
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="login">
            <label>Username</label>
            <input
                type="text"
                value={userState.username}
                onChange={(e) => setValue("username", e.target.value)}
            />
            <label>Password</label>
            <input
                type="password"
                value={userState.password}
                onChange={(e) => setValue("password", e.target.value)}
            />
            <button onClick={() => attemptLogin()}>Submit</button>
        </div>
    );
}

export default Login;