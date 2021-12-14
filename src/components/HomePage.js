import { drawerWidth } from './ResponsiveSidebar';
import Invoices from './Invoices';
import HeaderTop from './HeaderTop';
import HeaderToolbar from './HeaderToolbar';
import { Box } from '@mui/system';
import {invoiceData} from '../../InvoiceDatabase';


function HomePage(props) {

  return (
    <Box
      sx={{
        height: '100vh',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <HeaderTop />
      <HeaderToolbar />
      <Invoices invoiceData={invoiceData}/>
    </Box>
  );
}

export default HomePage;
