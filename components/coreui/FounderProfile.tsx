/* eslint-disable @next/next/no-img-element */

const FounderProfile: React.FC<{
  name: string
  title: string
  description: string
  extraDescription: string
  imgSrc: string
}> = ({ name, title, description, extraDescription, imgSrc }) => {
  return (
    <div className="relative items-center flex flex-col font-inception justify-around p-4 self-start w-full md:w-1/2 lg:w-1/2">
      <div className="relative block">
        <img
          src={`images/${imgSrc}`}
          alt=""
          className="rounded-md hover:scale-110 transform duration-300"
        />
      </div>
      <div className="flex flex-col">
        <a className="text-inception-brown mt-4 text-xl">{name}</a>
        <a className="text-inception-light-brown text-lg">{title}</a>
        <p className="text-inception-light-brown my-2 text-sm">{description}</p>
        <p className="text-inception-light-brown text-sm">{extraDescription}</p>
      </div>
    </div>
  )
}

export default FounderProfile
