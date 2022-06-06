import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classNames from "classnames";
import readedSvg from "assets/img/readed.svg";
import noreadedSvg from "assets/img/noreaded.svg";

import "./message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => (
    <div className={classNames("message", {"message--isme" : isMe}) }>
        <div className="message__content">
            {isMe && isReaded ? (<img className="message__icon-readed" src={readedSvg} alt="Readed icon" />) : (<img className="message__icon-readed message__icon-readed--no" src={noreadedSvg} alt="No readed icon" />)}
            <div className="message__avatar">
                <img src={avatar} alt={ `Avatar ${user.fullname}`} />
            </div>        
            <div className="message__info">
                <div className="message__bubble">
                    <p className="message__text">{ text }</p>
                </div>
                <div className="message__attachments">
                    {attachments && attachments.map(item => (
                        <div className="message__attachments-item">
                            <img src={item.url} alt={item.filename} />
                        </div>
                    ))}
                </div>
                <span className="message__date">
                    { formatDistanceToNow(new Date(date), { addSuffix: true }) }
                </span>
            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
};


export default Message;