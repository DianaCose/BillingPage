import { CssBaseline } from '@material-ui/core';
import Head from 'next/head';
import BillingPage from './billing';

export default function Home() {
  return (
    <div>
      <CssBaseline />
      <Head>
        <title>Billing Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Dosis:wght@300;400&family=EB+Garamond&family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BillingPage />
    </div>
  );
}
