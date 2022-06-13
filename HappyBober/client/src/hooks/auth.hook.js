import { useState, useCallback, useEffect } from 'react';

const storageName = 'accountData';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [accountId, setAccountId] = useState(null);


    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setAccountId(id);
        localStorage.setItem(storageName, JSON.stringify({
            accountId: id, token: jwtToken
        }));
    }, []);


    const logout = useCallback(() => {
        setToken(null);
        setAccountId(null);
        localStorage.removeItem(storageName);
    }, []);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.token, data.accountId);
        }
        setReady(true);
    }, [login]);


    return {
        login, logout, token, accountId, ready
    };
}