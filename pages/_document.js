import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document() {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="shortcut icon" href="/favicon/flat-gradient-social-media-icons-twitter-twitter-logo-png-clipart-thumbnail.jpg" type="image/x-icon" />
          <link rel="icon" href="/favicon/flat-gradient-social-media-icons-twitter-twitter-logo-png-clipart-thumbnail.jpg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
