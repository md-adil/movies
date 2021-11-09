/* eslint-disable react/display-name */
import Document, { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from '@emotion/cache';

export default function MyDocument() {
    return (
        <Html>
            <Head>
                <meta name="theme-color" content="#33333d" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap"
                  rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
MyDocument.getInitialProps = async (ctx: any) => {
    const originalRenderPage = ctx.renderPage;
    const cache = createCache({ key: 'css' });
    const { extractCriticalToChunks } = createEmotionServer(cache);
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => <App emotionCache={cache} {...props} />,
      });
  
    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));
  
    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
};
