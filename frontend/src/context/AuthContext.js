import { createContext } from 'react';

const noop = () => {};

export const AuthContext = createContext({
    authorizedUserToken: null,
    authorizedUserId: null,
    login: noop,
    logout: noop,
    isAuthorized: false,
    name: '',
    email: ''
});
