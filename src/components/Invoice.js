import {
  Typography,
  Paper,
  Button,
  Grid,
  Stack,
  Chip,
  Box,
} from '@mui/material';

function handleClick() {
  return <div></div>;
}

function Invoice() {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '104px',
        width: '100%',
      }}
    >
      <Stack
        spacing={1}
        sx={{
          padding: '3px',
          margin: '8px 0 8px 8px',
          color: 'color: #32424E',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: 14, opacity: '0.4' }}>
          Invoice 00584758868
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 'bold' }}>
          October
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 16, opacity: '0.6' }}>
          Due on <strong>21/10/2020</strong>
        </Typography>
      </Stack>

      <Stack sx={{ padding: '2px' }}>
        <Chip
          size="small"
          label="Issued"
          sx={{
            backgroundColor: '#64CEFB',
            marginTop: '1px',
            marginBottom: '2px',
          }}
        />
        <Typography variant="body1" sx={{ fontSize: 24, marginRight: '2' }}>
          49,99{'\u20AC'}
        </Typography>

        <Box
          sx={{ textAlign: 'right', paddingRight: '1px', cursor: 'pointer' }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '14px', opacity: '0.6', color: '#32424E' }}
          >
            View
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default Invoice;
