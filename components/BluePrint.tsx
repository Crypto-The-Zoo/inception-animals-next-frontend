/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import TextOnBanner from "./coreui/TextOnBanner"
import Subway from "./Subway"
import SubwayVideo from "./SubwayVideo"
import BlackMarket from "./BlackMarket"
import TheStreet from "./TheStreet"

const BluePrint: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [activeSession, setActiveSession] = useState<string>("subway")

  const toggleShowModal = (activeSession: string | null = null) => {
    setShowModal(!showModal)
    if (activeSession) setActiveSession(activeSession)
  }

  const getContentFromSection = (section: string) => {
    switch (section) {
      case "the street":
        return {
          primary: <TheStreet />,
          secondary: "bg-bp-center",
        }
      case "black market":
        return {
          primary: <BlackMarket />,
          secondary: "bg-bp-tl",
        }

      default:
        return { primary: <Subway />, secondary: <SubwayVideo /> }
    }
  }

  const bluePrints = [
    { name: "subway", gridPos: [1, 2, 1, 3], backgroundImg: "bg-bp-left" },
    {
      name: "right placeholder",
      gridPos: [4, 5, 1, 3],
      backgroundImg: "bg-bp-right",
    },
    { name: "black market", gridPos: [2, 3, 1, 2], backgroundImg: "bg-bp-tl" },
    { name: "the washroom", gridPos: [3, 4, 1, 2], backgroundImg: "bg-bp-tr" },
    { name: "bar", gridPos: [2, 3, 2, 3], backgroundImg: "bg-bp-bl" },
    { name: "corner store", gridPos: [3, 4, 2, 3], backgroundImg: "bg-bp-br" },
  ]

  const renderBluePrint = (bluePrintConfig: {
    name: string
    gridPos: number[]
    backgroundImg: string
  }) => {
    return (
      <a
        href="#"
        className={`grid absolute w-full h-full max-h-[80vh] items-center justify-center ${bluePrintConfig.backgroundImg} bg-cover border-2 border-inception-light-green hover:border-inception-green hover:${bluePrintConfig.backgroundImg}-solid`}
        style={{
          gridColumnStart: bluePrintConfig?.gridPos[0],
          gridColumnEnd: bluePrintConfig?.gridPos[1],
          gridRowStart: bluePrintConfig?.gridPos[2],
          gridRowEnd: bluePrintConfig?.gridPos[3],
        }}
        onClick={() => toggleShowModal(bluePrintConfig.name)}
      >
        <div
          className="text-center uppercase text-lg bg-inception-light-green rounded-md p-2 text-inception-green font-bold font-inception-ink"
          onClick={() => toggleShowModal(bluePrintConfig.name)}
        >
          {bluePrintConfig?.name}
        </div>
      </a>
    )
  }

  const renderBlueprintCenter = () => {
    return (
      <div
        className="flex flex-col justify-center items-center absolute z-40"
        onClick={() => toggleShowModal("the street")}
      >
        <a
          href="#"
          className="flex w-[22vw] h-[22vw] absolute content-center bg-bp-center bg-contain bg-no-repeat items-center justify-center font-inception text-inception-off-white z-40 hover:bg-bp-center-solid"
        >
          <div className="text-center uppercase text-lg bg-inception-light-green rounded-md p-2 text-inception-green font-bold font-inception-ink">
            01. the street
          </div>
        </a>
      </div>
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
        <div className="flex h-14 justify-between mt-4 border-b-2 border-inception-red">
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
              className={`grid items-center justify-center ${secondarySection} bg-no-repeat w-full h-full bg-contain`}
              style={{
                gridColumnStart: "2",
                gridColumnEnd: "3",
                gridRowStart: "1",
                gridRowEnd: "3",
              }}
            ></div>
          )
        } else {
          return (
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
          )
        }
      }

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
          {renderSecondaryContent()}
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
      <section className="font-inception-ink px-12 lg:px-24 flex flex-col">
        <h1 className="uppercase font-inception-ink text-2xl text-inception-light-brown">
          blueprint
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          roadmap by the mad scientists
        </h1>
        <br></br>
      </section>

      <section className="px-12 lg:px-24 my-6 relative h-[40vw] max-h-[80vh] flex">
        {renderGraphLayout()}
        {renderActiveSession()}
      </section>
    </div>
  )
}

export default BluePrint
