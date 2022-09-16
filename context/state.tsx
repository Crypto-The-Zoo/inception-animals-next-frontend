// https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/
// @ts-ignore
import { authenticate, unauthenticate, currentUser } from "@onflow/fcl"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

const AppContext = createContext({})

export function AppWrapper({ children }: any) {
  const [wallet, setWallet] = useState(null)

  const subscribeToAuthenticate = useCallback(() => {
    currentUser().subscribe((wallet: any) => {
      setWallet(wallet)
    })
  }, [])

  useEffect(() => {
    subscribeToAuthenticate()
  }, [])

  let sharedState = {
    wallet: null,
    setWallet: null,
    accountWhitelistSpots: 0,
    accountWhitelistSpotsUsed: 0,
    accountPublicSpots: 0,
    accountPublicSpotsUsed: 0,
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
