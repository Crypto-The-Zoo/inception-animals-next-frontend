/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import TextOnBanner from "./coreui/TextOnBanner"
import Subway from "./Subway"
import SubwayVideo from "./SubwayVideo"

const BluePrint: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [activeSession, setActiveSession] = useState<string>("subway")

  const toggleShowModal = () => {
    setShowModal(!showModal)
  }

  const getContentFromSection = (section: string) => {
    switch (section) {
      default:
        return { primary: <Subway />, secondary: <SubwayVideo /> }
    }
  }

  const renderRoadMapDescription = () => {
    return (
      <div className="relative m-2 mt-6 font-inception lg:pr-72 text-xl">
        <p className="text-inception-light-brown my-4">
          {`We are a team with legit engineers and designers who are passionate about building the next generation of NFTs in the crypto ecosystem.`}
        </p>
        <p className="text-inception-light-brown my-4">
          {`That's why we've decided to make the whitepaper an engineering roadmap for the community.`}
        </p>
      </div>
    )
  }

  const renderBlueprintCenter = () => {
    return (
      <div className="flex flex-col justify-center items-center absolute">
        <a
          href="#"
          className="flex w-[22vw] h-[22vw] absolute content-center bg-bp-center bg-contain bg-no-repeat items-center justify-center font-inception text-inception-off-white z-10"
        >
          <div className="text-center uppercase text-sm bg-inception-light-green rounded-md p-2">
            subway
          </div>
        </a>
      </div>
    )
  }

  const renderBlueprintLeft = () => {
    return (
      <a
        href="#"
        className="grid absolute w-full h-full max-h-[80vh] items-center justify-center bg-bp-left bg-cover border-2 border-inception-light-green hover:border-inception-green hover:bg-bp-left-solid"
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "2",
          gridRowStart: "1",
          gridRowEnd: "3",
        }}
        onClick={toggleShowModal}
      >
        <div className="text-center uppercase text-lg bg-inception-light-green rounded-md p-2 text-inception-green font-bold font-inception-ink">
          subway
        </div>
      </a>
    )
  }

  const renderBlueprintRight = () => {
    return (
      <a
        href="#"
        className="grid absolute w-full h-full max-h-[80vh] items-center justify-center bg-bp-right bg-cover border-2 border-inception-light-green hover:border-inception-green"
        style={{
          gridColumnStart: "4",
          gridColumnEnd: "5",
          gridRowStart: "1",
          gridRowEnd: "3",
        }}
      >
        <div className="text-center uppercase text-sm bg-inception-light-green rounded-md p-2 text-inception-green font-bold">
          right placeholder
        </div>
      </a>
    )
  }

  const renderBlueprintTopLeft = () => {
    return (
      <a
        href="#"
        className="grid absolute w-full h-full max-h-[40vh] items-center justify-center bg-bp-tl bg-cover border-2 border-inception-light-green hover:border-inception-green"
        style={{
          gridColumnStart: "2",
          gridColumnEnd: "3",
          gridRowStart: "1",
          gridRowEnd: "2",
        }}
      >
        <div className="text-center uppercase text-sm bg-inception-light-green rounded-md p-2 text-inception-green font-bold">
          black market
        </div>
      </a>
    )
  }

  const renderBlueprintTopRight = () => {
    return (
      <a
        href="#"
        className="grid absolute w-full h-full max-h-[40vh] items-center justify-center bg-bp-tr bg-cover border-2 border-inception-light-green hover:border-inception-green"
        style={{
          gridColumnStart: "3",
          gridColumnEnd: "4",
          gridRowStart: "1",
          gridRowEnd: "2",
        }}
      >
        <div className="text-center uppercase text-sm bg-inception-light-green rounded-md p-2 text-inception-green font-bold">
          public toilet
        </div>
      </a>
    )
  }

  const renderBlueprintBottomLeft = () => {
    return (
      <a
        href="#"
        className="grid absolute w-full h-full max-h-[40vh] items-center justify-center bg-bp-bl bg-cover border-2 border-inception-light-green hover:border-inception-green"
        style={{
          gridColumnStart: "2",
          gridColumnEnd: "3",
          gridRowStart: "2",
          gridRowEnd: "3",
        }}
      >
        <div className="text-center uppercase text-sm bg-inception-light-green rounded-md p-2 text-inception-green font-bold">
          bar
        </div>
      </a>
    )
  }

  const renderBlueprintBottomRight = () => {
    return (
      <a
        href="#"
        className="grid absolute w-full h-full max-h-[40vh] items-center justify-center bg-bp-br bg-cover border-2 border-inception-light-green hover:border-inception-green"
        style={{
          gridColumnStart: "3",
          gridColumnEnd: "4",
          gridRowStart: "2",
          gridRowEnd: "3",
        }}
      >
        <div className="text-center uppercase text-sm bg-inception-light-green rounded-md p-2 text-inception-green font-bold">
          corner store
        </div>
      </a>
    )
  }

  const renderGraphLayout = () => {
    return (
      <div className="flex absolute items-center justify-center">
        {renderBlueprintCenter()}

        <div
          className="relative grid w-[80vw] h-[40vw] items-center justify-center gap-4"
          style={{
            gridAutoColumns: "1fr",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          {renderBlueprintLeft()}
          {renderBlueprintTopLeft()}
          {renderBlueprintTopRight()}
          {renderBlueprintBottomLeft()}
          {renderBlueprintBottomRight()}
          {renderBlueprintRight()}
        </div>
      </div>
    )
  }

  const renderActiveSession = () => {
    const renderTopPanel = () => {
      return (
        <div className="flex h-14 justify-between mt-4 border-b-2 border-inception-red">
          <div className="font-inception-ink text-2xl">{activeSession}</div>
          <div className="font-inception-ink text-lg">
            <div
              className="flex items-center bg-inception-red rounded-md p-2 gap-2 cursor-pointer"
              onClick={toggleShowModal}
            >
              <div className="text-inception-off-white">back to blueprint</div>
              <FontAwesomeIcon
                icon={faWindowClose}
                className="w-6 h-6 text-inception-off-white"
              />
            </div>
          </div>
        </div>
      )
    }

    const renderBottomPanel = () => {
      return (
        <div
          className="grid h-[88%]"
          style={{
            gridAutoColumns: "1fr",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          <div
            className="overflow-auto my-4"
            style={{
              gridColumnStart: "1",
              gridColumnEnd: "2",
              gridRowStart: "1",
              gridRowEnd: "3",
            }}
          >
            {getContentFromSection(activeSession).primary}
          </div>
          <div
            className="grid items-center justify-center"
            style={{
              gridColumnStart: "2",
              gridColumnEnd: "3",
              gridRowStart: "1",
              gridRowEnd: "3",
            }}
          >
            {getContentFromSection(activeSession).secondary}
          </div>
        </div>
      )
    }

    return (
      <div
        className={`absolute w-[80vw] h-[40vw] items-center opacity-100 border-t-8 border-b-8 bg-inception-off-white bg-opacity-60 backdrop-blur-sm transition-all animate-fadeIn duration-75 z-40 border-inception-red ${
          showModal ? "" : "hidden"
        }`}
      >
        {renderTopPanel()}
        {renderBottomPanel()}
      </div>
    )
  }

  return (
    <div className="mt-24 lg:mt-32 relative h-full pb-40 w-screen">
      <section className="font-arcane px-12 lg:px-24 flex flex-col">
        <h1 className="uppercase font-inception text-2xl text-inception-light-brown">
          blueprint
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          [Designed By mad scientists and engineers
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          yours to discover]
        </h1>
        <br></br>
      </section>

      <section className="font-arcane px-12 lg:px-24 flex flex-col">
        {TextOnBanner({ content: "an engineering style roadmap" })}
        {renderRoadMapDescription()}
      </section>

      <section className="px-12 lg:px-24 my-6 relative h-[40vw] max-h-[80vh] flex">
        {renderGraphLayout()}
        {renderActiveSession()}
      </section>
    </div>
  )
}

export default BluePrint
