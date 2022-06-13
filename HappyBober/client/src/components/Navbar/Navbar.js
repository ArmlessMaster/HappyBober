import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './Navbar.css';

export const Navbar = () => {

    const history = useNavigate();

    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history('/');
    }


    return (

        <nav>
            <div className='wrapper'>
                <span>HappyBober</span>
                <ul>
                    <li><NavLink to="/mainpage">Main Page</NavLink></li>
                    <li><NavLink to="/ads">Ads</NavLink></li>
                    <li><NavLink to="/createad">Create Ad</NavLink></li>
                    <li><NavLink to="/" onClick={logoutHandler}>Logout</NavLink></li>
                </ul>
            </div>
        </nav >

    )

}