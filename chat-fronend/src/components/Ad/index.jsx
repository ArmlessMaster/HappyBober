import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';


import "./ad.scss";

const Ad = () => (

    <div className="chat__dialog-ad">
    <div className="chat__dialog-ad-info">
      <img src="https://memasno.ru/uploads/posts/2021-09/muzhik-s-batonom-i-sobakoj-chto-za-mem-i-fotozhaby-3.jpg" alt="" />
      <div className="chat__dialog-ad-text">
        <div className="chat__dialog-ad-description">
          Cable Sashka breed Jack Russell
        </div>
        <div className="chat__dialog-ad-price">
          40<span>₴</span>
        </div>
      </div>
    </div>
  </div>

);

export default Ad;