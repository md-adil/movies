import '../styles/globals.css'
import type { AppProps } from 'next/app'
import fetch from 'node-fetch';

if (!globalThis.fetch) {
	globalThis.fetch = fetch as any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
