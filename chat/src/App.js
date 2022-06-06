import React from 'react';
import { Auth, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/*" element={<Auth />} />
        <Route exact path="/im" element={<Home />} />
      </Routes>      
    </div>
  );
}

export default App;
