import { Box, List, ListItem, ListItemText, Grid } from '@mui/material';
import Invoice from './Invoice';
import InvoiceDetails from './InvoiceDetails';

function Invoices() {
  return (
    <Box
      component="div"
      sx={{
        background: '#DEE4E8',
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
        }}
      >
        <Grid item sx={{ width: '100%', maxWidth: '661px' }}>
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
            <List
              sx={{
                width: '100%',
                maxWidth: '661px',
                display: { xs: 'none', sm: 'block' },
              }}
            >
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
            </List>
          </Box>
        </Grid>

        <Grid
          item
          sx={{ display: { xs: 'none', sm: 'flex' }, marginTop: '60px' }}
        >
          <InvoiceDetails />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Invoices;
