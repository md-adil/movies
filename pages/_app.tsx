// import '../styles/globals.css'
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import Head from "next/head";
import { Global } from "@emotion/react";
import { global } from "../styles/global.style";
import { useRouter } from "next/router";

const clientSideEmotionCache = createCache({ key: "css" });

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  const router = useRouter();
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Global styles={global} />
      {router.isReady && <Component {...pageProps} />}
    </CacheProvider>
  );
}
export default MyApp;
