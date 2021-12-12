import { Paper, Stack, Typography, Divider, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function InvoiceDetails() {
  return (
    <Paper
      sx={{
        width: '100%',
        width: { xs: '100vw', sm: '345px' },
        height: '100%',
        maxHeight: { xs: '100vh', sm: '337px' },
        padding: { xs: '0', sm: '10px' },
        marginBottom: { xs: '0', sm: '70px' },
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

      <Stack
        direction="row"
        spacing={21}
        sx={{
          marginBottom: '25px',
          background: {
            xs: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
            sm: '#FFFFFF',
          },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '14px', opacity: '0.4' }}
        >
          Invoice number <br /> 00584758832
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 14, opacity: '0.4' }}>
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

      <Stack direction="row" spacing={17} sx={{ color: '#32424E' }}>
        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>
          ILIMITADA 30
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={17}
        sx={{ marginBottom: '7px', color: '#32424E' }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '14px', opacity: '0.6' }}
        >
          21/09/2020-21/10/2020
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
          49,99{'\u20AC'}
        </Typography>
      </Stack>

      <Divider />

      <Stack
        direction="row"
        spacing={23}
        sx={{ marginTop: '10px', marginBottom: '30px', color: '#32424E' }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: '20px', fontWeight: 'bold' }}
        >
          Sub Total
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '20px', fontWeight: 'bold' }}
        >
          49,99{'\u20AC'}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default InvoiceDetails;
