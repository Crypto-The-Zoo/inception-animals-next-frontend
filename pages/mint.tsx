/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import Head from "next/head"
import "react-toastify/dist/ReactToastify.css"
import PrivateMint from "../components/privateMint"
import { useState } from "react"
import PublicMint from "../components/PublicMint"
import TipMint from "../components/TipMint"
import MintNavigationButtons from "../components/MintNavigationButtons"

const Mint: NextPage = () => {
  const [currentMintStageKey, setCurrentMintStageKey] = useState("preMint")

  const renderMintPanelByStage = () => {
    if (currentMintStageKey === "preMint") {
      return <PrivateMint />
    } else if (currentMintStageKey === "publicMint") {
      return <PublicMint />
    } else if (currentMintStageKey === "tipMint") {
      return <TipMint />
    }
  }

  const renderMintPanel = () => {
    return (
      <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro">
        <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-2xl border-2 border-red-600 p-14 z-50">
          <MintNavigationButtons
            mintStageKey={currentMintStageKey}
            setCurrentMintStageKey={(key: string) =>
              setCurrentMintStageKey(key)
            }
          />
          {renderMintPanelByStage()}
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
