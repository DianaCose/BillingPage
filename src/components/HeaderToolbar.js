import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import HistoryOutlined from '@mui/icons-material/HistoryOutlined';


function HeaderToolbar(props) {
  return (
    <Box
      component="div"
      sx={{
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
        padding: '10px',
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginBottom="25px"
      >
        <Grid item xs={5} sx={{ margin: '5px' }}>
          <Stack
            direction="column"
            textAlign="center"
            sx={{
              height: '100%',
              minHeight: '146px',
              padding: '2px',
              margin: '1px ',
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '20px' }}>
              Account balance
            </Typography>
            <Typography variant="h2" sx={{ fontSize: '56px' }}>
              {props.invoiceData
                .map((invoice) => {
                  console.log('invoice', invoice);
                  return invoice.status === 'ISSUED' ||
                    invoice.status === 'OVERDUE'
                    ? invoice.amount
                    : 0;
                })
                .reduce(
                  (previousValue, currentValue) => previousValue + currentValue
                )}
              {'\u20AC'}
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '14px' }}>
              Next invoice will be issued on
              <br/>
              {props.due}
            </Typography>
          </Stack>
        </Grid>

        <Grid
          item
          sx={{
            width: 'auto',
            height: '100%',
            maxHeight: '146px',
            margin: '5px',
            backgroundColor: 'rgb(255,255,255, 0.2)',
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{ paddingTop: '5px', paddingBottom: '5px', margin: '20px' }}
          >
            <Box
              component="div"
              textAlign="center"
              sx={{
                width: '100%',
                minWidth: '164px',
                height: 'auto',
              }}
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
              sx={{
                width: '100%',
                minWidth: '164px',
                height: 'auto',
              }}
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
