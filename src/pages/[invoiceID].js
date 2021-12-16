import {
  Stack,
  Typography,
  Divider,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { invoiceData } from '../../InvoiceDatabase';
import { useRouter } from 'next/router';

function InvoiceDetailsPage() {
  const router = useRouter();
  const { invoiceID } = router.query;

  console.log(router.query);

  const invoice = invoiceData.filter(
    (invoice) => Number(invoiceID) === invoice.id
  )[0];

  console.log(invoiceData);
  console.log(invoice);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        padding: { xs: '0', md: '10px' },
        marginBottom: { xs: '0', md: '70px' },
      }}
    >
      <Stack direction="row" spacing={1} sx={{ margin: '7px' }}>
        <IconButton edge="start" sx={{ color: 'black' }} onClick={() => {
            router.back();
          }}>
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
        spacing={47}
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
        spacing={40}
        sx={{
          marginBottom: '25px',
          padding: '0 10px 10px 10px',
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
          color: ' #FFFFFF',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          {invoice.id}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          {invoice.due}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={50}
        sx={{ marginBottom: '10px', padding: '10px', color: '#32424E' }}
      >
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

      <Stack
        direction="row"
        spacing={45}
        sx={{ paddingLeft: '10px', paddingRight: '10px', color: '#32424E' }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          ILIMITADA 30
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={44}
        sx={{ marginBottom: '7px', paddingLeft: '10px', color: '#32424E' }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          {invoice.due}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
          {invoice.amount}{'\u20AC'}
        </Typography>
      </Stack>
      <Divider />

      <Stack
        direction="row"
        spacing={52}
        sx={{
          marginTop: '20px',
          marginBottom: '20px',
          paddingLeft: '10px',
          color: '#32424E',
        }}
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
          {invoice.amount}{'\u20AC'}
        </Typography>
      </Stack>

      <Stack>
        <Button
          variant="outlined"
          sx={{
            display: { xs: 'block', md: 'none' },
            margin: '30px',
            padding: '10px',
            borderRadius: '30px',
            color: '#465967',
            fontSize: '14px',
          }}
        >
          View invoice as a PDF
        </Button>
      </Stack>
    </Box>
  );
}

export default InvoiceDetailsPage;
