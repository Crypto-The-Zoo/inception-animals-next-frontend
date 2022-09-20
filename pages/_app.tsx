import "../styles/globals.css"
import type { AppProps } from "next/app"
import "../config/FclConfig"

import { ToastContainer } from "react-toastify"
import WalletProvider from "../context/WalletContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </WalletProvider>
  )
}

export default MyApp
