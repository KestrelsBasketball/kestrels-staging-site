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
      mobile_background_color: "#1c1c1c",
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
