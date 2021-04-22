import * as React from 'react';
import MainPage from './pages/PanelPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = (isAuthorized) => {
    if (isAuthorized) {
        return(
            <Switch>
                <Route path='/' exact>
                    <MainPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path='/authorization'>
                 <LoginPage />
            </Route>
            <Route path='/registration'>
                <RegistrationPage />
            </Route>
            <Redirect to='/authorization' />
        </Switch>
    );
}

export default Routes;
