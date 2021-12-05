import {
  Divider,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  makeStyles,
  CssBaseline,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PlayForWorkOutlinedIcon from '@material-ui/icons/PlayForWorkOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Billing
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Box
          component="div"
          style={{ backgroundColor: '#014656', color: 'white' }}
        >
          <p>Viasat</p>
          <Typography>Alex Garcia</Typography>
          <Typography>alex.garcia@gmail.com</Typography>
        </Box>

        <List>
          <ListItem>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="BILLING" />
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="ACCOUNT SETTINGS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="HELP FAQ" />
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem>
            <ListItemIcon>
              <PlayForWorkOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="LOG OUT" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
