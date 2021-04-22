import * as React from 'react';

import Nav from '../components/Nav'
import {CssBaseline} from "@material-ui/core";

const MainPage = () => {
    return(
        <React.StrictMode>
            <CssBaseline />
            <Nav />
        </React.StrictMode>
    )
}

export default MainPage;