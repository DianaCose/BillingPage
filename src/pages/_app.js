import '../../styles/main.css';
import { render } from 'react-dom';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
