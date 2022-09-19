import { useState, useEffect, useContext } from "react"
import { getContractMintInfo } from "../tx/tx-get-contract-mint-info"

export default function useContractMintStats() {
  const [totalMinted, setTotalMinted] = useState(2092)

  const getMintInfoPerContract = () => {
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
