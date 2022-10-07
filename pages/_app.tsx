import { AppProps } from "next/app";
import "../styles/global.css";

function MyApp(props: AppProps) {
    const { pageProps, Component } = props;

    return <Component {...pageProps} />;
}

export default MyApp;
