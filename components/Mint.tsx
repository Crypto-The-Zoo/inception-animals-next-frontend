import { useContext, useEffect } from "react"
import useAccountStatus from "../config/cadence/hooks/useGetWhitelistEntries"
import { WalletContext } from "../context/WalletContext"
import useMintPrivate from "../config/cadence/hooks/useMintPrivate"
import useMintPublic from "../config/cadence/hooks/useMintPublic"

const MintComponent: React.FC<{
  setWhitelistEntries: (entries: number) => void
  quantity: number
}> = ({
  quantity,
  setWhitelistEntries,
}: {
  setWhitelistEntries: (entries: number) => void
  quantity: number
}) => {
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

  useEffect(() => {
    console.log("--updating", entries)
    setWhitelistEntries(entries)
  }, [])

  const mint = () => {}

  return (
    <button
      className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
      onClick={() =>
        // mintPrivate({
        //   numberOfTokens: 1,
        // })

        mintPublic()
      }
    >
      Mint!
    </button>
  )
}

export default MintComponent
