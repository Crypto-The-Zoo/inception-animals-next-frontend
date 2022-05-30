/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const CornerStore: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `access to exclusive Inception Animals merch for Inception Animals avatar holders.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderSecondaryText = () => {
    const contents: string[] = [``]
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
          content: "redacted",
        })}
        {renderSecondaryText()}
      </section>
    </div>
  )
}

export default CornerStore
