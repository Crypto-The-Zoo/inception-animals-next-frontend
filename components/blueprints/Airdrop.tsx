/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const Airdrop: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [`To the Moon`]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "to the moon",
        })}
        {renderLeadingText()}
      </section>
    </div>
  )
}

export default Airdrop
