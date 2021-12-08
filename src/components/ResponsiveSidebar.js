import {
  CssBaseline,
  Toolbar,
  Box,
  Drawer,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
  ContactSupportOutlined,
  PowerSettingsNewOutlined,
} from '@mui/icons-material';

const drawerWidth = 240;

function ResponsiveSidebar() {
  const drawer = (
    <div>
      <Toolbar
        sx={{
          backgroundColor: '#014656',
          color: '#ffff',
          display: 'flex',
          flexDirection: 'column',
          height: 80,
        }}
      >
        <Typography variant="caption">Viasat</Typography>
        <Typography variant="h6">Alex Garcia</Typography>
        <Typography variant="body2">alex.garcia@gmail.com</Typography>
      </Toolbar>

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
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '14px',
            fontWeight: '700',
            color: '#32424E',
            backgroundColor: '#FFFFFF',
            boxShadow: '.3em 0 .3em -.4em #888',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              height: 'calc(100vh - 60px)',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '14px',
            fontWeight: '700',
            color: '#32424E',
            backgroundColor: '#FFFFFF',
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              height: 'calc(100vh - 60px)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveSidebar;
