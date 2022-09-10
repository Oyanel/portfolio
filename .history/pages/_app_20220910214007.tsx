import { AppProps } from "next/app";

function MyApp(props: AppProps) {
    const { pageProps, Component } = props;

    return <Component {...pageProps} />;
}

export default MyApp;
