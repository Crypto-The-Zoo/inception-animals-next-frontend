/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const BlackMarket: React.FC = () => {
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
      `The black market is on the grapevine, full of widely accepted unspoken rules for identity traders.`,
      `You may find yourself owning an Inception BlackBox or two out of nowhere. It's a hidden gem from the brotherhood of tinkers. Shissh!! I heard that it opens up when the merge happens!`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "On the grapevine",
        })}
        {renderLeadingText()}
      </section>
    </div>
  )
}

export default BlackMarket
