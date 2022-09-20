import { useState, useEffect, useContext } from "react"
import { getContractMintInfo } from "../tx/tx-get-contract-mint-info"

export default function useContractMintStats() {
  const [totalMinted, setTotalMinted] = useState(2092)

  const getMintInfoPerContract = () => {
    if (new Date(1663722000 * 1000) > new Date()) {
      setTotalMinted(0)
      return
    }

    getContractMintInfo()
      .then((res: any) => {
        if (res) {
          setTotalMinted(res.totalMinted)
        }
      })
      .catch((e) => {
        console.log("getMintInfoPerContract error", e)
      })
  }

  useEffect(() => {
    getMintInfoPerContract()
  }, [])

  return {
    totalMinted,
  }
}
