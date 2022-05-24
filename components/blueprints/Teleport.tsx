/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"

const Teleport: React.FC = () => {
  const renderLeadingText = () => {
    const contents: string[] = [
      `Currently the only portal between multiple chains is web2 platforms like OpenSea & Twitter.`,
      `Inception Animals explores the boundaries of the multi-chain connection in a web3 manner on this secret mission.`,
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
          content: "web3 approach for Flow to outreach",
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
