/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const CornerStore: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `Access to exclusive Inception Animals merch for Inception Animals NFT holders.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderSecondaryText = () => {
    const contents: string[] = [`Redacted...`]
    return <InceptionTextBlock contents={contents} />
  }

  const renderAnotherText = () => {
    const contents: string[] = [`Redacted...`]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "exclusive merchandise",
        })}
        {renderLeadingText()}
        {TextOnBanner({
          content: "collectibles",
        })}
        {renderSecondaryText()}
        {TextOnBanner({
          content: "hiring",
        })}
        {renderAnotherText()}
      </section>
    </div>
  )
}

export default CornerStore
