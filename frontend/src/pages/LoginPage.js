import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../css/LoginPage.css';
import { Link } from '@material-ui/core';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    };

    render() {
        return(
            <Grid container component={'main'} className={'registration-content'}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={'side-with-picture'} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={'side-with-form'}>
                        <Avatar className={'avatar'}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component={'h1'} variant={'h5'}>
                            Авторизация
                        </Typography>
                        <form className={'form-content'} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant={'outlined'}
                                        required
                                        fullWidth
                                        id={'email'}
                                        label={'Электронная почта'}
                                        name={'email'}
                                        autoComplete={'email'}
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant={'outlined'}
                                        required
                                        fullWidth
                                        type={'password'}
                                        id={'password'}
                                        label={'Пароль'}
                                        name={'password'}
                                        autoComplete={'password'}
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type={'submit'}
                                fullWidth
                                variant={'contained'}
                                color={'primary'}
                                style={{ margin: '24px 0 0 0' }}
                                className={'submit-button'}
                            >
                                Авторизоваться
                            </Button>    
                        </form>
                        <Grid item xs={12}>
                            <p className={'registration-message'}>
                                Нет профиля? <Link href={'/registration'}>Зарегистрируйтесь</Link> прямо сейчас!
                                </p>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        );
    };
};

export default LoginPage;
