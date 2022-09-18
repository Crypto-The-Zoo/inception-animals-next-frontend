/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useMintPrivate from "../config/cadence/hooks/useMintPrivate"
import { WalletContext } from "../context/WalletContext"
import ConnectWalletNav from "./ConnectWallet"
// @ts-ignore
import confetti from "canvas-confetti"
import Link from "next/link"

const PrivateMint: React.FC = () => {
  const { walletAddr } = useContext(WalletContext)
  const [quantity, setQuantity] = useState(1)
  const [checkboxValue, setCheckboxValue] = useState(0)
  const [whitelistEntries, setWhitelistEntries] = useState(0)
  const [showSuccess, setShowSucces] = useState<boolean>(false)

  const mainToast = useRef(null)
  const errorToast = useRef(null)

  const onSuccess = () => {
    setShowSucces(true)
    confetti()
  }

  const renderSuccessMessage = () => {
    return (
      <>
        <div
          className={`flex flex-col gap-6 sm:self-start mt-12 md:mt-24 lg:mt-0`}
        >
          <h3 className="text-inception-green text-center text-xs lg:text-2xl font-bold tracking-widest opacity-90">
            Congratulations you successfully minted Inception Animals!
          </h3>
          <Link href="/my-inception-station">
            <button className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
              My Inception Animals
            </button>
          </Link>
        </div>
      </>
    )
  }

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

  useEffect(() => {
    if (whitelistEntries !== 0) {
      setQuantity(whitelistEntries)
    }
  }, [whitelistEntries])

  const [privateMintState, mintPrivate, privateMintTxStatus] = useMintPrivate({
    updateToast: updateToast,
    initToast: initToast,
    navigateAway: onSuccess,
  })

  const updateQuantity = ({ method }: { method: string }) => {
    if (method === "increment" && quantity < 4) {
      setQuantity(quantity + 1)
    } else if (method === "decrement" && quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleMint = () => {
    if (checkboxValue === 0) {
      // toast.error("Please accept the terms and conditions")
      toastError({
        type: toast.TYPE.ERROR,
        render: "Please accept the terms and conditions",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    if (whitelistEntries < quantity) {
      toastError({
        type: toast.TYPE.ERROR,
        render: "You don't have enough remaining whitelist entries",
        autoClose: 3000,
        isLoading: false,
      })
      return
    }

    return mintPrivate({
      numberOfTokens: quantity,
    })
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
              href="https://storage.googleapis.com/inception_public/documents/Inception_Animals_EULA.pdf"
              target={"_blank"}
              rel="noreferrer"
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

export default PrivateMint
