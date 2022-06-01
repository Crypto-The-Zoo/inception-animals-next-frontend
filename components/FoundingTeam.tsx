/* eslint-disable @next/next/no-img-element */
import FounderProfile from "./coreui/FounderProfile"
import TextOnBanner from "./coreui/TextOnBanner"

const FoundingTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "A Friendly Yokai",
      title: "Co-founder & Artist",
      description: `A core designer & artist working on well-known TV shows such as Rick and Morty, Star Trek Lower Decks, etc.`,
      extraDescription: `While having a successful journey in her career in the entertainment and TV industry, she is graduated with an animation degree from Sheridan, famously known as the "Harvard of animation".`,
      imgSrc: "hare_1.jpg",
    },
    {
      name: "Alfredoo",
      title: "Co-founder & Engineer",
      description: `Engineer and emerging leader in developing and nurturing web3 projects. `,
      extraDescription:
        "Alfredoo started his career as a management consultant at Deloitte. He brings experience from working at multiple international and major crypto companies while being a co-founder at both Flunks Inc. and Inception Animals.",
      imgSrc: "smoking_hippo.jpg",
    },
    {
      name: "Ellen",
      title: "Artist",
      description: `After completing her degree from Sheridan animation, Ellen has worked a diverse range of globally well-known TV shows (F is for family, Picwik pack, Saving me, etc.) for established international TV companies and animation studios before joining the Inception Animals team.`,
      extraDescription: "",
      imgSrc: "hare_4.jpg",
    },
    // {
    //   name: "Yan",
    //   title: "Strategy & Operations",
    //   description: `Previously an experienced consultant at McKinsey & Company and the United Nations, currently a core member of Moody's Investors Service in Asia.`,
    //   extraDescription:
    //     "Yan has 7 years of experience in various industries covering management consulting, operations, investment, and non-profit organizations after graduating from Johns Hopkins University with a master's degree in International economics focusing on energy, resource, and environment.",
    //   imgSrc: "koala_1.jpg",
    // },
    {
      name: "Definitely Not Josh",
      title: "Marketing & Media Manager",
      description:
        "From the community, for the community. A regular guy from Scarborough, always posting the most innovative content on social media.",
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

  return (
    <div className="relative h-full">
      <section className="font-inception-ink flex flex-col">
        {TextOnBanner({ content: "created by enthusiasts" })}
        {renderFoundingTeam()}
      </section>
    </div>
  )
}

export default FoundingTeam
