import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/PanelPage/Header/Header';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Toolbar } from '@material-ui/core';
import { mainListItems } from '../components/PanelPage/Panel/ListItems';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
}));

const PanelPage = () => {
  const classes = useStyles();

  return(
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Drawer
            variant='permanent'
            className={classes.drawerPaper}
            classes={
              {
                paper: classes.drawerPaper
              }
            }
        >
          <Toolbar />
          <Divider />
          { mainListItems }
        </Drawer>
      </div>
  );
}

export default PanelPage;