import { NavBar } from "../Components";
import { SwapTokenContextProvider } from "../Context/SwapContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <SwapTokenContextProvider>
        <NavBar />
        <Component {...pageProps} />
      </SwapTokenContextProvider>
    </div>
  );
};

export default MyApp;
