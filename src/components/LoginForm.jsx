import React, {useState} from "react";
import {Outlet} from "react-router-dom";

function LoginForm({login, loginCredentials, setLoginCredentials}) {
    // const init = { username: "", password: "" };
    // const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }

    return (

        <div >

            <form onChange={onChange}
            >
                <h2>Login</h2>
                <br/>
                <input placeholder="User Name" id="username" />
                <br/>
                <input placeholder="Password" id="password" />
                <br/>
                <button onClick={performLogin}>Login</button>
            </form>

            <Outlet />
        </div>
    )

}

export default LoginForm;