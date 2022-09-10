import { AppProps } from "next/app";

function MyApp(props: IAppProps) {
    const { pageProps } = props;

    return <Component {...pageProps} />;
}

export default MyApp;
