import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Grid } from '@material-ui/core';

const drawerWidth = 240;

function BillingPage() {
  return (
    <div>
      <Sidebar style={{ width: drawerWidth }} />

      <Header style={{ width: `calc(100% - ${drawerWidth}px)` }} />

      <Footer />
    </div>
  );
}

export default BillingPage;
