import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { drawerWidth } from './ResponsiveSidebar';
import Invoices from './Invoices';
import HeaderTop from './HeaderTop';
import HeaderToolbar from './HeaderToolbar';
import { footerHeight } from './Footer';
import InvoiceDetails from './InvoiceDetails';

function HomePage() {
  return (
    <AppBar
      position="relative"
      sx={{
        height: '100%',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: '#DEE4E8',
      }}
    >
      <HeaderTop />
      <HeaderToolbar />

      <Invoices />
      {/* <InvoiceDetails /> */}
    </AppBar>
  );
}

export default HomePage;
