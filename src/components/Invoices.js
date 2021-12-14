import { Box, List, ListItem, ListItemText, Grid } from '@mui/material';
import Invoice from './Invoice';
import InvoiceDetails from './InvoiceDetails';
import { invoiceData } from '../../InvoiceDatabase';

function Invoices(props) {
 
  return (
    <Box
      component="div"
      sx={{
        background: '#DEE4E8',
        maxWidth: '100%',
        height: '100%',
        backgroundColor: '#DEE4E8',
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
            }}
            justifyContent="center"
            alignItems="center"
          >
            <List
              sx={{
                width: '100%',
                maxWidth: '661px',
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

              { props.invoiceData.map((invoice) => 

                   <ListItem key={invoice.id}>
               
                   <Invoice
                      id={invoice.id}
                      status={invoice.status}
                      due={invoice.due}
                      amount={invoice.amount}
                    />
                 
                </ListItem>
              )}

              {/* <ListItem>
                <Invoice />
              </ListItem> */}
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
