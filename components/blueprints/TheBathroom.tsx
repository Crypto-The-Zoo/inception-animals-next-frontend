/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const TheBathroom: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `A silent corner in the busy city at night. Mugglers, traders, and the homeless come by and leave for their own good.`,
      `A place built for the natural need and a peaceful mind.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "the public bathroom",
        })}
        {renderLeadingText()}
      </section>
    </div>
  )
}

export default TheBathroom
