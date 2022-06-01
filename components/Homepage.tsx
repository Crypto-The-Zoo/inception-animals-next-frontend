import { useState } from "react"

/* eslint-disable @next/next/no-img-element */
const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState<boolean>(false)
  const [bannerSrc, setBannerSrc] = useState<string>("/images/banner.png")

  return (
    <div
      className="flex items-center h-screen bg-cyber-hippo bg-no-repeat bg-cover sm:bg-none"
      style={{
        backgroundPosition: "50% 100%",
      }}
    >
      <div className="hidden sm:block m-auto sm:h-[500px] max-w-full justify-center">
        <div className="h-6 mb-4 relative">
          <h1
            className={`text-inception-green text-xl font-inception m-auto text-center md:text-left lg:-ml-24 ${
              displayText ? "opacity-100" : "opacity-0"
            }`}
          >
            Nice to see ya strangers on the subway, to the black market?
          </h1>
        </div>
        <div className="relative opacity-100 transform-all duration-200 z-10">
          <img
            className="w-[100vh] max-h-[80vh]"
            src={"/images/banner.png"}
            alt=""
          />

          <img
            className="w-[100vh] max-h-[80vh] hover:opacity-0 transform-all duration-200 z-40 absolute left-0 top-0"
            src={"/images/banner_masked.png"}
            alt=""
            onMouseOver={(e) => {
              setDisplayText(true)
            }}
            onMouseOut={(e) => {
              setDisplayText(false)
            }}
          />
        </div>
        <div className="relative">
          <h1 className="font-inception text-inception-gray lg:-ml-20 relative z-20 text-md mt-4">
            A retro futuristic metaverse brand
          </h1>
          {/* <div className="absolute bottom-12 -left-6 w-96 z-50">
            <img src="/images/skater.png" alt=""></img>
          </div> */}
        </div>
      </div>
      <div className="flex items-center gap-4 absolute bottom-3 left-3">
        <div className="flex flex-col text-right text-xs text-inception-gray font-inception">
          <a>© 2022 Ube Studios Inc.</a>
          <a>All Rights Reserved.</a>
        </div>

        {/* <div className="hidden gap-4 md:flex">
          <img className="h-8" src="/icons/dapper.png" alt=""></img>
          <img className="h-8" src="/icons/nftgenius.png" alt=""></img>
          <img className="h-8" src="/icons/gaia.png" alt=""></img>
          <img className="h-8" src="/icons/flunks.png" alt=""></img>
          <img className="h-8" src="/icons/on_flow.png" alt=""></img>
        </div> */}
      </div>
    </div>
  )
}

export default HomePage
