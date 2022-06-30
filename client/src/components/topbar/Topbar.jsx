import "./topbar.scss";
import Logo from "../../img/Logo.png";
import Account from "../../img/Account.svg";
import Favorite from "../../img/Favorite.svg";
import React, { useContext, useState, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Modal } from "../modal/Modal";
import { Authentication } from "../../components/authentication/Authentication";
import { useHttp } from '../../hooks/http.hook';

export const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => { setIsOpen(!isOpen); }
  const togglingOff = () => { setIsOpen(false); }
  const history = useNavigate();
  const auth = useContext(AuthContext);
  const logoutHandler = event => {
      event.preventDefault();
      auth.logout();
      history('/');
  }
  const { loading, request } = useHttp();
  const { token, accountId } = useContext(AuthContext);
  const [modalActive, setModalActive] = useState(false);
  const [filtered, setFiltredItems] = useState(null);
  const [complain, setComplain] = useState(true);

  const fetchDialogs = useCallback(async () => {
    try {
        const fetched = await request('/api/dialogs/dialogs', 'GET', null, {
            Authorization: `Bearer ${token}`
        });
      setFiltredItems(fetched.filter(dialog => dialog.lastMessage.readed === false && dialog.lastMessage.user._id !== accountId));
        } catch (e) {

        }
    }, [token, request]);

    useEffect(() => {
      fetchDialogs();
    }, [fetchDialogs]);
  
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 1);
  }
  
  return (

    <div className='topbar'>
    <div className="background"></div>
      <div className="wrapper" onClick={isOpen ? togglingOff : isOpen}>
      <div className="logo" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
        <NavLink to="/mainpage">
          <img className="logo__img" src={Logo} alt="" />
        </NavLink>
      </div>
      <ul className="menu-list">
        <li className="menu-list__item"><div className="menu-list__item-text" onClick={() => {window.scrollTo({top: 4500, behavior: "smooth"})}}><NavLink to="/mainpage">Contact</NavLink></div></li>
        <li className="menu-list__item"><div className="menu-list__item-text" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}><NavLink to="/rules">Rules</NavLink></div></li> 
        <li className="menu-list__item"><div className="menu-list__item-text" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}><NavLink to="/teampage">About</NavLink></div></li>
        <li className="menu-list__item"><div className="menu-list__item-text" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}><NavLink to="/ads">Shop</NavLink></div></li>
        <li className="menu-list__item"><div className="menu-list__item-text" onClick={() => {window.scrollTo({top: 2500, behavior: "smooth"})}}><NavLink to="/mainpage">Bilibober+</NavLink></div></li>
      </ul>
      <div className="right">
          <div className="favorite-button right-elem">
         {auth.accountId && <NavLink to="/myfavourites">
            <img className="favorite-img" src={Favorite} alt="" />
           </NavLink>}
         </div>
        
        <div className="account-button right-elem">
        </div>
        {auth.isAuthenticated &&<div className ="DropDownHeader"> <img className="account-img" src={Account} alt="" onClick={toggling}/></div>}
          
          {!auth.isAuthenticated && <div>          
            <button style={{cursor: 'pointer'}} onClick={() => setModalActive(true)} className="DropDownHeader-Enter">Sign In</button>
          </div>}
          {auth.isAuthenticated && <div className ="DropDownContainer" >
              {isOpen && (
                <div className ="DropDownListContainer">
                  <ul className = "DropDownList">
                  <li className = "ListItem"><NavLink to={`/account/${auth.accountId}`}>My account</NavLink></li>
                    <li className = "ListItem"><NavLink to="/myaccount">Options</NavLink></li>
                    <li className = "ListItem"><NavLink to="/myads">My Ads</NavLink></li>
                    <li className="ListItem"><NavLink to="/createad">Create Ad</NavLink></li>
                    {filtered.length === 0 ? <li className="ListItem"><NavLink to="/chat" onClick={refreshPage}>My chat</NavLink></li> : <li className = "ListItem"><NavLink to="/chat" onClick={refreshPage}>My chat (new)</NavLink></li>}
                    <li className = "ListItem" style={{cursor: 'pointer'}} onClick={logoutHandler}>Exit</li>
                  </ul>
                </div>
              )}
          </div>}
      </div>
    </div>
    
    <Modal active={ modalActive} setActive={setModalActive} children={<Authentication></Authentication>}></Modal>
  </div>
  )
}