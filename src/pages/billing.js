import HomePage from '../components/HomePage';
import ResponsiveSidebar from '../components/ResponsiveSidebar';
import Footer from '../components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-seif'].join(','),
  },
});

export default function Billing() {
  return (

    <ThemeProvider theme={theme}>
      <ResponsiveSidebar />
      <HomePage />
      <Footer />
    </ThemeProvider>

  )
}
