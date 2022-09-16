/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const Teleport: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `"What are you here for? I've told you it's a top secret."`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderBrandText = () => {
    const contents: string[] = [
      `Establish a quality web3 cultural brand to bring Inception Animals to social awareness.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "BlockChain",
        })}
        {renderLeadingText()}
      </section>
    </div>
  )
}

export default Teleport
