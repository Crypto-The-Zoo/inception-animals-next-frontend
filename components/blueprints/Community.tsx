/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"
import FoundingTeam from "../FoundingTeam"

const Community: React.FC = () => {
  const renderRegVideo = () => {
    return (
      <video className="w-screen" muted loop autoPlay={true}>
        <source src={"/videos/subway_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  const renderLeadingText = () => {
    const contents: string[] = [
      `A unique, delightful discord server where we do things differently.`,
      `We might be outcasts but this is a community where we can create unity and bonds.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({
          content: "inception animals discord",
        })}
        {renderLeadingText()}
        <FoundingTeam />
      </section>
    </div>
  )
}

export default Community
