/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const CornerStore: React.FC = () => {
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
      `We are parkourers, skaters, runners, and skydivers on web3. We discovered the new world of decentralization though the most dangerous but undervalued adventures. We truly believe the new era while the uncertain majority is still in doubt.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderValuesText = () => {
    const contents: string[] = [
      `Our vision is to create a story-driven retro futuristic brand for the web3 community.`,
      `Every building block starts with the community and ends with the community.`,
      `We prioritize the brand, starting from extremely high quality art to bridge the gap between IRL brand and web3 virtual identities.`,
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

export default CornerStore
