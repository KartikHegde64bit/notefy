// Routes.js
import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import LoginHandler from './js/LoginHandler.js';
import Home from './js/Home.js';

function AppRouter({ token }) {
  return (
        <Routes>
            <Route exact path="/" element={token ? <Navigate to="/home" /> : <LoginHandler />}/>
            <Route path="/home" element = {token ? <Home /> : <Navigate to="/" />}/>
        </Routes>
  );
}

export default AppRouter;
