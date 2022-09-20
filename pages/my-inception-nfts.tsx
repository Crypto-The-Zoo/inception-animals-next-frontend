/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import Head from "next/head"
import "react-toastify/dist/ReactToastify.css"
import useAccountMintStats from "../config/cadence/hooks/useAccountMintStats"

const MyInceptionNfts: NextPage = () => {
  const { accountNfts } = useAccountMintStats()
  // @ts-ignore
  const { InceptionAvatars, InceptionBlackBoxes } = accountNfts

  const renderNfts = () => {
    if (Object.keys(accountNfts).length === 0) {
      return (
        <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
          <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-2xl border-2 border-red-600 p-14 z-50 flex flex-wrap justify-center items-center gap-12">
            <h3>Seems like we need to get you a new identity...</h3>
          </div>
        </div>
      )
    }

    return (
      <div className="flex flex-col h-1/2 my-36 relative justify-center items-center font-inception-ink text-2xl text-inception-taro z-40 overflow-auto">
        <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-4xl max-h-xl border-2 border-red-600 p-14 z-50 flex flex-wrap text-sm justify-center items-center gap-12">
          {(InceptionAvatars || []).map((avatar: any, index: any) => {
            return (
              <div className="flex flex-col text-center" key={index}>
                <img
                  src={avatar.MetadataViewsDisplay.thumbnail.url}
                  className="w-32 h-32 rounded-md hover:scale-110 duration-300"
                  alt=""
                ></img>
                <h3>{`Inception Avatar #${JSON.stringify(
                  avatar?.serialNumber
                )}`}</h3>
              </div>
            )
          })}
          {(InceptionBlackBoxes || []).map((box: any, index: any) => {
            return (
              <div className="flex flex-col text-center" key={index}>
                <img
                  src={box.MetadataViewsDisplay.thumbnail.url}
                  className="w-32 h-32 rounded-md hover:scale-110 duration-300"
                  alt=""
                ></img>
                <h3>{`Inception Black Box #${JSON.stringify(
                  box?.serialNumber
                )}`}</h3>
              </div>
            )
          })}
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
      {renderNfts()}
    </div>
  )
}

export default MyInceptionNfts
