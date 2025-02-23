import '../styles/globals.css'; // Importuojame globalius stilius
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
