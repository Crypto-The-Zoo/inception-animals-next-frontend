/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useContext, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useTipMint from "../config/cadence/hooks/useTipMint"
import useTipMintFlow from "../config/cadence/hooks/useTipMintFlow"
import { WalletContext } from "../context/WalletContext"
import ConnectWalletNav from "./ConnectWallet"
// @ts-ignore
import confetti from "canvas-confetti"
import useAccountMintStats from "../config/cadence/hooks/useAccountMintStats"
import { useRouter } from "next/router"
import Countdown from "react-countdown"
import useContractMintStats from "../config/cadence/hooks/useContractMintStats"

const PublicMint: React.FC = () => {
  const { walletAddr } = useContext(WalletContext)
  const [quantity, setQuantity] = useState(1)

  const [checkboxValue, setCheckboxValue] = useState(0)
  const [showSuccess, setShowSucces] = useState<boolean>(false)

  const { totalMinted } = useContractMintStats()

  const router = useRouter()

  const liveUnixTime = 1663797600
  const publicUnixTime = 1663808400

  const { tipMintedCount, accountNfts, whitelistEntries, publicMintedCount } =
    useAccountMintStats()

  const onSuccess = () => {
    setShowSucces(true)
    confetti()
  }

  const mintAvailableUnixTime = () => {
    if (Object.keys(accountNfts).length === 0) {
      return publicUnixTime
    } else {
      return liveUnixTime
    }
  }

  const renderSuccessMessage = () => {
    return (
      <>
        <div
          className={`flex flex-col items-center gap-6 sm:self-start mt-12 md:mt-24 lg:mt-0`}
        >
          <h3 className="text-inception-green text-center text-sm lg:text-2xl font-bold tracking-widest opacity-90">
            Congratulations you successfully minted Inception Avatars!
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            <img
              src="https://storage.googleapis.com/inception_public/inception-avatar/pre_reveal.jpeg"
              alt=""
              className="w-24 h-24"
            ></img>
            <h1>X {quantity}</h1>
            <img
              src="https://storage.googleapis.com/inception_public/inception-avatar/blackbox.png"
              alt=""
              className="w-24 h-24"
            ></img>
            <h1>X {quantity}</h1>
          </div>
          <a
            href="http://accounts.meetdapper.com/inventory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
              Check In Dapper Wallet
            </button>
          </a>
          <Link passHref href={"my-inception-nfts"}>
            <button className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
              Check in my inception Station
            </button>
          </Link>
          <div>
            <button
              className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
              onClick={() => router.reload()}
            >
              Mint More
            </button>
          </div>
        </div>
      </>
    )
  }

  const mainToast = useRef(null)
  const errorToast = useRef(null)

  const initToastError = (payload: any) => {
    if (!errorToast?.current) {
      // @ts-ignore
      errorToast.current = toast.dark(payload.render, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        isLoading: false,
      })
    }
  }

  const updateToastError = (payload: any) => {
    // @ts-ignore
    return toast.update(errorToast.current, { ...payload })
  }

  const toastError = (payload: any) => {
    initToastError(payload)
    updateToastError(payload)
  }

  const initToast = () =>
    // @ts-ignore
    (mainToast.current = toast.dark("Awaiting approval..", {
      position: toast.POSITION.TOP_CENTER,
      isLoading: true,
    }))

  const updateToast = (update: any) => {
    // @ts-ignore
    toast.update(mainToast.current, { ...update })
  }

  const [state, tipMint, txStatus] = useTipMint({
    updateToast: updateToast,
    initToast: initToast,
    onSuccess,
  })

  const [flowTipMintState, tipMintFlow, flowTipMintTxStatus] = useTipMintFlow({
    updateToast: updateToast,
    initToast: initToast,
    onSuccess,
  })

  const updateQuantity = ({ method }: { method: string }) => {
    if (
      method === "increment" &&
      quantity < 5 &&
      tipMintedCount + quantity < 5
    ) {
      setQuantity(quantity + 1)
    } else if (method === "decrement" && quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleMint = () => {
    if (new Date(mintAvailableUnixTime() * 1000) > new Date()) {
      toastError({
        type: toast.TYPE.ERROR,
        render: "Mint not started!",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    if (checkboxValue === 0) {
      toastError({
        type: toast.TYPE.ERROR,
        render:
          "Please read accept the Privacy Policy and End User License Agreement",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    if (quantity > 5 || quantity < 1) {
      toastError({
        type: toast.TYPE.ERROR,
        render: "You can mint at most 10 in 1 transaction!",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    if (tipMintedCount + quantity > 5) {
      toastError({
        type: toast.TYPE.ERROR,
        render: "You've reached the limit for tipping entries!",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    return tipMint({
      numberOfTokens: quantity,
      expectedPrice: (20 * quantity).toFixed(2).toString(),
    })
  }

  const handleTipMintFlow = () => {
    if (new Date(mintAvailableUnixTime() * 1000) > new Date()) {
      toastError({
        type: toast.TYPE.ERROR,
        render: "Mint not started!",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    if (checkboxValue === 0) {
      toastError({
        type: toast.TYPE.ERROR,
        render:
          "Please read accept the Privacy Policy and End User License Agreement",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    if (quantity > 5 || quantity < 1) {
      toastError({
        type: toast.TYPE.ERROR,
        render: "You can mint at most 10 in 1 transaction!",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    if (tipMintedCount + quantity > 5) {
      toastError({
        type: toast.TYPE.ERROR,
        render: "You've reached the limit for tipping entries!",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    return tipMintFlow({
      numberOfTokens: quantity,
      expectedPrice: (12 * quantity).toFixed(2).toString(),
    })
  }

  const renderMintButton = () => {
    return (
      <div className="flex items-center flex-row">
        <button
          className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
          onClick={handleMint}
        >
          <Countdown date={new Date(1000 * mintAvailableUnixTime())}>
            <div className="flex gap-2">
              <h3>Tip Mint with</h3>
              <img
                src="/icons/dapper_icon.png"
                alt=""
                className="w-6 h-6"
              ></img>
            </div>
          </Countdown>
        </button>
        <button
          className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
          onClick={handleTipMintFlow}
        >
          <Countdown date={new Date(1000 * mintAvailableUnixTime())}>
            <div className="flex gap-2">
              <h3>Tip mint with</h3>
              <img src="/icons/flow_icon.png" alt="" className="w-6 h-6"></img>
            </div>
          </Countdown>
        </button>
      </div>
    )
  }

  const renderFormBottom = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <p className="uppercase">minted</p>
          <h2>{new Date(1663635600 * 1000) > new Date() ? 0 : totalMinted}</h2>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <div className="">Total Supply</div>
          <div className="">2,920</div>
        </div>

        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2">
          <div className="">Minted</div>
          <div className="flex flex-col gap-1 items-end">
            {`${tipMintedCount} / 5`}
          </div>
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

        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2">
          <div className="">Total Tip</div>
          <div className="flex flex-row gap-1 items-end">
            <div className="flex items-center gap-1">
              <img
                src="/icons/dapper_icon.png"
                alt=""
                className="w-6 h-6"
              ></img>
              {`$${20 * quantity}`}
            </div>
            <h1>|</h1>
            <div className="flex items-center gap-1">
              <img src="/icons/flow_icon.png" alt="" className="w-6 h-6"></img>
              {`$${12 * quantity}`}
            </div>
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
              href="https://storage.googleapis.com/inception_public/documents/IA_private_policy.pdf"
              target={"_blank"}
              rel="noreferrer"
              className="px-2 rounded-md highlight-yellow font-bold hover:underline"
            >
              Privacy Policy
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
    return !showSuccess ? (
      <div>{renderFormBottom()}</div>
    ) : (
      <div>{renderSuccessMessage()}</div>
    )
  }

  return <div className="w-full">{renderMintPanel()}</div>
}

export default PublicMint
