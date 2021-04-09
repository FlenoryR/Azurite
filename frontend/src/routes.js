import * as React from 'react';
import LoginPage from './pages/LoginPage';
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
                <Route path='/' exact>
                     <LoginPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        );
    };
};

export default Routes;
