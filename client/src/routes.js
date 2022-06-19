import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdsPage } from './pages/AdsPage/AdsPage';
import { CreateAdPage } from './pages/CreateAdPage/CreateAdPage';
import { MainPage } from './pages/MainPage/MainPage';
import { AdPage } from './pages/AdPage/AdPage';
import { MyAdsPage } from './pages/MyAdsPage/MyAdsPage';
import { MyFavouritesPage } from './pages/MyFavouritesPage/MyFavouritesPage';
import { MyAccountPage } from './pages/MyAccountPage/MyAccountPage';
import { AccountPage } from './pages/AccountPage/AccountPage';

export const useRoutes = isAuthenticated => {
    return (
        <Routes>
            <Route path='/ads' exact element={<AdsPage />} />
            {isAuthenticated && <Route path='/createad' exact element={<CreateAdPage />} />}
            <Route path='/mainpage' exact element={<MainPage />} />
            {isAuthenticated && <Route path='/myads' exact element={<MyAdsPage />} />}
            {isAuthenticated && <Route path='/myfavourites' exact element={<MyFavouritesPage />} />}
            {isAuthenticated && <Route path='/myaccount' exact element={<MyAccountPage />} />}
            <Route path='/ad/:id' exact element={<AdPage />} />
            <Route path='/account/:id' exact element={<AccountPage />} />
            <Route path="/*" element={<Navigate replace to="/mainpage" />} />
        </Routes>
    )
}