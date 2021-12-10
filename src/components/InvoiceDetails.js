import { Paper, Stack, Typography, Grid, Box, Divider } from '@mui/material';
import Invoices from './Invoices';
import ClearIcon from '@mui/icons-material/Clear';

function InvoiceDetails() {
  return (
    <Box
      component="div"
      sx={{
        background: '#DEE4E8',
        margin: '40px',
        maxWidth: '100%',
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        columnSpacing={{ sm: 3 }}
        sx={{
          justifyContent: 'space-around',

          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <Grid item>
          <Invoices />
        </Grid>

        <Grid item sx={{ marginTop: '60px' }}>
          <Paper
            sx={{
              width: '345px',
              maxHeight: '337px',
              padding: '10px',
              marginBottom: '70px',
            }}
          >
            <Stack direction="row" spacing={21} sx={{ marginBottom: '7px' }}>
              <Typography
                variant="subtitle1"
                sx={{ color: '#0AA5AB', fontSize: '14px', fontWeight: 'bold' }}
              >
                View invoice as PDF
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#32424E', fontSize: '14px', fontWeight: 'bold' }}
              >
                <ClearIcon />
              </Typography>
            </Stack>

            <Stack direction="row" spacing={21} sx={{ marginBottom: '25px' }}>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: 14, opacity: '0.4' }}
              >
                Invoice number <br /> 00584758832
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: 14, opacity: '0.4' }}
              >
                Paid on <br /> 21/10/2020
              </Typography>
            </Stack>

            <Stack direction="row" spacing={26} sx={{ marginBottom: '10px' }}>
              <Typography
                variant="body1"
                sx={{ fontSize: '14px', fontWeight: 'bold' }}
              >
                Plan details
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '14px', fontWeight: 'bold' }}
              >
                Amount
              </Typography>
            </Stack>

            <Stack direction="row" spacing={17} sx={{ marginBottom: '7px' }}>
              <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>
                ILIMITADA 30 <br /> 21/09/2020-21/10/2020
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: 16, opacity: '0.6' }}
              >
                49,99{'\u20AC'}
              </Typography>
            </Stack>
            <Divider />

            <Stack
              direction="row"
              spacing={21}
              sx={{ marginTop: '10px', marginBottom: '30px' }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 20, fontWeight: 'bold' }}
              >
                Sub Total
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: 20, fontWeight: 'bold' }}
              >
                49,99 {'\u20AC'}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InvoiceDetails;
