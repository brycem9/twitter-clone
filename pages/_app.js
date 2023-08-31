import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head >
      <title>Twitter</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
