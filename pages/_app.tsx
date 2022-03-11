import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import { store } from "../store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      {router?.pathname == "/login" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}

export default MyApp;
