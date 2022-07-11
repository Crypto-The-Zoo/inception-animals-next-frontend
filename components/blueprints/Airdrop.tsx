/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const Airdrop: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `Inception Avatar genesis Holders are entitled to airdrop collections on Flow via the holding Dapper Wallet account. Your Inception Avatar can be used as the pass/allowlist for all the future drops and free mints from Ube Studios Inc.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderSecondaryText = () => {
    const contents: string[] = [
      `Launching free mint collections on various web3 platforms to expand Flow to a broader eco-system and establish a multi-chain standard for both existing and upcoming projects.`,
      `We will ensure the scarcity for genesis Inception Avatars and privileged benefits for its holders to make sure the free mints on various platforms won't devaluate the genesis Inception Avatars.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderCrystalText = () => {
    const contents: string[] = [
      `Random amount of Inception Crystals will be distributed to holders in perpetuity, which can be used to purchase items in the Inception Animals universe.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "holder airdrops",
        })}
        {renderLeadingText()}
        {TextOnBanner({
          content: "public free mint",
        })}
        {renderSecondaryText()}
        {TextOnBanner({
          content: "inception crystals",
        })}
        {renderCrystalText()}
      </section>
    </div>
  )
}

export default Airdrop
