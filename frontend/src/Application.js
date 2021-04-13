import * as React from 'react';
import Routes from './Routes';
import { AuthContext } from './context/AuthContext'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';

const Application = () => {
  const { login, logout, authorizedUserToken, authorizedUserId } = useAuth();
  const isAuthorized=!!authorizedUserToken;

  return(
    <AuthContext.Provider value={{
      login, logout, authorizedUserToken, authorizedUserId, isAuthorized
    }}>
      <Router>
        <div className={'container'}>
          { Routes(isAuthorized) }
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default Application;
