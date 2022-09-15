import { authenticate, unauthenticate, currentUser } from "@onflow/fcl"
import { createContext, useCallback, useEffect, useState } from "react"

interface ContextProps {
  walletAddr: string | never
  connect: () => void
  disconnect: () => void
}

export const WalletContext = createContext<ContextProps>({
  walletAddr: null!,
  connect: () => {},
  disconnect: () => {},
})

interface DapperWallet {
  addr: string
  cid: string
  expiresAt: string
  f_type: string
  f_vsn: string
  loggedIn: boolean
  services: string[]
}

const WalletProvider = ({ children }: any) => {
  const [walletAddr, setWalletAddr] = useState<string | never>(null!)

  const subscribeToAuthenticate = useCallback(() => {
    currentUser().subscribe((wallet: DapperWallet) => {
      setWalletAddr(wallet.addr)
    })
  }, [])

  useEffect(() => {
    subscribeToAuthenticate()
  }, [])

  return (
    <WalletContext.Provider
      value={{
        walletAddr,
        connect: authenticate,
        disconnect: unauthenticate,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export default WalletProvider
