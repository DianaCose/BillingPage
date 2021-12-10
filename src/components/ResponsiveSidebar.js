import {
  Box,
  Drawer,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
  ContactSupportOutlined,
  PowerSettingsNewOutlined,
} from '@mui/icons-material';

export const drawerWidth = 241;

function ResponsiveSidebar() {
  const drawer = (
    <div>
      <Stack
        sx={{
          backgroundColor: '#014656',
          color: '#ffff',
          direction: 'column',
          height: 80,
          width: '100%',
        }}
      >
        <Typography
          variant="caption"
          sx={{ textAlign: 'right', marginRight: '5px' }}
        >
          Viasat
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '12px', marginLeft: '5px' }}
        >
          Alex Garcia
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: '12px', opacity: 0.8, marginLeft: '5px' }}
        >
          alex.garcia@gmail.com
        </Typography>
      </Stack>

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
    <Box
      sx={{
        display: 'flex',
        fontSize: '14px',
        fontWeight: '700',
        color: '#32424E',
        backgroundColor: '#FFFFFF',
        boxShadow: '.3em 0 .3em -.4em #888',
      }}
    >
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          sx={{
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
