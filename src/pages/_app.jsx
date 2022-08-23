import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = AppProps;
