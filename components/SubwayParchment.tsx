/* eslint-disable @next/next/no-img-element */

import FounderProfile from "./coreui/FounderProfile"
import InceptionTextBlock from "./coreui/InceptionTextBlock"
import TextOnBanner from "./coreui/TextOnBanner"

const Parchment: React.FC = () => {
  const teamMembers = [
    {
      name: "A Friendly Yokai",
      title: "Co-founder & Artist",
      description: `A Friendly Yokai is a core designer & artist working on well-known TV shows such as Rick and Morty, Star Trek Lower Decks, etc.`,
      extraDescription: `While having a successful journey in her career in the entertainment and TV industry, she is graduated with an animation degree from Sheridan, famously known as the "Harvard of animation".`,
      imgSrc: "hare_1.jpg",
    },
    {
      name: "Alfredoo",
      title: "Co-founder & Engineer",
      description: `Previous a management consultant at Big 4, now an engineer and emerging leader in developing and nurturing web3 projects. `,
      extraDescription:
        "Alfredoo brings experience from working at multiple international and major crypto companies while being a co-founder at both Flunks Inc. and Inception Animals.",
      imgSrc: "cyber_hippo.jpg",
    },
    {
      name: "Ellen",
      title: "Artist",
      description: `After completing her degree from Sheridan animation, Ellen has worked a diverse range of globally well-known TV shows (F is for family, Picwik pack, Saving me, etc.) for established international TV companies and animation studios before joining the Inception Animals team.`,
      extraDescription: "",
      imgSrc: "hare_4.jpg",
    },
    {
      name: "Yan",
      title: "Strategy & Operations",
      description: `Previously an experienced consultant at McKinsey & Company and the United Nations, currently a core member of Moody's Investors Service in Asia.`,
      extraDescription:
        "Yan has 7 years of experience in various industries covering management consulting, operations, investment, and non-profit organizations after graduating from Johns Hopkins University with a master's degree in International economics focusing on energy, resource, and environment.",
      imgSrc: "koala_1.jpg",
    },
    {
      name: "Henry",
      title: "Corporate Development",
      description: `Alumni of 2 of the "Big 4" firms, now leading the Finance & Strategy work at an entertainment startup that concluded Series B recently`,
      extraDescription: "",
      imgSrc: "sports_hippo.jpg",
    },
  ]

  const renderFoundingTeam = () => {
    return (
      <>
        <section className="flex flex-wrap">
          {teamMembers.map((memberObj, index) => (
            <FounderProfile
              key={index}
              name={memberObj.name}
              title={memberObj.title}
              description={memberObj.description}
              extraDescription={memberObj.extraDescription}
              imgSrc={memberObj.imgSrc}
            />
          ))}
        </section>
      </>
    )
  }

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
      `Inception Animals is a story-driven retrofuturistic metaverse brand built on the Flow blockchain.`,
      `A collection of 3,333 avatars of various animals that give you a unique identity to the universe driven by a never-ending grudge between generations of merits, soldiers, and inventions going against each other in two once peaceful cities: Ascos and Lucinia.`,
      `It starts with high-quality avatars from our beloved artists from well-known TV shows such as Rick and Morty, Star Trek Lower Decks, F is for family, etc. And much more that will be revealed over time.`,
      `The universe is a corner of the internet where we choose the identity we never got a chance to obtain in reality and extend it to the blurring edge of the physical and digital worlds.`,
    ]
    return <InceptionTextBlock contents={contents} />
  }

  const renderUniqueVibeText = () => {
    return (
      <div className="relative m-2 mt-6 font-inception lg:pr-72 text-xl">
        <p className="text-inception-light-brown my-4">
          Inception Animals is to bring a unique vibe to the Flow ecosystem and
          build a long-term decentralized brand of the future.
        </p>
      </div>
    )
  }

  const renderOwnedByCommunityText = () => {
    return (
      <div className="relative m-2 mt-6 font-inception lg:pr-72 text-xl">
        <p className="text-inception-light-brown my-4">{`While Inception Animals is an NFT project, all that matters is the community.`}</p>
        <p className="text-inception-light-brown my-4">{`We aim to find a unique angle to tap into both existing fans in the Flow ecosystem from projects like NBA Topshot and Flunks, together with potential fans from external blockchains like Ethereum, through the unique and professional art from professional artists, and the brand built together by the community.`}</p>
        <p className="text-inception-light-brown my-4">{`The longevity of the mini-economics system is ensured by a revenue-sharing model for real estate owners who can claim ownership in the universe by owning metaverse lands - a portion of secondary royalty will be distributed to the landowners with a well-defined engineering system including a bonus for staking your Inception Avatars.`}</p>
      </div>
    )
  }

  const renderTeamSection = () => {
    // TODO: add team section
    return <></>
  }

  return (
    <div className="mt-24 lg:mt-32 relative h-full pb-40">
      <section className="font-inception-ink px-12 lg:px-24 flex flex-col">
        <h1 className="uppercase font-inception-ink-italic text-2xl text-inception-light-brown">
          subway
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          [place for the frustrated to meet up
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          faded and revamped by underappreciated artists]
        </h1>
        <br></br>
        {renderRegVideo()}
        {TextOnBanner({ content: "inception animals is a culture brand" })}
        {renderLeadingText()}
        {TextOnBanner({ content: "a unique vibe" })}
        {renderUniqueVibeText()}
        {TextOnBanner({ content: "owned by the community" })}
        {renderOwnedByCommunityText()}
        {TextOnBanner({ content: "created by enthusiasts" })}
        {renderTeamSection()}
        {renderFoundingTeam()}
      </section>
    </div>
  )
}

export default Parchment
