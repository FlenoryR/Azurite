import * as React from 'react';

import Nav from '../components/Nav'
import {Container, CssBaseline, Grid, Paper, Typography} from "@material-ui/core";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

const MainPage = () => {
    const auth = useContext(AuthContext);

    return(
        <React.StrictMode>
            <CssBaseline />
            <Nav />
            <main style={{marginTop: '40px'}}>
                <Container maxWidth='lg'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper
                                style=
                                    {
                                        {
                                            width: '900px',
                                            height: '300px',
                                            display: 'flex',
                                            borderRadius: '20px',
                                            background: '#6773e0'
                                        }
                                    }
                                elevation={0}
                            >
                                <div className={'content-container'} style={{margin: 'auto 0px auto 30px', width: '700px'}}>
                                    <Typography variant={'h5'} style={{fontWeight: 600, marginBottom: '8px'}}>
                                        Добро пожаловать,
                                        <br/>
                                        { auth.name }
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3}>
                            <Paper style={{width: '400px', height: '300px', borderRadius: '20px', background: '#6773e0'}} elevation={0}>

                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.StrictMode>
    )
}

export default MainPage;