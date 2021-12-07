import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
  ContactSupportOutlined,
  PowerSettingsNewOutlined,
} from '@mui/icons-material';

export const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        boxShadow: '.3em 0 .3em -.4em #888',
        '& .MuiDrawer-paper': {
          height: 'calc(100vh - 60px)',
        },
      }}
    >
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
        <Typography variant="caption" align="right">
          Viasat
        </Typography>
        <Typography variant="h6" align="left">
          Alex Garcia
        </Typography>
        <Typography variant="body2" align="left">
          alex.garcia@gmail.com
        </Typography>
      </Box>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary="HOME" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWalletOutlined />
          </ListItemIcon>
          <ListItemText primary="BILLING" />
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleOutlined />
          </ListItemIcon>
          <ListItemText primary="ACCOUNT SETTINGS" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportOutlined />
          </ListItemIcon>
          <ListItemText primary="HELP FAQ" />
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <PowerSettingsNewOutlined />
          </ListItemIcon>
          <ListItemText primary="LOG OUT" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
