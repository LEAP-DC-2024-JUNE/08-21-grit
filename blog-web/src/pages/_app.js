// import { Header } from "@/components";
import "@/styles/globals.css";
// import { Header } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}
