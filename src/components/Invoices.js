import { Box, List, ListItem, ListItemText, Grid } from '@mui/material';
import Invoice from './Invoice';
import InvoiceDetails from './InvoiceDetails';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Invoices(props) {
  const [showDetails, setShowDetails] = useState(null);
  const router = useRouter();

  return (
    <Box
      component="div"
      sx={{
        background: '#DEE4E8',
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#DEE4E8',
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        columnSpacing={{ sm: 3 }}
        sx={{
          justifyContent: 'center',
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

              {props.invoiceData.map((invoice) => (
                <ListItem
                  key={invoice.id}
                  onClick={() => {
                    console.log('invoice', invoice);
                    setShowDetails(invoice);
                    
                    borderColor: '2px solid rgba(10, 165, 171, 0.4)'
                  }}
                >
                  <Invoice
                    id={invoice.id}
                    status={invoice.status}
                    due={invoice.due}
                    amount={invoice.amount}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        <Grid
          item
          sx={{ display: { xs: 'none', sm: 'flex' }, marginTop: '60px' }}
        >
          {showDetails && (
            <InvoiceDetails
              invoice={showDetails}
              onClose={() => {
                setShowDetails(null);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
export default Invoices;
