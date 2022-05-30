/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const Teleport: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `Explores the boundaries of the multi-chain connection in a web3 manner on this secret mission.`,
      `Build a web3 portal on top of the web2 platforms.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderBrandText = () => {
    const contents: string[] = [
      `Gauge public interest with the culture & brand.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "web3 approach for multi-chain",
        })}
        {renderLeadingText()}
        {TextOnBanner({
          content: "bring awareness with a niche brand",
        })}
        {renderBrandText()}
      </section>
    </div>
  )
}

export default Teleport
