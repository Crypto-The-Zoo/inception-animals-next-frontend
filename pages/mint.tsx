/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import Head from "next/head"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Mint: NextPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [salePrice, setDalePrice] = useState(90)
  const [checkboxValue, setCheckboxValue] = useState(0)

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
              {`$${salePrice}.00`}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <div className="">Whitelist entries</div>
          <div className="flex items-center gap-1">1</div>
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
            ></input>
            <span className="mx-2 text-3xl">
              <button onClick={() => updateQuantity({ method: "increment" })}>
                +
              </button>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 mx-2 gap-24">
          <div>Total</div>
          <div className="flex items-center gap-1">
            <img src="/icons/dapper_icon.png" alt="" className="w-6 h-6"></img>
            {`$${salePrice * quantity}.00`}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <input
            id="link-checkbox"
            type="checkbox"
            value={checkboxValue}
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
          <button
            className="border-2 rounded-sm border-inception-taro"
            onClick={handleOnclick}
          >
            Mint
          </button>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
