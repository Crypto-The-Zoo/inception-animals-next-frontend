/* eslint-disable @next/next/no-img-element */

import { useState } from "react"
import DisplayButtonDouble from "./coreui/DisplayButtonDouble"

const Parchment: React.FC = () => {

  const [activeSection, setActiveSection] = useState("THE METAVERSE")

  const sections = [
    { indexContent: "01.", content: "THE METAVERSE" },
    { indexContent: "02.", content: "SUBWAY" },
    { indexContent: "03.", content: "VIBE" },
    { indexContent: "04.", content: "THE GRUDGE" },
  ]

  const section2Title = {
    "BRAND": ["[FROM THE THEME", "TO THE BRAND]"], 
  }

  const sectionToDisplay = {
    
  }

  const renderSelectionBoxes = () => {
    return (
      <div className="flex flex-col gap-8 ml-6">
        {sections.map((section, index) => (
          <DisplayButtonDouble
            key={index}
            indexContent={section.indexContent}
            content={section.content}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        ))}
      </div>
    )
  }

  const renderHeaderText = () => {
    return (
      <div className="flex flex-col justify-end mb-8">
        <h1 className="font-arcane text-4xl text-inception-off-white">
          [FROM THE THEME
        </h1>
        <h1 className="font-arcane text-4xl text-inception-off-white">
          {" "}
          TO THE BRAND]
        </h1>
      </div>
    )
  }

  const renderSelectedFieldInfo = (props: any) => {
    return (
      <div className="flex flex-col font-arcane text-xl gap-6">
        <p>
          Inception Animals is a story-driven retrofuturistic metaverse brand
          built on the Flow blockchain.
        </p>
        <p>
          A collection of 3333 avatars for different animals that give you a unique
          identity to the universe driven by a never-ending grudge between
          generations of merits, soldiers, and inventions going against each
          other in two once peaceful cities: Ascos and Lucinia.
        </p>
        <p>
          Inception Animals is a metaverse brand, it starts with high-quality
          avatars from our beloved artists from well-known TV shows such as Rick
          and Morty, Star Trek Lower Decks, F is for family, etc. And much more
          that will be revealed over time.
        </p>
        <p>
          The universe is a corner of the internet where we choose the identity
          we never got a chance to obtain in reality and extend it to the
          blurring edge of the physical and digital worlds.
        </p>
      </div>
    )
  }

  return (
    <div
      className="-mt-16 z-10 relative bg-parchment-plain bg-no-repeat bg-scroll w-full bg-cover py-24 border-black border-2"
      style={{
        backgroundSize: "100% auto",
      }}
    >
      {/* <img src="/images/parchment.png" alt="parchment" className="w-full" /> */}
      <div className="flex justify-center items-start border-2 border-black max-w-6xl self-center mx-auto my-32 gap-10">
        {renderSelectionBoxes()}
        <div className="flex flex-col">
          {renderHeaderText()}
          {renderSelectedFieldInfo()}
        </div>
      </div>
    </div>
  )
}

export default Parchment
