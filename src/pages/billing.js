import { makeStyles } from '@material-ui/core';
import Sidebar, { drawerWidth } from '../components/Sidebar';
import Footer from '../components/Footer';

const useStyles = makeStyles({
  main: {
    marginLeft: `${drawerWidth}px`,
    backgroundColor: '#FBFCFD',
  },
});

function BillingPage() {
  const classes = useStyles();

  return (
    <>
      <Sidebar />
      <main className={classes.main}>
        <h1>Billing</h1>
      </main>
      <Footer />
    </>
  );
}

export default BillingPage;
