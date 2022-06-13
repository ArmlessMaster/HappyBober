import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { NavLink } from "react-router-dom";
import './AuthenticationPages.css';

export const LoginPage = () => {
    const auth = useContext(AuthContext);

    const { loading, request } = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    });


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form });
            auth.login(data.token, data.accountId);
        } catch (e) {

        }
    }

    return (
        <div className="wrapper">
            <div className="item">
                <h1>Sign up</h1>
                <div>
                    <input
                        placeholder="Enter your email"
                        id="email"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div >
                    <input
                        placeholder="Enter your password"
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <div >
                    <button disabled={loading} onClick={loginHandler}>Log in</button>
                    <NavLink to="/register">Create an account</NavLink>
                </div>

            </div>
        </div>
    );
};