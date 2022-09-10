import { AppProps } from "next/app";

function MyApp(props: IAppProps) {
    const { pageProps } = props;

    <Component {...pageProps} />;
}

export default App;
