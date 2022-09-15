/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import Head from "next/head"
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { WalletContext } from "../context/WalletContext"
import ConnectWalletNav from "../components/ConnectWallet"
import MintComponent from "../components/Mint"

const mintStages = [
  { name: "pre mint", isActive: false, key: "preMint" },
  { name: "public mint", isActive: false, key: "publicMint" },
  { name: "tip mint", isActive: false, key: "tipMint" },
]

const Mint: NextPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [checkboxValue, setCheckboxValue] = useState(0)
  const [whitelistEntries, setWhitelistEntries] = useState(0)
  const [currentMintStageKey, setCurrentMintStageKey] = useState("preMint")

  const { walletAddr } = useContext(WalletContext)

  const updateQuantity = ({ method }: { method: string }) => {
    if (method === "increment" && quantity < 4) {
      setQuantity(quantity + 1)
    } else if (method === "decrement" && quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const renderFormTop = () => {
    return (
      <div className="flex flex-col items-center text-center mb-7">
        <div className="flex justify-between gap-2">
          {mintStages.map((stage, index) => (
            <button
              key={index}
              onClick={() => setCurrentMintStageKey(stage.key)}
              className={`text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 ${
                currentMintStageKey === stage.key
                  ? "bg-inception-gray"
                  : "bg-inception-off-white"
              } backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green`}
            >
              {stage.name}
            </button>
          ))}

          {/* // <button className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
          //   Pre Mint
          // </button>
          // <button className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
          //   Public Mint
          // </button>
          // <button className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
          //   Tip Mint
          // </button> */}
        </div>
        <h2>2000</h2>
        <p className="uppercase">minted</p>
      </div>
    )
  }

  const handleOnclick = () => {
    if (checkboxValue === 0) {
      toast.error("Please accept the terms and conditions")
    }

    // TODO: implement the minting logic
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
          {walletAddr ? (
            <MintComponent
              quantity={quantity}
              setWhitelistEntries={(entries: number) =>
                setWhitelistEntries(entries)
              }
            />
          ) : (
            <ConnectWalletNav />
          )}
        </div>
      </div>
    )
  }

  const renderMintPanel = () => {
    return (
      <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro">
        <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-2xl border-2 border-red-600 p-14 z-50">
          {renderFormTop()}
          {renderFormBottom()}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div>
        <Head>
          <title>Inception Animals</title>
          <meta property="og:title" content="Inception Animals" key="title" />
          <meta
            property="og:description"
            content="A retro futuristic metaverse brand"
            key="description"
          />
          <meta property="og:url" content="https://www.inceptionanimals.com" />
          <meta
            property="og:image"
            content={
              "https://storage.googleapis.com/inception_public/cyber_hippo.jpg"
            }
          />
        </Head>
      </div>
      <Navigation />
      {renderMintPanel()}
    </div>
  )
}

export default Mint
