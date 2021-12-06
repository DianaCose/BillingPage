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
} from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PlayForWorkOutlinedIcon from '@material-ui/icons/PlayForWorkOutlined';

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    zindex: '-1',
    boxShadow: ".3em 0 .3em -.4em #888",
    width: drawerWidth,
    '& .MuiDrawer-paper': {
      height: 'calc(100vh - 60px)',
    },

  },
});

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer className={classes.drawer} variant="permanent" anchor="left">
      <Box
        component="div"
        style={{
          backgroundColor: '#014656',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          height: 80,
        }}
      >
        <Typography variant="caption">Viasat</Typography>
        <Typography variant="h6">Alex Garcia</Typography>
        <Typography variant="body2">alex.garcia@gmail.com</Typography>
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
  );
};

export default Sidebar;
