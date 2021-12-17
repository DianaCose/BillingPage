import { Typography, Paper, Stack, Chip, Box } from '@mui/material';

function Invoice(props) {
  const COLORS = {
    ISSUED: '#64CEFB',
    PAID: '#7DBE00',
    OVERDUE: '#CF4520',
  };
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const getMonth = MONTHS[props.due.split("/")[1] - 1];

  const date = new Date(props.due);
  const currentDate = new Intl.DateTimeFormat(['ban', 'id']).format(date);

  return (
    <Paper 
      square
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '104px',
        width: '100%',
        maxWidth: '661px',
        cursor: 'pointer',
        border: `2px solid ${props.selected ? '#006EAD' : 'transparent'}`,
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
          Invoice {props.id}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 'bold' }}>
          {getMonth}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 16, opacity: '0.6' }}>
          Due on <strong>{currentDate}</strong>
        </Typography>
      </Stack>

      <Stack>
        <Chip
          size="small"
          label={props.status}
          sx={{
            backgroundColor: COLORS[props.status],
            marginTop: '1px',
            marginBottom: '2px',
            borderRadius: '30px 0 0 30px',
            color: '#FFFFFF',
          }}
        />
        <Typography
          variant="body1"
          sx={{ fontSize: 24, marginRight: '2', padding: '2px' }}
        >
          {props.amount}
          {'\u20AC'}
        </Typography>

        <Box sx={{ textAlign: 'right', paddingRight: '1px' }}>
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
