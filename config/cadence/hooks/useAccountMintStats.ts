import { useState, useEffect, useContext } from "react"
import { WalletContext } from "../../../context/WalletContext"
import { getAccountMintInfo } from "../tx/tx-get-account-mint-info"

export default function useAccountMintStats() {
  const { walletAddr } = useContext(WalletContext)
  console.log(walletAddr)

  const [tipMintedCount, setTipMintedCount] = useState(0)
  const [whitelistEntries, setWhitelistEntries] = useState(0)
  const [publicMintedCount, setPublicMintedCount] = useState(1)

  const getMintInfoPerAccount = () => {
    if (!walletAddr) return
    getAccountMintInfo({ address: walletAddr })
      .then((res: any) => {
        if (res) {
          setTipMintedCount(res.tipMintedCount)
          setWhitelistEntries(res.whitelistEntries)
          setPublicMintedCount(res.publicMintedCount)
        }
      })
      .catch((e) => {
        console.log("getAccountMintInfo error", e)
      })
  }

  useEffect(() => {
    getMintInfoPerAccount()
  }, [])

  useEffect(() => {
    getMintInfoPerAccount()
  }, [walletAddr])

  return {
    tipMintedCount,
    whitelistEntries,
    publicMintedCount,
  }
}
