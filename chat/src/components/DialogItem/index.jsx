import React from "react";
import classNames from "classnames";
import { Time, IconReaded } from "../";

import './dialogItem.scss';

const getAvatar = avatar => {
  if (avatar) {
    return (<img src="https://sun1.userapi.com/sun1-16/s/v1/ig2/ZaMa2f-gB3vIYwzSl2EMVxhdlJzraJVk6F0XUY2xiYZEG69d3nimpODP_pQNKkA5emNT-_evwP7pb_085n2ukEle.jpg?size=100x100&quality=95&crop=40,40,320,320&ava=1" alt="" />);
  } else {
    
  }
}; 

const DialogItem = ({ user, message, unreaded }) => (
  <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={ `${user.fullname} avatar` } /> */}
      {getAvatar("https://sun1.userapi.com/sun1-16/s/v1/ig2/ZaMa2f-gB3vIYwzSl2EMVxhdlJzraJVk6F0XUY2xiYZEG69d3nimpODP_pQNKkA5emNT-_evwP7pb_085n2ukEle.jpg?size=100x100&quality=95&crop=40,40,320,320&ava=1")}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Andrew Gragas</b>
        {/* <span><Time date={ new Date() }/></span> */}
        <span>13:03</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Hello, bro, it's me, Gragas
        </p>
        <IconReaded isMe={true} isReaded={ false }/>
        {unreaded > 0 && <div className="dialogs__item-info-bottom-count">
          { unreaded > 9 ? '+9' : unreaded }
        </div>}
      </div>
    </div>
  </div>
);

export default DialogItem;