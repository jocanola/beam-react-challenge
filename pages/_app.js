import { ThemeProvider } from "styled-components";
import "./_app.css";
import { appTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/Global.styles";
import PlayerProvidver from "../store/contexts/context";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvidver>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <div id="modal-root"></div>
      </ThemeProvider>
    </PlayerProvidver>
  );
}

export default MyApp;
