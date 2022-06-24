import React from 'react';
import { Auth, Chat } from './pages';
import { connect } from "react-redux";
import { Routes, Route, Navigate } from 'react-router-dom';

const App = props => {
    const { isAuth } = props;
    return (
      <div className="wrapper">
          <Routes>
            <Route exact path="/*" element={<Auth />} />
            <Route path="/" element={isAuth ? <Chat /> : <Navigate to="/signin"/>} />
            <Route path="/dialog/:id" element={isAuth ? <Chat /> : <Navigate to="/signin"/>} />
          </Routes>
      </div>
    );
}

export default connect(({ user }) => ({isAuth: user.isAuth}))(App);
