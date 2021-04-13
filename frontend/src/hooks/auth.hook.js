import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {
    const [authorizedUserToken, setUserToken] = useState(null);
    const [authorizedUserId, setUserId] = useState(null);

    const login = useCallback((jwtToken, id) => {
        setUserToken(jwtToken);
        setUserId(id);

        localStorage.setItem('userData', JSON.stringify({
            authorizedUserId: id, authorizedUserToken: jwtToken
        }));
    });

    const logout = useCallback(() => {
        setUserToken(null);
        setUserId(null);

        localStorage.removeItem('userData');
    });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.authorizedUserToken) {
            login(userData.authorizedUserToken, userData.authorizedUserId);
        }
    }, [login]);

    return { login, logout, authorizedUserToken, authorizedUserId };
}
