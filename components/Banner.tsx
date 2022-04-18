/* eslint-disable @next/next/no-img-element */
const Banner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-end lg:flex-row w-full h-full">
      <div className="h-full pt-32 pl-10 pb-10">
        <img
          className="w-full max-h-full"
          src="/images/banner.png"
          alt=""
          onMouseOver={(e) => {
            e.currentTarget.src = "/images/banner.png"
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = "/images/banner_masked.png"
          }}
        />

        <h1 className="font-inception text-inception-gray -ml-20 relative z-20 text-md">
          A retro futuristic metaverse brand
        </h1>
      </div>
      <img src="/images/smoking_hippo.png" alt="" className="h-full" />
    </div>
  )
}

export default Banner
