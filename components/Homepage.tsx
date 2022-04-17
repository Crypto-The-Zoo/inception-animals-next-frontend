import { useState } from "react"

/* eslint-disable @next/next/no-img-element */
const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState<boolean>(false)
  const [displayImageSrc, setDisplayImageSrc] = useState<string>(
    "/images/banner_masked.png"
  )

  return (
    <div
      className="flex items-center h-screen bg-cyber-hippo bg-no-repeat bg-cover sm:bg-none"
      style={{
        backgroundPosition: "50% 100%",
      }}
    >
      <div className="hidden sm:block m-auto sm:h-[500px] max-w-full justify-center">
        <div className="h-6">
          <h1 className="text-inception-green text-xl font-inception m-auto">
            {displayText
              ? "Yo stranger, welcome to Zion, have you heard of the World Trigger?"
              : " "}
          </h1>
        </div>
        <img
          className="w-full max-h-full animate-fadeIn"
          src={displayImageSrc}
          alt=""
          onMouseOver={(e) => {
            // e.currentTarget.src = "/images/banner.png"
            setDisplayImageSrc("/images/banner.png")
            setDisplayText(true)
          }}
          onMouseOut={(e) => {
            // e.currentTarget.src = "/images/banner_masked.png"
            setDisplayImageSrc("/images/banner_masked.png")
            setDisplayText(false)
          }}
        />
        <h1 className="font-inception text-inception-gray lg:-ml-20 relative z-20 text-md">
          A retro futuristic metaverse brand
        </h1>
      </div>
      <div className="flex items-center gap-4 absolute bottom-3 left-3">
        <div className="flex flex-col text-right text-xs text-inception-gray font-inception">
          <a>© 2022 Inception Animals</a>
          <a>All Rights Reserved.</a>
        </div>

        <div className="hidden gap-4 md:flex">
          <img className="h-8" src="/icons/dapper.png" alt=""></img>
          <img className="h-8" src="/icons/nftgenius.png" alt=""></img>
          <img className="h-8" src="/icons/gaia.png" alt=""></img>
          <img className="h-8" src="/icons/flunks.png" alt=""></img>
          <img className="h-8" src="/icons/on_flow.png" alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default HomePage
