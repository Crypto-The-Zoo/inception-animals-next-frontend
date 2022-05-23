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
      `The market on the grapevine, full of widely accepted unspoken rules for identity traders.`,
      `An innovative revenue-sharing model supervised and secured by the Flow blockchain and smart contracts to ensure a fair distribution of Inception Animals NFT holders. land owners, and NFT stakers.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderRoyaltyText = () => {
    const contents: string[] = [
      `A majority of the royalty will go back to the community while a small portion is kept for maintaining and running the project. Community will decide on whether to leverage the funding to enhance building the brand of Inception Animals, or the Flow eco-system to a broader scope through a voting infrastructure.`,
      `Land owners will receive a portion of the royalty generated from the black market transactions on a regular basis, a bonus portion can be unlocked by staking avatars to real estates.`,
      `All Inception Avatar owners will enter a raffle when a giveaway decision is voted and made by the community.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderPaperhandText = () => {
    const contents: string[] = [
      `The paperhands are not quite welcome to the market, tax laws are enforced for actions that blows the peaceful market.`,
      `While the tax goes to collect the identities that have been undervalued - they are eventually gifted back to the true fams.`,
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
          content: "royalty decided by community",
        })}
        {renderRoyaltyText()}
      </section>
    </div>
  )
}

export default BlackMarket
