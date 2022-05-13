/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "./coreui/InceptionTextBlock"
import TextOnBanner from "./coreui/TextOnBanner"

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
      `The market on the grapevine, fully of widely accepted unspoken rules for identity traders.`,
      `The market is for true believers of the Inception universe to get together and enjoy the revenue shares generated from their real estate and identities`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderPaperhandText = () => {
    const contents: string[] = [
      `The paperhands are hated in the market, they are taxed and penalized for their actions. While the tax goes to collect the identities that have been undervalued and given back to the true believers.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "the underground market for identity traders",
        })}
        {renderLeadingText()}
        {TextOnBanner({
          content: "A market without the paperhands",
        })}
        {renderPaperhandText()}
      </section>
    </div>
  )
}

export default BlackMarket
