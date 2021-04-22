import { useState, useCallback, useEffect } from 'react';

export const useAuth = (callback, deps) => {
    const [authorizedUserToken, setUserToken] = useState(null);
    const [authorizedUserId, setUserId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const login = useCallback((jwtToken, id, firstName, lastName, email) => {
        setUserToken(jwtToken);
        setUserId(id);
        setName(`${firstName} ${lastName}`);
        setEmail(email);

        localStorage.setItem('userData', JSON.stringify({
            authorizedUserId: id, authorizedUserToken: jwtToken, firstName: firstName, lastName: lastName, email: email
        }));
    }, []);

    const logout = useCallback(() => {
        setUserToken(null);
        setUserId(null);

        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.authorizedUserToken) {
            login(
                userData.authorizedUserToken,
                userData.authorizedUserId,
                userData.firstName,
                userData.lastName,
                userData.email
            );
        }
    }, [login]);

    return { login, logout, authorizedUserToken, authorizedUserId, name, email };
}
