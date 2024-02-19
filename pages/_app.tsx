import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import Head from "next/head";
import { Global } from "@emotion/react";
import { global } from "../styles/global.style";
import { ThemeProvider } from "@mui/material";
import { theme } from "src/theme";
import { QueryClient, type QueryClientConfig } from "@tanstack/react-query";
import { PersistQueryClientProvider as QueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import { useState } from "react";
const persister = createSyncStoragePersister({
  storage: typeof window !== "undefined" ? window.localStorage : null,
});
const clientSideEmotionCache = createCache({ key: "css" });

const queryOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      networkMode: "offlineFirst",
      // staleTime: 1000 * 60 * 60 * 24,
    },
  },
};

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  const [queryClient] = useState(() => new QueryClient(queryOption));
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient} persistOptions={{ persister }}>
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
