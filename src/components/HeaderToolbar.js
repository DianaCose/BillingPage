import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import HistoryOutlined from '@mui/icons-material/HistoryOutlined';
import { useState } from 'react';

function HeaderToolbar(props) {
  const [display, setDisplay] = useState(true);

  const invoiceOverdue = () => {
    return props.invoiceData
      .map((invoice) => {
        return invoice.status === 'OVERDUE' ? invoice.amount : 0;
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };
  const invoiceIssued = () => {
    return props.invoiceData
      .map((invoice) => {
        return invoice.status === 'ISSUED' ? invoice.amount : 0;
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  const recentInvoice = () => {
    const indexLastIssuedInvoice = props.invoiceData
      .map((invoice) => invoice.status)
      .lastIndexOf('ISSUED');
    const date = new Date(props.invoiceData[indexLastIssuedInvoice].due);

    return new Intl.DateTimeFormat(['ban', 'id']).format(
      date.setMonth(date.getMonth())
    );
  };

  const nextMonth = () => {
    const indexLastIssuedInvoice = props.invoiceData
      .map((invoice) => invoice.status)
      .lastIndexOf('ISSUED');

    const date = new Date(props.invoiceData[indexLastIssuedInvoice].due);
    console.log('date', date);

    const currentMonth = date.getMonth();
    console.log('current month', currentMonth);

    return new Intl.DateTimeFormat(['ban', 'id']).format(
      date.setMonth(currentMonth + 1)
    );
  };

  console.log(nextMonth());
  console.log(props.invoiceData[0]);

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
                  return invoice.status === 'ISSUED' ||
                    invoice.status === 'OVERDUE'
                    ? invoice.amount
                    : 0;
                })
                .reduce(
                  (previousValue, currentValue) => previousValue + currentValue,
                  0
                )}
              {'\u20AC'}
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '14px' }}>
              Next invoice will be issued on <br />
              {nextMonth()}
            </Typography>
          </Stack>
        </Grid>
        {invoiceOverdue() !== 0 && invoiceIssued() !== 0 && (
          <Grid
            item
            sx={{
              width: 'auto',
              height: '100%',
              maxHeight: '146px',
              margin: '5px',
              backgroundColor: 'rgb(255,255,255, 0.2)',
              display: `${display}`,
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              sx={{
                paddingTop: '5px',
                paddingBottom: '5px',
                margin: '20px',
              }}
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
                <Typography variant="h6">
                  {invoiceOverdue()}
                  {'\u20AC'}
                </Typography>
              </Box>
              <div>
                <Divider
                  variant="inset"
                  orientation="vertical"
                  light
                  sx={{ margin: 0, borderColor: '#fff' }}
                />
              </div>
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
                <Typography variant="caption">
                  Due on {recentInvoice()}
                </Typography>
                <Typography variant="h6">
                  {invoiceIssued()}
                  {'\u20AC'}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default HeaderToolbar;
