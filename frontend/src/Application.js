import * as React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

class Application extends React.Component {
  render() {
    const routes = <Routes isAuthorized={false} />;

    return(
      <Router>
        <div className={'container'}>
          {routes}
        </div>
      </Router>
    );
  };
};

export default Application;
