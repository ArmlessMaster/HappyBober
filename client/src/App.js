import React from 'react';
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Loader } from "./components/Loader/Loader";
import { Topbar } from "./components/topbar/Topbar";
import { Footer } from "./components/footer/Footer";
import { connect } from "react-redux";
import "./App.scss"
import "./styles/index.scss"

const App = props => {
  const { token, login, logout, accountId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  const { isAuth } = props;
  if (!ready) {
    return <Loader />
  }
  return (
    <>
      <AuthContext.Provider value={{
        token, login, logout, accountId, isAuthenticated
      }}>
        <BrowserRouter>
          <Topbar />
          <div>{routes}</div>
        </BrowserRouter>
      </AuthContext.Provider>
      <Footer></Footer>
    </>

  );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
