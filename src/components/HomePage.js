import AppBar from '@mui/material/AppBar';
import { drawerWidth } from './ResponsiveSidebar';
import Invoices from './Invoices';
import HeaderTop from './HeaderTop';
import HeaderToolbar from './HeaderToolbar';
import { Container } from '@mui/material';

function HomePage() {
  return (
    <Container
      position="absolute"
     
      sx={{
        padding: 0,
        height: '100vh',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <HeaderTop />
      <HeaderToolbar />
      <Invoices />

    </Container>
  );
}

export default HomePage;
