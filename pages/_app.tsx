import { AppProps } from "next/app";
import "../styles/sass/global.scss";
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";

function MyApp(props: AppProps) {
    const { pageProps, Component } = props;

    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="This is Therence's website" name="description" />
                <title>Therence BRUNE Portfolio</title>
            </Head>
            <main>
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
}

export default MyApp;
