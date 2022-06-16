import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";

export const Authentication = () => {
    const auth = useContext(AuthContext);

    const { loading, request } = useHttp();
    const [formLogin, setFormLogin] = useState({
        email: '', password: ''
    });
    const [formRegister, setFormRegister] = useState({
        email: '', password: '', firstName: '', lastName: '', phone: ''
    });

    const [router, setRouter] = useState('login');

    const changeHandlerLogin = event => {
        setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
    }
    const changeHandlerRegister = event => {
        setFormRegister({ ...formRegister, [event.target.name]: event.target.value });
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...formLogin });
            auth.login(data.token, data.accountId);
        } catch (e) {

        }
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...formRegister });
            console.log(data);
        } catch (e) {

        }
    }

    const [pointerEventsLogin, setPointerEventsLogin] = useState('all');

    const [pointerEventsRegister, setPointerEventsRegister] = useState('all');

    if (auth.isAuthenticated) {
        return (
            <h1>Thank you, you are logged in</h1>
        )
    }

    if (router === 'login') {
        return (
            <div className="wrapper" style={{ pointerEvents: pointerEventsLogin }}>
                <div className="item">
                    <h1>Sign up</h1>
                    <div>
                        <input
                            placeholder="Enter your email"
                            id="email"
                            type="text"
                            name="email"
                            value={formLogin.email}
                            onChange={changeHandlerLogin}
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div >
                        <input
                            placeholder="Enter your password"
                            id="password"
                            type="password"
                            name="password"
                            value={formLogin.password}
                            onChange={changeHandlerLogin}
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div >
                        <button disabled={loading} onClick={loginHandler} thi>Log in</button>
                        <label style={{ cursor: 'pointer' }} onClick={() => { setRouter('register'); setPointerEventsLogin('none'); setPointerEventsRegister('all') }}>Create an account</label>
                    </div>

                </div>
            </div>
        );
    }
    return (
        <div className="wrapper" style={{ pointerEvents: pointerEventsRegister }}>
            <div className="item">
                <h1>Sign in</h1>
                <div>
                    <input
                        placeholder="Enter your first name"
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formRegister.firstName}
                        onChange={changeHandlerRegister}
                    />
                    <label htmlFor="email">firstName</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Enter your last name"
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formRegister.lastName}
                        onChange={changeHandlerRegister}
                    />
                    <label htmlFor="email">lastName</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Enter your email"
                        id="email"
                        type="text"
                        name="email"
                        value={formRegister.email}
                        onChange={changeHandlerRegister}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Enter your phone"
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formRegister.phone}
                        onChange={changeHandlerRegister}
                    />
                    <label htmlFor="email">Phone</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Enter your password"
                        id="password"
                        type="password"
                        name="password"
                        value={formRegister.password}
                        onChange={changeHandlerRegister}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <button disabled={loading} onClick={registerHandler}>Register</button>
                    <label style={{ cursor: 'pointer' }} onClick={() => { setRouter('login'); setPointerEventsRegister('none'); setPointerEventsLogin('all') }}>I am already member</label>
                </div>
            </div>
        </div>
    );

};