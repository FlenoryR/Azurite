import * as React from 'react';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Redirect, Route, Switch } from 'react-router-dom';

class Routes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: this.props.isAuthorized
        };
    };

    render() {
        if (this.state.isAuthorized) {
            return(
                <Switch>
                    
                </Switch>
            );
        };

        return (
            <Switch>
                <Route path='/authorization' exact>
                     <LoginPage />
                </Route>
                <Route path='/registration'>
                    <RegistrationPage />
                </Route>
                <Redirect to='/authorization' />
            </Switch>
        );
    };
};

export default Routes;
