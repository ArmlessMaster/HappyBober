import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './AdPage.css';
import { AdCard } from "../../components/AdCard/AdCard"
import { Loader } from "../../components/Loader/Loader";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";


export const AdPage = () => {

    const [ad, setAd] = useState(null);

    const adId = useParams().id;

    const { request, loading } = useHttp();

    const { token, accountId } = useContext(AuthContext);

    const getAd = useCallback(async () => {
        try {
            const fetched = await request(`/api/ads/${adId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setAd(fetched);
        } catch (e) {

        }
    }, [token, adId, request]);

    useEffect(() => {
        getAd()
    }, [getAd]);


    const handleFavourite = async () => {
        try {
            const data = await request('/api/favourites/addfavourite', 'POST', { accountId, adId }, {
                Authorization: `Bearer ${token}`
            });
            console.log(data);
        } catch (e) {

        }
    }

    if (loading) {
        return <Loader />
    }



    return (
        <>
            {!loading && ad && <AdCard ad={ad} handleFavourite={handleFavourite} />}
        </>
    );
};
