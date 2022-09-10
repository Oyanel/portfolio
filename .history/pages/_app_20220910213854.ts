import { AppProps } from 'next/app';

function MyApp(props: IAppProps) {
  const { pageProps, Component, emotionCache = clientSideEmotionCache } = props;

  return <Component {...pageProps} />;
}

export default App;
