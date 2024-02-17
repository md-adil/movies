import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import Head from "next/head";
import { Global } from "@emotion/react";
import { global } from "../styles/global.style";
import { ThemeProvider } from "@mui/material";
import { theme } from "src/theme";

const clientSideEmotionCache = createCache({ key: "css" });

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
