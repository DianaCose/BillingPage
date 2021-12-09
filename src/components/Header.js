import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import HistoryOutlined from '@mui/icons-material/HistoryOutlined';
import { drawerWidth } from './Sidebar';
import Invoice from './Invoice';

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: '#DEE4E8',
      }}
    >
      <Toolbar
        sx={{
          height: 80,
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
          color: '#ffff',
        }}
      >
        <IconButton
          edge="start"
          sx={{ color: '#ffff', display: { sm: 'none', xs: 'block' } }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h1"
          sx={{
            color: '#ffff',
            display: {
              xs: 'none',
              sm: 'block',
              fontWeight: 'bold',
              fontSize: '24px',
            },
          }}
        >
          Billing
        </Typography>
      </Toolbar>

      <Box
        component="div"
        sx={{
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
          color: '#ffff',
          height: 200,
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <Stack
              direction="column"
              textAlign="center"
              sx={{ width: 'auto', height: '146', padding: 3 }}
            >
              <Typography variant="h5" sx={{ fontSize: '20px' }}>
                Account balance
              </Typography>
              <Typography variant="h2" sx={{ fontSize: '56px' }}>
                174,97{'\u20AC'}{' '}
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '14px' }}>
                Next invoice will be issued on
                <br />
                21/11/2020
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            sx={{
              width: 'auto',
              height: '146',
              backgroundColor: 'rgb(255,255,255, 0.2)',
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <Stack direction="row" spacing={3}>
              <Box
                component="div"
                textAlign="center"
                sx={{ width: 164, padding: 3 }}
              >
                <Typography>
                  <HistoryOutlined />
                </Typography>
                <Typography variant="caption">Overdue balance</Typography>
                <Typography variant="h6">124,98{'\u20AC'}</Typography>
              </Box>
              <Divider
                orientation="vertical"
                textAlign="center"
                light
                flexItem
                sx={{ borderColor: '#fff' }}
              />
              <Box
                component="div"
                textAlign="center"
                sx={{ padding: 3, width: 164 }}
              >
                <Typography>
                  <CalendarTodayOutlined />
                </Typography>
                <Typography variant="caption">Due on 21/10/2020</Typography>
                <Typography variant="h6">49,99{'\u20AC'}</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#DEE4E8',
          height: '100vh',
          width: '100wh',
          margin: '50px 0px 100px 100px',
        }}
      >
   
          <Typography
            variant="h6"
            sx={{
              fontSize: 16,
              fontWeight: '700',
              color: '#32424E',
              margin: '12.5px 0 10px 20.18px',
              alignSelf: 'start',
            }}
          >
            My invoices
          </Typography>
        

        <Grid container spacing={3}>
          <Grid item>
            <Invoice />
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
}

export default Header;
