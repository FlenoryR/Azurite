import * as React from 'react';
import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHTTP } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

import '../css/LoginPage.css';
import { Link } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const LoginPage = () => {
    const auth = useContext(AuthContext);
    const { loading, error, clearError, request } = useHTTP();
    const [emptyFields, setEmptyFields] = React.useState([]);
    const [form, setForm] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleLogin = async () => {
        try {
            const data = await request('/api/auth/authorization', 'POST', {...form});

            auth.login(
                data.authorizedUserToken,
                data.authorizedUserId,
                data.firstName,
                data.lastName,
                data.email
            );

            setEmptyFields(
                Object.keys(form).map((key) => {
                    if (!form[key]) return key;
                })
            );
        } catch (error) {
            console.log(`Ошибка! ${error.message}`)
        }
    }

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
                                    error={emptyFields.includes('email')}
                                    variant={'outlined'}
                                    required
                                    fullWidth
                                    id={'email'}
                                    label={'Электронная почта'}
                                    name={'email'}
                                    autoComplete={'email'}
                                    onChange={
                                        (event) =>
                                            handleChange(event)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={emptyFields.includes('password')}
                                    variant={'outlined'}
                                    required
                                    fullWidth
                                    type={'password'}
                                    id={'password'}
                                    label={'Пароль'}
                                    name={'password'}
                                    autoComplete={'password'}
                                    onChange={
                                        (event) =>
                                            handleChange(event)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant={'contained'}
                            color={'primary'}
                            style={{ margin: '24px 0 0 0' }}
                            onClick={() => handleLogin()}
                            className={'submit-button'}
                            disabled={loading}
                        >
                            Авторизоваться
                        </Button>    
                    </form>
                    <Grid item xs={12}>
                        <p className={'authorization-message'}>
                            Нет профиля? <Link href={'/registration'}>Зарегистрируйтесь</Link> прямо сейчас!
                        </p>
                    </Grid>
                    {error ? <Grid container>
                        <Alert
                            className={'alert-message'}
                            severity={'error'}
                        >
                            { error }
                        </Alert>
                    </Grid> : null}
                </div>
            </Grid>
        </Grid>
    );
}

export default LoginPage;
