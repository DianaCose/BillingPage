import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { drawerWidth } from './Sidebar';

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        height: '280px',
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
      }}
    >
      <Toolbar
        sx={{
          height: 80,
        }}
      >
        <IconButton
          edge="start"
          sx={{ color: '#ffff', display: { sm: 'none', xs: 'block' } }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: '#ffff',
            display: { xs: 'none', sm: 'block', fontWeight: 'bold', fontSize:'24px' },
          }}
        >
          Billing
        </Typography>
      </Toolbar>
      <Toolbar>
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Stack textAlign="center">
              <Typography variant="h6">Account balance</Typography>
              <Typography variant="h3">174,97</Typography>
              <Typography variant="subtitle1">
                Next invoice will be issued on 21/11/2020
              </Typography>
            </Stack>
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Grid item sx={{ marginRight: '2px' }}>
              <Typography>Item 1</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
              <Typography>Item 2</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
