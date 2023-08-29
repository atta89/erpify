import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "@/styles";
import Page from "../page";
import layout from "../layouts";

type Props = AppProps & {
  Component: Page;
};

function App({ Component: NextComponent, pageProps }: Props) {
  const Layout = NextComponent.layout ?? layout;

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout {...NextComponent}>
          <NextComponent {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
