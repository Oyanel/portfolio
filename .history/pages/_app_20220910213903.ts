import { AppProps } from "next/app";

function MyApp(props: IAppProps) {
    const { pageProps, Component, emotionCache = clientSideEmotionCache } = props;

    <Component {...pageProps} />;
}

export default App;
