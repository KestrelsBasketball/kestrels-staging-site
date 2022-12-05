import "../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Desktopnav from "@/components/Navbars/Desktop-nav";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      myGrey: "#1c1c1c",
      myWhite: "#ffffff",
      myRed: "#e90d0d",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Desktopnav />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
