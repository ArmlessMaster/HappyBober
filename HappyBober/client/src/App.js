import React from 'react';
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Loader } from "./components/Loader/Loader";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  const { token, login, logout, accountId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider value={{
      token, login, logout, accountId, isAuthenticated
    }}>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <div>{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
