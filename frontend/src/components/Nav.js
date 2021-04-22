import * as React from 'react';
import {
    AppBar,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@material-ui/core';
import {
    AccountCircle,
    ExitToApp
} from '@material-ui/icons';

import '../css/MainPage.css';
import {AuthContext} from '../context/AuthContext';

const Nav = () => {
    const auth = React.useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExit = () => {
        auth.logout()
    };

    return(
        <React.Fragment>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography variant={'h6'} style={{flexGrow: 1}}>
                        Azurite
                    </Typography>
                    <IconButton color={'inherit'} onClick={handleClick}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        <div className={'user-menu'} style={{width: '240px'}}>
                            <div className={'user-information'}>
                                <Typography variant={'h6'} style={{fontSize: '1rem', fontWeight: 600}}>
                                    { auth.name }
                                </Typography>
                                <Typography variant={''} style={
                                    {
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                        color: 'rgb(99, 115, 129)'
                                    }
                                }>
                                    { auth.email }
                                </Typography>
                            </div>
                            <Divider />
                            <div className={'menu-item'}>
                                <MenuItem onClick={handleExit}>
                                    <ListItemIcon>
                                        <ExitToApp />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Выйти
                                    </ListItemText>
                                </MenuItem>
                            </div>
                        </div>
                    </Menu>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Nav;