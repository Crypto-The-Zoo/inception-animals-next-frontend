/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import MintNavigationButtons from "../components/MintNavigationButtons";
import FlowExchange from "../components/FlowExchange";

const Mint: NextPage = () => {
  const [currentMintStageKey, setCurrentMintStageKey] = useState("Flow");

  const renderMintPanelByStage = () => {
    if (currentMintStageKey === "Flow") {
      return <FlowExchange />;
    }
  };

  const renderMintPanel = () => {
    return (
      <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
        <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-2xl border-2 border-red-600 p-14 z-50">
          {/* <MintNavigationButtons
            mintStageKey={currentMintStageKey}
            setCurrentMintStageKey={(key: string) =>
              setCurrentMintStageKey(key)
            }
          /> */}
          {renderMintPanelByStage()}
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
      <div className="mt-48 md:mt-auto">{renderMintPanel()}</div>
    </div>
  );
};

export default Mint;
