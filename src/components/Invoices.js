import { Box, List, ListItem, ListItemText } from '@mui/material';
import Invoice from './Invoice';

function Invoices() {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#DEE4E8',
      }}
      justifyContent="center"
      alignItems="center"
    >
      <List sx={{ width: '100%', maxWidth: '661px' }}>
        <ListItem>
          <ListItemText
            sx={{
              fontSize: 16,
              fontWeight: '700',
              color: '#32424E',
              width: 'auto',
            }}
          >
            My Invoices
          </ListItemText>
        </ListItem>
        <ListItem>
          <Invoice />
        </ListItem>
        <ListItem alignItems="center" sx={{ width: '100%' }}>
          <Invoice />
        </ListItem>
        <ListItem alignItems="center">
          <Invoice />
        </ListItem>
        <ListItem alignItems="center">
          <Invoice />
        </ListItem>
        <ListItem alignItems="center">
          <Invoice />
        </ListItem>
        <ListItem alignItems="center">
          <Invoice />
        </ListItem>
      </List>
    </Box>
  );
}
export default Invoices;
