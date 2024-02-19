import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import Head from "next/head";
import { Global } from "@emotion/react";
import { global } from "../styles/global.style";
import { ThemeProvider } from "@mui/material";
import { theme } from "src/theme";
import { QueryClient, QueryClientProvider, type QueryClientConfig } from "@tanstack/react-query";
import { useState } from "react";

const clientSideEmotionCache = createCache({ key: "css" });

const queryOption: QueryClientConfig = {
  defaultOptions: { queries: { refetchOnMount: false, refetchOnWindowFocus: false, networkMode: "offlineFirst", staleTime: 30 * 60 * 1000 } },
};

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  const [queryClient] = useState(() => new QueryClient(queryOption));
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <CssBaseline />
          <Global styles={global} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
