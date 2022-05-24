/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const CornerStore: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [`TODO`]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "TODO",
        })}
        {renderLeadingText()}
      </section>
    </div>
  )
}

export default CornerStore
