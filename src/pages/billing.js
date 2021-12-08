import Header from '../components/Header';
import ResponsiveSidebar from '../components/ResponsiveSidebar';
import Invoices from '../components/Invoices';
import Footer from '../components/Footer';

export default function Billing() {
  return (
    <>
    <ResponsiveSidebar />
    <Header />
    <Invoices />
    <Footer/>
    </>
  )
}
