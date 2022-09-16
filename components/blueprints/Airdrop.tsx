/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const Airdrop: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `"Is it the mysterious Inception BlackBox? What could be in it?"`,
      `"Nah newcomer, it's the secret military box that the outcasts brought when they landed on this planet. Some have come and found theirs, some are still left there unclaimed."`,
      `"Why don't I have it?"`,
      `"Let me see... Aha it seems that we need to get you a new identity. Time for a trip to the black market."`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "The parachute box",
        })}
        {renderLeadingText()}
      </section>
    </div>
  )
}

export default Airdrop
