/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const TheStreet: React.FC = () => {
  const renderRegVideo = () => {
    return (
      <video className="w-screen" muted loop autoPlay={true}>
        <source src={"/videos/subway_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  const renderLeadingText = () => {
    const contents: string[] = [
      `Inception Animals is a culture brand, a unique vibe defined by the web3 community together with mad engineers and designers .`,
      `We are parkourers, skaters, runners, and skydivers of web3. We discover the new world of decentralization through the most dangerous however undervalued adventures. We truly believe in the new era while the uncertain majority is still in doubt.`,
      `In our society, although we may be alone, we may be outcasts, there will always be others we can connect with to create unity and bonds.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderValuesText = () => {
    const contents: string[] = [
      `Every building block starts with the community and ends with the community.`,
      `Offer high-quality art that brings industry-standard and awareness to the NFT space. It’s easy to follow the flow (the trend, not the blockchain, we should always go with the FLOW), but it’s hard to be original yet have a quality that meets an industry-recognized standard. We are lucky to have a Rick and Morty artist to help us brand and pave the universe.`,
      `Every decision and movement goes around the growth of the Flow eco-system, we’ve seen successful brands growing together with the eco-system they reside in from Ethereum and Solana. Inception Animals will take steps in order to not only build the brand together with the Inception Animals fams but also to improve the diversity of the Flow eco-system as a long-term vision.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "inception animals is a web3 culture brand",
        })}
        {renderLeadingText()}
        {TextOnBanner({
          content: "values",
        })}
        {renderValuesText()}
      </section>
    </div>
  )
}

export default TheStreet
