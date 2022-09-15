import { useState, useEffect } from "react"
import { getWhitelistEntriesByAddress } from "../tx/tx-get-whitelist-entries"

export default function useAccountStatus(address: string) {
  const [entries, setEntries] = useState<number>(null!)

  const getWhitelistEntries = () => {
    getWhitelistEntriesByAddress({ address })
      .then((res: number) => {
        console.log("--res", res)
        console.log("--{ address }", { address })
        setEntries(res)
      })
      .catch((e) => {
        console.log("getWhitelistEntries error", e)
      })
  }

  useEffect(() => {
    getWhitelistEntries()
  }, [])

  return {
    entries,
  }
}
