import "./topbar.scss";
import Logo from "../../img/Logo.png";
import OpenLanguage from "../../img/Open language.svg";
import Account from "../../img/Account.svg";
import Favorite from "../../img/Favorite.svg";



export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="logo">
          <a href="#intro">
            <img className="logo__img" src={Logo} alt="" />
          </a>
        </div>
        <ul className="menu-list">
          <li className="menu-list__item">Contact</li>
          <li className="menu-list__item">Support</li>
          <li className="menu-list__item">About</li>
          <li className="menu-list__item">Shop</li>
          <li className="menu-list__item">Bilibober+</li>
        </ul>
        <div className="right">
          <div className="language-button right-elem">
            Eng
            <img className="language-img" src={OpenLanguage} alt="" />
          </div>
          <div className="favorite-button right-elem">
            <img className="favorite-img" src={Favorite} alt="" />
          </div>
          <div className="account-button right-elem">
            <img className="account-img" src={Account} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
