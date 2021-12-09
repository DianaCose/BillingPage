import { Stack } from '@mui/material';
import { Typography } from '@mui/system';
import Invoice from './Invoice';

function Invoices() {
  return (
    <Stack component="div">
      <Typography variant="h6" sx={{ fontSize: 16 }}>
        
        My invoices
      </Typography>
      <Invoice />
    </Stack>
  );
}
export default Invoices;