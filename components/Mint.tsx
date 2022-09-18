import { useContext, useEffect } from "react"
import useAccountStatus from "../config/cadence/hooks/useGetWhitelistEntries"
import { WalletContext } from "../context/WalletContext"
import useMintPrivate from "../config/cadence/hooks/useMintPrivate"
import useMintPublic from "../config/cadence/hooks/useMintPublic"
import useTipMint from "../config/cadence/hooks/useTipMint"

const MintComponent: React.FC<{
  setWhitelistEntries: (entries: number) => void
  quantity: number
  currentMintStageKey: string
}> = ({ quantity, setWhitelistEntries, currentMintStageKey }) => {
  const { walletAddr } = useContext(WalletContext)
  const { entries } = useAccountStatus(walletAddr)

  const [privateMintState, mintPrivate, privateMintTxStatus] = useMintPrivate({
    updateToast: () => {},
    initToast: () => {},
    navigateAway: () => {},
  })

  const [publicMintState, mintPublic, publicMintTxStatus] = useMintPublic({
    updateToast: () => {},
    initToast: () => {},
    navigateAway: () => {},
  })

  const [tipMintState, tipMint, tipMintTxStatus] = useTipMint({
    updateToast: () => {},
    initToast: () => {},
    navigateAway: () => {},
  })

  const handleMint = (quantity: number | null) => {
    if (currentMintStageKey === "preMint") {
      return () =>
        mintPrivate({
          numberOfTokens: quantity,
        })
    } else if (currentMintStageKey === "publicMint") {
      return mintPublic
    } else {
      return () =>
        tipMint({
          numberOfTokens: quantity,
          expectedPrice: (20 * (quantity ? quantity : 0)).toFixed(2).toString(),
        })
    }
  }

  useEffect(() => {
    setWhitelistEntries(entries)
  }, [])

  return (
    <button
      className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
      onClick={handleMint(quantity)}
    >
      Mint!
    </button>
  )
}

export default MintComponent
