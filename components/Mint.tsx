import { useContext } from "react"
import useAccountStatus from "../config/cadence/hooks/useGetWhitelistEntries"
import { WalletContext } from "../context/WalletContext"

const MintComponent: React.FC<{
  quantity: number
}> = ({ quantity }: { quantity: number }) => {
  const { walletAddr } = useContext(WalletContext)

  const mint = () => {}
  const { entries } = useAccountStatus(walletAddr)

  console.log(entries)

  return (
    <button
      className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
      onClick={mint}
    >
      Mint!
    </button>
  )
}

export default MintComponent
