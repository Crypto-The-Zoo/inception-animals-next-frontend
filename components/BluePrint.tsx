/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import Subway from "./blueprints/Subway"
import SubwayVideo from "./SubwayVideo"
import BlackMarket from "./blueprints/BlackMarket"
import TheStreet from "./blueprints/TheStreet"
import Community from "./blueprints/Community"
import Airdrop from "./blueprints/Airdrop"
import Teleport from "./blueprints/Teleport"
import TheBathroom from "./blueprints/TheBathroom"
import CornerStore from "./blueprints/CornerStore"

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
          secondary: "/images/pole.png",
        }
      case "outcasts on the street":
        return {
          primary: <TheStreet />,
          secondary: "/images/skater.png",
        }
      case "black market":
        return {
          primary: <BlackMarket />,
          secondary: "/images/airdrop.png",
        }
      case "corner store":
        return {
          primary: <CornerStore />,
          secondary: "/images/merch.png",
        }
      case "airdrop":
        return {
          primary: <Airdrop />,
          secondary: "/images/airdrop.png",
        }
      case "secret mission":
        return {
          primary: <Teleport />,
          secondary: "/images/airdrop.png",
        }
      case "the bathroom":
        return {
          primary: <TheBathroom />,
          secondary: "/images/airdrop.png",
        }

      default:
        return { primary: <Subway />, secondary: <SubwayVideo /> }
    }
  }

  const bluePrints = [
    {
      index: "meta. ",
      name: "outcasts on the street",
      gridCss: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
      gridCssSm: "col-start-1 col-end-2 row-start-1 row-end-2",
      backgroundImg: "bg-[#eceae1]",
      imgPath: "/images/skater.png",
      imgPosCss: "lg:w-[35vw] lg:max-w-[50vh]",
    },
    {
      index: "infra. ",
      name: "secret mission",
      gridCss: "lg:col-start-2 lg:col-end-5 lg:row-start-3 lg:row-end-4",
      gridCssSm: "col-start-1 col-end-3 row-start-4 row-end-5",
      backgroundImg: "bg-[#eceae1]",
      imgPath: "/images/airdrop.png",
      imgPosCss: " w-[45vw] max-w-[30vh] lg:w-[20vh] lg:max-w-[30vh]",
    },
    {
      index: "01. ",
      name: "community",
      gridCss: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
      gridCssSm: "col-start-1 col-end-2 row-start-2 row-end-3",
      backgroundImg:
        "bg-[#eceae1] bg-pole bg-no-repeat bg-contain bp-right-bottom",
      imgPath: "",
      imgPosCss: "lg:w-[20vh] lg:max-w-[34vh]",
    },
    {
      index: "02. ",
      name: "black market",
      gridCss: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2",
      gridCssSm: "col-start-1 col-end-2 row-start-3 row-end-4",
      backgroundImg: "bg-[#eceae1]",
      imgPath: "/images/wanted.png",
      imgPosCss: "lg:w-[20vh] lg:max-w-[30vh]",
    },
    {
      index: "03. ",
      name: "airdrop",
      gridCss: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
      gridCssSm: "col-start-2 col-end-3 row-start-2 row-end-3",
      backgroundImg: "bg-[#eceae1]",
      imgPath: "/images/airdrop.png",
      imgPosCss: "lg:w-[20vh] lg:max-w-[30vh]",
    },
    {
      index: "04. ",
      name: "the bathroom",
      gridCss: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      gridCssSm: "col-start-2 col-end-3 row-start-1 row-end-2",
      backgroundImg: "bg-[#eceae1]",
      imgPath: "/images/airdrop.png",
      imgPosCss: "lg:w-[20vh] lg:max-w-[30vh]",
    },
    {
      index: "05. ",
      name: "corner store",
      gridCss: "lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3",
      gridCssSm: "col-start-2 col-end-3 row-start-3 row-end-4",
      backgroundImg: "bg-[#eceae1]",
      imgPath: "/images/merch.png",
      imgPosCss: "lg:w-[15vw] lg:max-w-[30vh]",
    },
  ]

  const renderBluePrint = (bluePrintConfig: {
    index: string
    name: string
    backgroundImg: string
    gridCss: string
    gridCssSm: string
    imgPath: string
    imgPosCss: string
  }) => {
    return (
      <a
        href="#"
        className={`grid absolute w-full h-full max-h-[80vh] items-center justify-center ${bluePrintConfig.backgroundImg} bg-cover border-2 border-inception-light-green hover:border-inception-green
        ${bluePrintConfig.gridCssSm} ${bluePrintConfig.gridCss}`}
        onClick={(e) => {
          e.preventDefault()
          toggleShowModal(bluePrintConfig.name)
          return false
        }}
      >
        <div
          className="text-center uppercase text-lg bg-inception-light-green rounded-md p-2 text-inception-green font-bold font-inception-ink z-10 absolute bottom-1 left-1"
          onClick={() => toggleShowModal(bluePrintConfig.name)}
        >
          {`${bluePrintConfig.index} ${bluePrintConfig?.name}`}
        </div>
        <div className={`absolute -bottom-0 -right-0`}>
          <img
            src={bluePrintConfig.imgPath}
            alt=""
            className={`${bluePrintConfig.imgPosCss}`}
          ></img>
        </div>
      </a>
    )
  }

  // const renderBlueprintCenter = () => {
  //   return (
  //     <div
  //       className="flex flex-col justify-center items-center absolute z-40"
  //       onClick={(e) => {
  //         e.preventDefault()
  //         toggleShowModal("community")
  //         return false
  //       }}
  //     >
  //       <a
  //         href="#"
  //         className="flex w-[44vw] h-[44vw] lg:w-[22vw] lg:h-[22vw] absolute content-center bg-bp-center bg-contain bg-no-repeat items-center justify-center font-inception text-inception-off-white z-40 rounded-full border-2 border-inception-taro"
  //       >
  //         <div className="text-center uppercase text-lg bg-inception-light-green rounded-md p-2 text-inception-green font-bold font-inception-ink">
  //           01. community
  //         </div>
  //       </a>
  //     </div>
  //   )
  // }

  const renderGraphLayout = () => {
    return (
      <div className="flex relative items-center justify-center m-auto">
        {/* {renderBlueprintCenter()} */}
        <div className="relative grid w-[90vw] h-[180vw] lg:w-[95vw] lg:h-[50vw] lg:max-h-[70vh] max-w-[2048px] items-center justify-center gap-[2px] grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-3">
          {bluePrints.map((bluePrint, index) => {
            return <>{renderBluePrint(bluePrint)}</>
          })}
        </div>
        {renderActiveSession()}
      </div>
    )
  }

  const renderActiveSession = () => {
    const renderTopPanel = () => {
      return (
        <div className="flex h-14 justify-between py-8 border-b-2 border-inception-taro items-center">
          <div className="font-inception-ink text-2xl">{activeSession}</div>
          <div className="font-inception-ink text-lg">
            <div
              className="flex items-center bg-inception-taro rounded-md p-2 gap-2 cursor-pointer"
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
            <img
              src={secondarySection}
              alt=""
              className="h-full object-cover"
            ></img>
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
          items-center justify-center
          "
          >
            {renderSecondaryContent()}
          </div>
        </div>
      )
    }

    return (
      <div
        className={`absolute w-[90vw] h-[180vw] lg:w-[95vw] lg:h-[50vw] lg:max-h-[70vh] max-w-[2048px] items-center opacity-100 border-t-8 border-b-8 bg-inception-off-white bg-opacity-60 backdrop-blur-sm transition-all animate-fadeIn duration-75 z-40 border-inception-red ${
          showModal ? "" : "hidden"
        }`}
      >
        {renderTopPanel()}
        {renderBottomPanel()}
      </div>
    )
  }

  return (
    <div className="mt-24 lg:pt-12 relative h-full pb-40">
      <section className="font-inception-ink px-12 lg:px-4 flex flex-col">
        <h1 className="uppercase font-inception-ink text-2xl text-inception-light-brown">
          blueprint
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          roadmap by the mad designers & engineers
        </h1>
        <br></br>
      </section>

      <div className="px-4 my-6 relative h-[40vw] max-h-[80vh] flex lg:mt-4">
        {renderGraphLayout()}
        {/* {renderActiveSession()} */}
      </div>
    </div>
  )
}

export default BluePrint
