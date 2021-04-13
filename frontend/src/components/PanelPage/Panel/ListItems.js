import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StorageIcon from '@material-ui/icons/Storage';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Главная' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary='Мой профиль' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <StorageIcon />
            </ListItemIcon>
            <ListItemText primary='Файлы' />
        </ListItem>
    </div>
);