import React from "react";
import { LoginForm, RegisterForm } from "modules";
import { Route, Routes } from "react-router-dom";
import './auth.scss';

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
        </Routes>     
      </div>
    </section>
  );
};

export default Auth;