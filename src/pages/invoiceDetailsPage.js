import {
  Stack,
  Typography,
  Divider,
  Button,
  Container,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function InvoiceDetailsOnMobile() {
  return (
    <Container
      sx={{
        width: '100%',
        width: { xs: '100vw', sm: '345px' },
        height: '100%',
        maxHeight: { xs: '100vh', sm: '337px' },
        padding: { xs: '0', sm: '10px' },
        marginBottom: { xs: '0', sm: '70px' },
      }}
    >
      <Stack direction="row" spacing={1} sx={{ margin: '7px' }}>
        <IconButton edge="start" sx={{ color: 'black' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="subtitle1"
          sx={{ color: '#32424E', fontSize: '24px', fontWeight: 'bold' }}
        >
          October
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={55}
        sx={{
          padding: '10px 10px 0 10px',
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
          color: ' #FFFFFF',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>
          Invoice number
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>
          Paid on
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={49}
        sx={{
          marginBottom: '25px',
          padding: '0 10px 10px 10px',
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
          color: ' #FFFFFF',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          00584758832
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          21/10/2020
        </Typography>
      </Stack>

      <Stack direction="row" spacing={55} sx={{ marginBottom: '10px', padding:'10px',color: '#32424E'  }}>
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

      <Stack direction="row" spacing={45} sx={{ paddingLeft:'10px', paddingRight:'10px', color: '#32424E' }}>
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          ILIMITADA 30
        </Typography>
      </Stack>
      <Stack direction="row" spacing={44} sx={{ marginBottom: '7px', paddingLeft:'10px', color: '#32424E' }}>
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
         21/09/2020-21/10/2020
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '16px'}}>
          49,99{'\u20AC'}
        </Typography>
      </Stack>

      <Divider />

      <Stack
        direction="row"
        spacing={52}
        sx={{ marginTop: '20px', marginBottom: '20px', paddingLeft:'10px',color: '#32424E'  }}
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
      <Stack>
        <Button
          variant="outlined"
          sx={{
            display: { xs: 'block', sm: 'none' },
            margin: '30px',
            padding: '10px',
            borderRadius: '30px',
            color: '#465967',
            fontSize: '14px'
          }}
        >
          View invoice as a PDF
        </Button>
      </Stack>
    </Container>
  );
}

export default InvoiceDetailsOnMobile;
