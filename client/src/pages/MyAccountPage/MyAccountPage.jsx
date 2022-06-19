import React, { useCallback, useContext, useEffect, useState } from "react";
import { AccountCard } from "../../components/AccountCard/AccountCard";
import { Loader } from "../../components/Loader/Loader";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";


export const MyAccountPage = () => {

    const [account, setAccount] = useState(null);

    const { request, loading } = useHttp();

    const { token } = useContext(AuthContext);

    const getAccount = useCallback(async () => {
        try {

            const fetched = await request(`/api/account/getmyaccount`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setAccount(fetched);
        } catch (e) {

        }
    }, [token, request]);

    useEffect(() => {
        getAccount()
    }, [getAccount]);


    if (loading) {
        return <Loader />
    }



    return (
        <>
            {!loading && account && <AccountCard account={account} />}
        </>
    );
};
