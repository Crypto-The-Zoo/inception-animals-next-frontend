/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import useAccountMintStats from "../config/cadence/hooks/useAccountMintStats";
import Countdown from "react-countdown";
import Link from "next/link";

const MyInceptionNfts: NextPage = () => {
  const { accountNfts } = useAccountMintStats();
  // @ts-ignore
  const { InceptionAvatars, InceptionBlackBoxes } = accountNfts;

  const renderNfts = () => {
    if (Object.keys(accountNfts).length === 0) {
      return (
        <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
          <div className="text-center rounded-md relative max-w-2xl p-14 z-50 flex flex-wrap justify-center items-center gap-12">
            <h3>Seems like we need to get you a new identity...</h3>
          </div>
          <img src="/images/skater.png" alt="skater" className="absolute bottom-0 right-0 opacity-40" />
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/mint">
            <button className="text-6xl font-bold z-50 px-8 py-4 bg-inception-light-green rounded-xl">
              Mint
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="h-full w-full my-36 px-6bg-inception-off-white">
        <section className="font-inception-ink px-4 flex flex-col">
          <h1 className="uppercase font-inception-ink text-2xl text-inception-light-brown">
            WALLET
          </h1>
          <h1 className="uppercase text-4xl text-inception-brown">
            [INCEPTION IDENTITY]
          </h1>
          <br></br>
        </section>
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          }}
        >
          {(InceptionAvatars || []).map((avatar: any, index: any) => {
            return (
              <div
                className="flex flex-col text-center gap-4 relative duration-300 px-4 py-4 rounded-xl"
                key={index}
              >
                <img
                  src={avatar.MetadataViewsDisplay.thumbnail.url}
                  className="w-full rounded-md aspect-square"
                  alt=""
                />
                <div className="flex gap-2 flex-col items-start ">
                  <h3 className="font-inception-ink font-bold text-2xl">{`Inception Avatar #${JSON.stringify(
                    avatar?.serialNumber
                  )}`}</h3>

                  <div className="flex w-full items-center justify-between">
                    <span className="font-inception-ink text-lg">
                      Reveals In
                    </span>
                    <div className="bg-inception-blue px-2 py-1 rounded-lg min-w-[75px]">
                      <Countdown
                        className="font-inception-ink-italic text-md"
                        date={new Date("2022-10-10T01:00:00Z")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {(InceptionBlackBoxes || []).map((box: any, index: any) => {
            return (
              <div
                className="flex flex-col text-center gap-4 relative duration-300 px-4 py-4 rounded-xl"
                key={index}
              >
                <img
                  src={box.MetadataViewsDisplay.thumbnail.url}
                  className="w-full rounded-md aspect-square"
                  alt=""
                />
                <div className="flex gap-2 flex-col items-start">
                  <h3 className="font-inception-ink font-bold text-2xl">{`Inception Black Box #${JSON.stringify(
                    box?.serialNumber
                  )}`}</h3>
                  <div className="gap-2 bg-inception-red px-2 py-1 rounded-lg min-w-[75px]">
                    <h3 className="font-inception-ink-italic text-md">
                      TOP SECRET 🤫
                    </h3>
                  </div>
                </div>
              </div>
            );

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
            );
          })}
        </div>
      </div>
    );

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
            );
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
            );
          })}
        </div>
      </div>
    );
  };

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
  );
};

export default MyInceptionNfts;
