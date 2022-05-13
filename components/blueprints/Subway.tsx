/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const Subway: React.FC = () => {
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
      `A story-driven retro futuristic brand defined by the community, built by mad engineers and designers.`,
      `The universe is a corner of the internet where we choose the identity we never got a chance to obtain in reality and extend it to the blurring edge of the physical and digital worlds.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderUniqueVibeText = () => {
    const contents: string[] = [
      `A fresh, delightful, unique vibe on web3.`,
      `NBA Topshot, Ballerz, Flunks - we love them. While Flow is populated the best of the best in sports and entertainment. We represent the mad engineers and designers that spin the wheel with retro, futuristic, and mechanics.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderOwnedByCommunityText = () => {
    const contents: string[] = [
      `While Inception Animals is a web3 brand, all that matters is the community.`,
      `The longevity of the brand is carried by the economics system ensured by a community revenue-sharing model for real estate owners who can claim ownership in the universe by owning metaverse lands - a portion of secondary royalty will be distributed to the landowners with a well-defined engineering system including a bonus for staking your Inception Avatars.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderStoryDrivenText = () => {
    const contents: string[] = [
      `A Universe driven by a never-ending grudge between generations of merits, soldiers, and inventions going against each other in two once peaceful cities: Ascos and Lucinia.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "inception animals is a brand by the community",
        })}
        {renderLeadingText()}
        {TextOnBanner({ content: "a unique vibe" })}
        {renderUniqueVibeText()}
        {TextOnBanner({ content: "story-driven" })}
        {renderStoryDrivenText()}
        {TextOnBanner({
          content: "economics for the community",
        })}
        {renderOwnedByCommunityText()}
      </section>
    </div>
  )
}

export default Subway
