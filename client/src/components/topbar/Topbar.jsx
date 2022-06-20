import "./topbar.scss";
import Logo from "../../img/Logo.png";
import OpenLanguage from "../../img/Open language.svg";
import Account from "../../img/Account.svg";
import Favorite from "../../img/Favorite.svg";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Modal } from "../modal/Modal";
import { Authentication } from "../../components/authentication/Authentication";

export const Topbar = () => {

  const history = useNavigate();

  const auth = useContext(AuthContext);

  const logoutHandler = event => {
      event.preventDefault();
      auth.logout();
      history('/');
  }

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="logo">
          <NavLink to="/mainpage">
            <img className="logo__img" src={Logo} alt="" />
          </NavLink>
        </div>
        <ul className="menu-list">
          <li className="menu-list__item"><div className="menu-list__item-text">Contact</div></li>
          <li className="menu-list__item"><div className="menu-list__item-text"><NavLink to="/myaccount">My Account</NavLink></div></li>
          <li className="menu-list__item"><div className="menu-list__item-text"><NavLink to="/myads">My Ads</NavLink></div></li>
          <li className="menu-list__item"><div className="menu-list__item-text"><NavLink to="/ads">Shop</NavLink></div></li>
          <li className="menu-list__item"><div className="menu-list__item-text"><NavLink to="/createad">Create Ad</NavLink></div></li>
        </ul>
        <div className="right">
          <div className="language-button right-elem">
            Eng
            <img className="language-img" src={OpenLanguage} alt="" />
          </div>
          <div className="favorite-button right-elem">
          {!auth && <NavLink to="/myfavourites">
            <img className="favorite-img" src={Favorite} alt="" />
            </NavLink>}
          </div>
          <div className="account-button right-elem">
            {/* <NavLink to="/" onClick={logoutHandler}>            
              <img className="account-img" src={Account} alt="" />
            </NavLink> */}         
            {!auth.isAuthenticated && <label style={{cursor: 'pointer'}} onClick={() => setModalActive(true)}>
              <img className="account-img" src={Account} alt="" />
            </label>}
            {auth.isAuthenticated && <label style={{cursor: 'pointer'}} onClick={logoutHandler}>
              <img className="account-img" src={Account} alt="" />
            </label>}
          </div>
        </div>
      </div>
      <Modal active={ modalActive} setActive={setModalActive} children={<Authentication></Authentication>}></Modal>
    </div>
  )
}

