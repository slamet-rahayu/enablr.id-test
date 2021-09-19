/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import Head from 'next/head';
import '../styles/reset.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Enablr.id Test</title>
        <meta name="description" content="Enablr.id Test" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export function reportWebVitals(metric) {
//   if (metric.label === 'web-vital') {
//     console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
//   }
// }

export default MyApp;
