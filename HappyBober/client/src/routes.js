import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdsPage } from './pages/AdsPage/AdsPage';
import { LoginPage } from './pages/AuthenticationPage/LoginPage';
import { RegisterPage } from './pages/AuthenticationPage/RegisterPage';
import { CreateAdPage } from './pages/CreateAdPage/CreateAdPage';
import { MainPage } from './pages/MainPage/MainPage';
import { AdPage } from './pages/AdPage/AdPage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path='/ads' exact element={<AdsPage />} />
                <Route path='/createad' exact element={<CreateAdPage />} />
                <Route path='/mainpage' exact element={<MainPage />} />
                <Route path='/ad/:id' exact element={<AdPage />} />
                <Route path="/*" element={<Navigate replace to="/mainpage" />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/login' exact element={<LoginPage />} />
            <Route path='/register' exact element={<RegisterPage />} />
            <Route path="/*" element={<Navigate replace to="/login" />} />
        </Routes>
    )
}