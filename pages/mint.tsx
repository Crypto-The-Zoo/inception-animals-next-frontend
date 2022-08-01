/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import Head from "next/head"

const Mint: NextPage = () => {
  const renderFormTop = () => {
    return (
      <div className="flex flex-col items-center text-center mb-7">
        <h2>2000</h2>
        <p className="uppercase">minted</p>
      </div>
    )
  }

  const renderFormBottom = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <div className="">Total Supply</div>
          <div className="">2,222</div>
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
              $90.00{" "}
            </div>
            <div className="flex items-center gap-1">
              <img src="/icons/flow_icon.png" alt="" className="w-6 h-6"></img>
              60.00{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <div className="">Current Phase</div>
          <div className="">meta-universe</div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 flex-wrap mx-2 gap-24">
          <div className="">Next Phase</div>
          <div className="flex items-center gap-1">
            pre sale with{" "}
            <img src="/icons/dapper_icon.png" alt="" className="w-6 h-6"></img>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 mx-2 gap-24">
          quantity
          <div className="flex justify-evenly">
            <span>
              <button>&#x2212;</button>
            </span>
            <input className="w-1/4 bg-transparent border-l-2 border-r-2 disabled"></input>
            <span>
              <button>+</button>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-inception-taro py-5 mx-2 gap-24">
          <div>Total:</div>
          <button>Mint</button>
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
