/* eslint-disable @next/next/no-img-element */

const BluePrint: React.FC = () => {

  const renderTextWithBg = ({ content }: { content: string }) => {
    return (
      <div className="relative m-2 mt-6">
        <p className="text-inception-off-white relative z-10">{content}</p>
        <img
          className="absolute -left-2 -top-1"
          src="/icons/green_box.svg"
          alt=""
        ></img>
      </div>
    )
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

  const renderGraphCenter = () => {
    return (
      <div className="flex">
        <a
          href="#"
          className="flex border-2 border-[#7eaeff] w-[22vw] h-[22vw] absolute content-center bg-bp-center bg-contain bg-no-repeat items-center justify-center font-inception text-inception-off-white"
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
        className="grid absolute w-full h-full max-h-[80vh] items-center justify-center bg-bp-left bg-cover border-2 border-inception-light-green hover:border-inception-green"
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "2",
          gridRowStart: "1",
          gridRowEnd: "3",
        }}
      >
        <div className="text-center uppercase text-sm bg-inception-light-green rounded-md p-2 text-inception-green font-bold">
          left placeholder
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
    )
  }

  return (
    <div className="mt-24 lg:mt-32 relative h-full pb-40 w-screen">
      <section className="font-arcane px-12 lg:px-24 flex flex-col">
        <h1 className="uppercase font-inception text-2xl text-inception-light-brown">
          blueprint
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          [A Universe Designed By The Community
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          Fulfilled by mad scientists and engineers]
        </h1>
        <br></br>
      </section>

      {/* {renderGraphCenter()} */}
      <section className="px-12 lg:px-24 flex flex-col">
        {renderGraphLayout()}
      </section>

      <section className="font-arcane px-12 lg:px-24 flex flex-col">
        {renderTextWithBg({ content: "an engineering style roadmap" })}
        {renderRoadMapDescription()}
      </section>
    </div>
  )
}

export default BluePrint
