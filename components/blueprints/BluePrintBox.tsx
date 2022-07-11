/* eslint-disable @next/next/no-img-element */

import { useState } from "react"

interface blueprintBoxIntake {
  bluePrintConfig: {
    index: string
    name: string
    backgroundImg: string
    gridCss: string
    gridCssSm: string
    imgPath: string
    imgPosCss: string
  }
  toggleShowModal: (name: string) => void
}

const BluePrintBox: React.FC<blueprintBoxIntake> = ({
  bluePrintConfig,
  toggleShowModal,
}) => {
  const [imageCss, setImageCss] = useState<string>("opacity-80")
  const [bgImageCss, setBgImageCss] = useState<string>("bg-opacity-100")
  const [textBgCss, setTextBgCss] = useState<string>("bg-inception-light-green")
  const [textCss, setTextCss] = useState<string>("text-inception-green")

  return (
    <a
      href="#"
      className={`grid absolute w-full h-full max-h-[80vh] items-center justify-center ${bluePrintConfig.backgroundImg} ${bgImageCss} bg-cover border-none
      ${bluePrintConfig.gridCssSm} ${bluePrintConfig.gridCss}`}
      onClick={(e) => {
        e.preventDefault()
        toggleShowModal(bluePrintConfig.name)
        return false
      }}
      onMouseOver={() => {
        setImageCss("opacity-100")
        setBgImageCss("bg-[#dddbd1]")
        setTextBgCss("bg-inception-taro")
        setTextCss("text-inception-off-white")
      }}
      onMouseOut={() => {
        setImageCss("opacity-80 bg-opacity-80")
        setBgImageCss("bg-opacity-100")
        setTextBgCss("bg-inception-light-green")
        setTextCss("text-inception-green")
      }}
    >
      <div
        className={`text-center uppercase text-xs md:text-lg  rounded-md ${textBgCss} p-2 backdrop-blur-sm ${textCss} font-bold font-inception-ink z-10 absolute bottom-0 left-0 md:bottom-5 md:left-5`}
        onClick={() => toggleShowModal(bluePrintConfig.name)}
      >
        {`${bluePrintConfig.index} ${bluePrintConfig?.name}`}
      </div>
      <div
        className={`absolute -right-3 -top-3 md:top-auto md:-bottom-5 md:-right-5 ${imageCss} transition-all animate-fadeIn`}
      >
        <img
          src={bluePrintConfig.imgPath}
          alt=""
          className={`${bluePrintConfig.imgPosCss}`}
        ></img>
      </div>
    </a>
  )
}

export default BluePrintBox
