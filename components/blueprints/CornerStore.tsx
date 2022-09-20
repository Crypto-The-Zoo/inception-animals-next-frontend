/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const CornerStore: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `"The tailor shop is closed. I'm afraid you'll have to wait until tomorrow."`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "exclusive merchandise",
        })}
        {renderLeadingText()}
      </section>
    </div>
  )
}

export default CornerStore
