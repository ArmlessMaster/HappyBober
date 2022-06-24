import React, { useEffect } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { connect } from 'react-redux';

import { Messages, ChatInput, Status, Sidebar, Ad } from "containers";
import { dialogsActions } from 'redux/actions';

import './chat.scss';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (<Component {...props} router={{ location, navigate, params }}/>);
  }
  return ComponentWithRouterProp;
}

const Chat = props => {
  const { setCurrentDialogId, user } = props;
  useEffect(() => {
     const dialogId = props.router.location.pathname.split('/').pop();
     setCurrentDialogId(dialogId);
  }, [props.router.location.pathname]);

  return (
    <section className="chat__wrapper">
      <div className="chat">
        <Sidebar />
        {user && (
        <div className="chat__dialog">
          <Status/>
          <Ad/>
          <Messages/>
          <div className="chat__dialog-input">
            <ChatInput/>
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default withRouter(connect(({ user }) => ({ user: user.data }), dialogsActions,)(Chat));