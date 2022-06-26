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
import { OtherUserAdsPage } from './pages/OtherUserAdsPage/OtherUserAdsPage';
import { MyAdPage } from './pages/MyAdPage/MyAdPage';
import { Chat } from './pages'
import { LoginForm, RegisterForm } from './modules';

export const useRoutes = isAuthenticated => {
    console.log(isAuthenticated)
    return (
        <Routes>
            <Route path='/ads' exact element={<AdsPage />} />
            {isAuthenticated && <Route path='/createad' exact element={<CreateAdPage />} />}
            <Route path='/mainpage' exact element={<MainPage />} />
            {isAuthenticated && <Route path='/myads' exact element={<MyAdsPage />} />}
            {isAuthenticated && <Route path='/myfavourites' exact element={<MyFavouritesPage />} />}
            {isAuthenticated && <Route path='/myaccount' exact element={<MyAccountPage />} />}
            <Route path='/ad/:id' exact element={<AdPage />} />
            <Route path='/ads/:accountname/:id' exact element={<OtherUserAdsPage />} />
            <Route path='/account/:id' exact element={<AccountPage />} />
            {isAuthenticated && <Route path='/editad/:id' exact element={<MyAdPage />} />}
            {isAuthenticated && <Route path='/chat' exact element={<Chat />} />}
            <Route path="/chat/:userid/:fullname/:adid" element={<Chat />} />
            <Route path="/dialog/:id" element={<Chat />} />
            <Route path='/ads/:accountname/:id' exact element={<OtherUserAdsPage />} />
            {/* <Route path='/signin' exact element={<LoginForm />} />
            <Route path='/signup' exact element={<RegisterForm />} /> */}
            <Route path='/account/:id' exact element={<AccountPage />} />
            <Route path="/*" element={<Navigate replace to="/mainpage" />} />
        </Routes>
    )
}