import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import HistoryOutlined from '@mui/icons-material/HistoryOutlined';

function HeaderToolbar() {
  return (
    <Box
      component="div"
      sx={{
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
        sm: { height: '200px' },
        xs: { height: 'auto' },
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginBottom="25px"
      >
        <Grid item xs={4}>
          <Stack
            direction="column"
            textAlign="center"
            sx={{ height: '146', padding: '2px', margin: '1px ' }}
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
              variant="inset"
              orientation="vertical"
              light
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
  );
}

export default HeaderToolbar;
