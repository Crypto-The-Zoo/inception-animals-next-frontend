/* eslint-disable @next/next/no-img-element */
import InceptionTextBlock from "../coreui/InceptionTextBlock"
import TextOnBanner from "../coreui/TextOnBanner"
import FoundingTeam from "../FoundingTeam"

const InceptionAvatar: React.FC = () => {
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
      `A corner where you can come and chill.`,
      `No massive marketing, shills, and promotions.`,
      `Just good vibe chit chats and a lovely space to chat about arts, anime, sports, food, and games.`,
      `A peaceful of land fully managed by the community.`,
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

export default InceptionAvatar
