/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useMintPublic from "../config/cadence/hooks/useMintPublic"
import { WalletContext } from "../context/WalletContext"
import ConnectWalletNav from "./ConnectWallet"

const PublicMint: React.FC = () => {
  const { walletAddr } = useContext(WalletContext)
  const [quantity, setQuantity] = useState(1)
  const [checkboxValue, setCheckboxValue] = useState(0)
  const [whitelistEntries, setWhitelistEntries] = useState(0)

  useEffect(() => {
    if (whitelistEntries !== 0) {
      setQuantity(whitelistEntries)
    }
  }, [whitelistEntries])

  const [state, mintPublic, txStatus] = useMintPublic({
    updateToast: () => {},
    initToast: () => {},
    navigateAway: () => {},
  })

  const updateQuantity = ({ method }: { method: string }) => {
    if (method === "increment" && quantity < 4) {
      toast.error("Only 1 per outcast")
    } else if (method === "decrement" && quantity > 0) {
      toast.error("Only 1 per outcast")
    }
  }

  const handleMint = () => {
    if (checkboxValue === 0) {
      toast.error("Please accept the terms and conditions")
      return
    }

    // TODO: grey out when user has minted

    if (quantity !== 1) {
      toast.error("Only 1 per outcast")
      return
    }

    return mintPublic()
  }

  const renderMintButton = () => {
    return (
      <button
        className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
        onClick={handleMint}
      >
        Mint!
      </button>
    )
  }

  const renderFormBottom = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <div className="">Total Supply</div>
          <div className="">2,022</div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2">
          <div className="">Mint Price</div>
          <div className="flex flex-col gap-1 items-end">
            <div className="flex items-center gap-1">
              <img
                src="/icons/dapper_icon.png"
                alt=""
                className="w-6 h-6"
              ></img>
              {"Free"}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <div className="">Your entries</div>
          <div className="flex items-center gap-1">{whitelistEntries || 0}</div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 mx-2 gap-24">
          quantity
          <div className="flex justify-end">
            <span className="mx-2 text-3xl">
              <button onClick={() => updateQuantity({ method: "decrement" })}>
                &#x2212;
              </button>
            </span>
            <input
              className="w-1/4 bg-transparent border-l-2 border-r-2 disabled text-center"
              value={quantity}
              readOnly
            ></input>
            <span className="mx-2 text-3xl">
              <button onClick={() => updateQuantity({ method: "increment" })}>
                +
              </button>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <input
            id="link-checkbox"
            type="checkbox"
            // value={checkboxValue}
            onChange={() => setCheckboxValue(checkboxValue === 0 ? 1 : 0)}
            className="w-4 h-4 border-inception-gray"
          ></input>
          <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium">
            I agree with the{" "}
            <a
              href="#"
              className="px-2 rounded-md highlight-yellow font-bold hover:underline"
            >
              terms and conditions
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="px-2 rounded-md highlight-yellow font-bold hover:underline"
            >
              end user license agreement
            </a>
          </label>
        </div>
        <div className="flex items-center justify-center py-5 mx-2 gap-24">
          {walletAddr ? renderMintButton() : <ConnectWalletNav />}
        </div>
      </div>
    )
  }

  const renderMintPanel = () => {
    return <div>{renderFormBottom()}</div>
  }

  return <div className="w-full">{renderMintPanel()}</div>
}

export default PublicMint
