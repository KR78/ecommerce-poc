/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/AppLayout';
import '../scss/globals.scss';

const App = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: { [v: string]: unknown };
}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600&family=Sora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <title>Ecommerce PoC</title>
      <meta name="description" content="Ecommerce PoC"></meta>
      <link
        rel="icon"
        type="image/png"
        href="https://bejamas.io/favicon-32x32.png"
      ></link>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
