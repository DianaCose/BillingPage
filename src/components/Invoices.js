import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import Invoice from './Invoice';
import InvoiceDetails from './InvoiceDetails';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Invoices(props) {
  const [showDetails, setShowDetails] = useState(null);
  const router = useRouter();
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('lg'));

  const [selectedInvoice, setSelectedInvoice] = useState(false);

  return (
    <Box
      component="div"
      sx={{
        background: '#DEE4E8',
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#DEE4E8',
        paddingBottom: '88px',
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
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#32424E',
                    width: 'auto',
                  }}
                >
                  My Invoices
                </ListItemText>
              </ListItem>

              {props.invoiceData.length === 0
                ? <Typography variant='body1'sx={{ fontSize: '16px', color:'#32424E', opacity: '0.6', padding: '5px', marginLeft:'7px', }}> There are no invoices available!</Typography>
                : props.invoiceData.map((invoice) => (
                    <ListItem
                      sx={{
                        fontSize: '16px',
                        color: '#32424E',
                        width: 'auto',
                      }}
                      key={invoice.id}
                      onClick={() => {
                        setSelectedInvoice(invoice.id);
                        if (isMobile) {
                          router.push(`${invoice.id}`);
                        } else {
                          setShowDetails(invoice);
                        }
                      }}
                    >
                      <Invoice
                        id={invoice.id}
                        status={invoice.status}
                        due={invoice.due}
                        amount={invoice.amount}
                        selected={selectedInvoice === invoice.id}
                      />
                    </ListItem>
                  ))}
            </List>
          </Box>
        </Grid>

        <Grid
          item
          sx={{ display: { xs: 'none', lg: 'flex' }, marginTop: '60px' }}
        >
          {showDetails && !isMobile && (
            <InvoiceDetails
              invoice={showDetails}
              onClose={() => {
                setShowDetails(null);
                setSelectedInvoice(null);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
export default Invoices;
