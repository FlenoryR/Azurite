import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext } from '../../../context/AuthContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#242424'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    }
}));

const Header = () => {
    const classes = useStyles();
    const auth = useContext(AuthContext);

    const handleExit = () => {
        auth.logout();
    };

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar} color={'#e0e0e0'}>
                <Toolbar>
                    <Typography variant='h5' className={classes.title}>
                        Azurite
                    </Typography>
                    <IconButton color='inherit' onClick={handleExit}>
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
