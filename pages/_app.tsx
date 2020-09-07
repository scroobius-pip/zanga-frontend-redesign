import "../css/fonts.css";
import "../css/tailwind.css";
import "react-responsive-modal/styles.css";
import "react-image-lightbox/style.css";
import { Provider } from "next-auth/client";
import Head from "next/head";
import * as Sentry from "@sentry/node";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

export default function MyApp({ Component, pageProps, err }) {
  const { session } = pageProps;

  return <Provider session={session}>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-175017430-1"
      >
      </script>
      <script dangerouslySetInnerHTML={googleAnalyticsCode} />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="title"
        content="Zanga - Advertise real estate and earn money"
      />
      <meta
        name="description"
        content="Advertise your property for free on our platform, and reach more audience than traditional channels"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://myzanga.com/" />
      <meta
        property="og:title"
        content="Zanga - Advertise real estate and earn money"
      />
      <meta
        property="og:description"
        content="Advertise your property for free on our platform, and reach more audience than traditional channels"
      />
      <meta property="og:image" content="https://myzanga.com/zanga-logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://myzanga.com/" />
      <meta
        property="twitter:title"
        content="Zanga - Advertise real estate and earn money"
      />
      <meta
        property="twitter:description"
        content="Advertise your property for free on our platform, and reach more audience than traditional channels"
      />
      <meta
        property="twitter:image"
        content="https://myzanga.com/zanga-logo.png"
      />
    </Head>
    <Component key="the-app" {...pageProps} err={err} />
    <style jsx>
      {`
  body {
        margin:0
  }
  `}
    </style>
  </Provider>;
}

const googleAnalyticsCode = {
  __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-175017430-1');
  `,
};
