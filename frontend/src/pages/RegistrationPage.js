import * as React from 'react';
import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHTTP } from '../hooks/http.hook';
// import { useMessage } from '../hooks/message.hook'; 

import '../css/RegistrationPage.css';

const RegistrationPage = () => {
    // const message = useMessage();
    const { loading, error, clearError, request } = useHTTP();
    const [form, setForm] = React.useState({
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    });

    // useEffect(() => {
    //     message(error);
    //     clearError();
    // }, [error, message, clearError]);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const data = await request('/api/auth/registration', 'POST', {...form});
        } catch (error) {
            console.log(`Ошибка! ${error.message}`)
        };
    };

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
                        Регистрация
                    </Typography>
                    <form className={'form-content'} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete={'fname'}
                                    name={'firstName'}
                                    variant={'outlined'}
                                    required
                                    fullWidth
                                    id={'firstName'}
                                    label={'Имя'}
                                    autoFocus
                                    onChange={
                                        (event) =>
                                            handleChange(event)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant={'outlined'}
                                    required
                                    fullWidth
                                    id={'lastName'}
                                    label={'Фамилия'}
                                    name={'lastName'}
                                    autoComplete={'lname'}
                                    onChange={
                                        (event) =>
                                            handleChange(event)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
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
                            <Grid item xs={12} sm={6}>
                                <TextField
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant={'outlined'}
                                    required
                                    fullWidth
                                    type={'password'}
                                    id={'repeat-password'}
                                    label={'Подтвердите пароль'}
                                    name={'repeat-password'}
                                    autoComplete={'repeat-password'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Я согласен(-на) на обработку персональнных данных."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant={'contained'}
                            color={'primary'}
                            style={{ margin: '24px 0 0 0' }}
                            onClick={() => handleSubmit()}
                            disabled={loading}
                            className={'submit-button'}
                        >
                            Регистрация
                        </Button>    
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default RegistrationPage;
