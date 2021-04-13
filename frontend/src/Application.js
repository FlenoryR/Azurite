import * as React from 'react';
import Routes from './Routes';
import { AuthContext } from './context/AuthContext'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';

const Application = () => {
  const { login, logout, authorizedUserToken, authorizedUserId } = useAuth();
  const isAuthorized=!authorizedUserToken;
  const routes = <Routes isAuthorized={isAuthorized} />;

  return(
    <AuthContext.Provider value={{
      login, logout, authorizedUserToken, authorizedUserId
    }}>
      <Router>
        <div className={'container'}>
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default Application;
