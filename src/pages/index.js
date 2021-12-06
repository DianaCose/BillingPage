import Head from 'next/head';
import BillingPage from './billing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Billing Page</title>
      </Head>

      <BillingPage />
    </div>
  );
}
