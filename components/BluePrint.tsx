/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import Subway from "./blueprints/Subway"
import SubwayVideo from "./SubwayVideo"
import BlackMarket from "./blueprints/BlackMarket"
import TheStreet from "./blueprints/TheStreet"
import Community from "./blueprints/Community"

const BluePrint: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [activeSession, setActiveSession] = useState<string>("subway")

  const toggleShowModal = (activeSession: string | null = null) => {
    setShowModal(!showModal)
    if (activeSession) setActiveSession(activeSession)
  }

  const getContentFromSection = (section: string) => {
    switch (section) {
      case "community":
        return {
          primary: <Community />,
          secondary: "bg-bp-center",
        }
      case "vision & value":
        return {
          primary: <TheStreet />,
          secondary: "bg-bp-center",
        }
      case "black market":
        return {
          primary: <BlackMarket />,
          secondary: "bg-bp-tl",
        }
      case "corner store":
        return {
          primary: <BlackMarket />,
          secondary: "bg-bp-tr",
        }

      default:
        return { primary: <Subway />, secondary: <SubwayVideo /> }
    }
  }

  const bluePrints = [
    {
      index: "00. ",
      name: "vision & value",
      gridCss: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      gridCssSm: "col-start-1 col-end-2 row-start-1 row-end-2",
      backgroundImg: "bg-bp-left",
    },
    {
      index: "02. ",
      name: "inception avatar",
      gridCss: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3",
      gridCssSm: "col-start-2 col-end-3 row-start-1 row-end-2",
      backgroundImg: "bg-bp-right",
    },
    {
      index: "03. ",
      name: "black market",
      gridCss: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      gridCssSm: "col-start-1 col-end-2 row-start-2 row-end-3",
      backgroundImg: "bg-bp-tl",
    },
    {
      index: "0x. ",
      name: "the bathroom",
      gridCss: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
      gridCssSm: "col-start-2 col-end-3 row-start-2 row-end-3",
      backgroundImg: "bg-bp-tr",
    },
    {
      index: "0x. ",
      name: "bar",
      gridCss: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
      gridCssSm: "col-start-1 col-end-2 row-start-3 row-end-4",
      backgroundImg: "bg-bp-bl",
    },
    {
      index: "0x. ",
      name: "corner store",
      gridCss: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
      gridCssSm: "col-start-2 col-end-3 row-start-3 row-end-4",
      backgroundImg: "bg-bp-br",
    },
  ]

  const renderBluePrint = (bluePrintConfig: {
    index: string
    name: string
    backgroundImg: string
    gridCss: string
    gridCssSm: string
  }) => {
    return (
      <a
        href="#"
        className={`grid absolute w-full h-full max-h-[80vh] items-center justify-center ${bluePrintConfig.backgroundImg} bg-cover border-2 border-inception-light-green hover:border-inception-green
        ${bluePrintConfig.gridCssSm} ${bluePrintConfig.gridCss}`}
        onClick={() => toggleShowModal(bluePrintConfig.name)}
      >
        <div
          className="text-center uppercase text-lg bg-inception-light-green rounded-md p-2 text-inception-green font-bold font-inception-ink"
          onClick={() => toggleShowModal(bluePrintConfig.name)}
        >
          {`${bluePrintConfig.index} ${bluePrintConfig?.name}`}
        </div>
      </a>
    )
  }

  const renderBlueprintCenter = () => {
    return (
      <div
        className="flex flex-col justify-center items-center absolute z-40"
        onClick={() => toggleShowModal("community")}
      >
        <a
          href="#"
          className="flex w-[44vw] h-[44vw] lg:w-[22vw] lg:h-[22vw] absolute content-center bg-bp-center bg-contain bg-no-repeat items-center justify-center font-inception text-inception-off-white z-40 hover:bg-bp-center-solid"
        >
          <div className="text-center uppercase text-lg bg-inception-light-green rounded-md p-2 text-inception-green font-bold font-inception-ink">
            01. community
          </div>
        </a>
      </div>
    )
  }

  const renderGraphLayout = () => {
    return (
      <div className="flex absolute items-center justify-center">
        {renderBlueprintCenter()}
        <div className="relative grid w-[90vw] h-[180vw] lg:w-[80vw] lg:h-[40vw] lg:max-h-[80vh] items-center justify-center gap-4 grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2">
          {bluePrints.map((bluePrint, index) => {
            return <>{renderBluePrint(bluePrint)}</>
          })}
        </div>
      </div>
    )
  }

  const renderActiveSession = () => {
    const renderTopPanel = () => {
      return (
        <div className="flex h-14 justify-between py-8 border-b-2 border-inception-red items-center">
          <div className="font-inception-ink text-2xl">{activeSession}</div>
          <div className="font-inception-ink text-lg">
            <div
              className="flex items-center bg-inception-red rounded-md p-2 gap-2 cursor-pointer"
              onClick={() => toggleShowModal()}
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
      const renderSecondaryContent = () => {
        const secondarySection = getContentFromSection(activeSession).secondary

        if (typeof secondarySection === "string") {
          return (
            <div
              className={`grid items-center justify-center ${secondarySection} bg-no-repeat w-full h-full bg-contain col-start-2 col-end-3 row-start-1 row-end-3`}
            ></div>
          )
        } else {
          return (
            <div className="grid items-center justify-center col-start-2 col-end-3 row-start-1 row-end-3">
              {getContentFromSection(activeSession).secondary}
            </div>
          )
        }
      }

      return (
        <div className="grid h-[88%] grid-cols-2 grid-rows-2">
          <div
            className="overflow-auto my-4
          col-start-1 col-end-3 row-start-1 row-end-3
          md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3"
          >
            {getContentFromSection(activeSession).primary}
          </div>
          <div
            className="
          hidden
          md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3
          "
          >
            {renderSecondaryContent()}
          </div>
        </div>
      )
    }

    return (
      <div
        className={`absolute w-[90vw] h-[180vw] lg:w-[80vw] lg:h-[40vw] items-center opacity-100 border-t-8 border-b-8 bg-inception-off-white bg-opacity-60 backdrop-blur-sm transition-all animate-fadeIn duration-75 z-40 border-inception-red ${
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
      <section className="font-inception-ink px-12 lg:px-24 flex flex-col">
        <h1 className="uppercase font-inception-ink text-2xl text-inception-light-brown">
          blueprint
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          roadmap by the mad designers & engineers
        </h1>
        <br></br>
      </section>

      <section className="px-4 lg:px-24 my-6 relative h-[40vw] max-h-[80vh] flex">
        {renderGraphLayout()}
        {renderActiveSession()}
      </section>
    </div>
  )
}

export default BluePrint
