import React, { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { NavLink } from "react-router-dom";

export const RegisterPage = () => {

    const [form, setForm] = useState({
        email: '', password: ''
    });

    const { loading, request } = useHttp();


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }



    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form });
            console.log(data);
        } catch (e) {

        }
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form });
            console.log(data);
        } catch (e) {

        }
    }

    return (
        <div className="wrapper">
            <div className="item">
                <h1>Sign in</h1>
                <div>
                    <input
                        placeholder="Enter your first name"
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">firstName</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Enter your last name"
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">lastName</label>
                </div>
                <div className="input-field">
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
                <div className="input-field">
                    <input
                        placeholder="Enter your phone"
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Phone</label>
                </div>
                <div className="input-field">
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
                <div>
                    <button disabled={loading} onClick={registerHandler}>Register</button>
                    <NavLink to="/login">I am already member</NavLink>
                </div>
            </div>
        </div>
    );
};
