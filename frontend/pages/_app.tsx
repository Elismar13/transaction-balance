import { AppProps } from 'next/app'

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root {
    height: 100vh;
    width: 100vw;
    font-size: 16px;
  }
  body {
    background: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    --side-bar-color: #5DB9FF;
    --borders-color: #c5c5c5;
    --dashboard-area-color: #EEEEEE;
    --dashboard-cards-container: #fafafa;
    --selectd-button: rgb(13, 189, 101);
    --ambient-card-background-color: #fafafa;
    --sensor-card-background-color: #bae452;
    --superior-bar-color: #EEEEEE;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
