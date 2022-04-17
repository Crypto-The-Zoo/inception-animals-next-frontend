/* eslint-disable @next/next/no-img-element */

const CityParchment: React.FC = () => {
  const renderRegVideo = () => {
    return (
      <video className="w-screen" muted loop autoPlay={true}>
        <source src={"/videos/subway_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  const renderTextWithBg = ({ content }: { content: string }) => {
    return (
      <div className="relative m-2 mt-6">
        <p className="text-inception-off-white relative z-10">{content}</p>
        <img
          className="absolute -left-2 -top-1"
          src="/icons/green_box.svg"
          alt=""
        ></img>
      </div>
    )
  }

  const renderLeadingText = () => {
    return (
      <div className="relative m-2 mt-6 font-inception lg:pr-72 text-xl">
        <p className="text-inception-light-brown my-4">
          {`It has been decades since they started this war. A never-ending
            grudge between generations of merits, soldiers, and inventions going
            against each other. Ascos & Lucinia, the pride of Zion, the lands of
            inventions and hope. The pillars of the whole world where great
            leaders and their followers, hoped to change the world for the
            better.`}
        </p>
        <p className="text-inception-light-brown my-4">
          {`Torn apart, by the great disaster. No one knew who was to blame. But
            the cost was equal on both sides. And as they took arms against the
            ones they once called friends.`}
        </p>
        <p className="text-inception-light-brown my-4">
          {`“We were there. We knew what happened, saw who did it, but couldn’t
            restore what was already broken. But maybe you can...”`}
        </p>
        <img
          className="absolute bottom-0 right-6 h-72 z-10 opacity-20 hover:opacity-100 hover:scale-110 transform duration-500 rounded-md"
          src="/images/cyber_hippo.jpg"
          alt=""
        ></img>
      </div>
    )
  }

  const renderBeforeSplitText = () => {
    return (
      <div className="relative m-2 mt-6 font-inception lg:pr-72 text-xl">
        <p className="text-inception-light-brown my-4">
          {`The continent of Zion was hailed as the brightest and the most substantial place of gathering in the world. Whether it was innovation or advancement in war, no nation in the land of Atresia dared to go against Zion. It was said that the world's pioneers were made in the land of Zion.`}
        </p>

        <p className="text-inception-light-brown my-4">
          {`During the solar gathering of SOL 2251, the scholars of Zion predicted that the planet's magnetic cores have started shifting towards the surrounding moons and their magnetic pulls are likely to bring all the six moons crashing down on Atresia in two decades.`}
        </p>

        <p className="text-inception-light-brown my-4">
          {`The news of a possible apocalypse spread across the land like wildfire, and every living person in Atresia was in shock. The nation of Zion took it as a challenge, a challenge to save the world. Heroes and leaders step forward, alchemists, scientists, mechanics, warriors everyone came forward to the council hall of Zion where two hopes emerged for Neuterians.`}
        </p>

        <p className="text-inception-light-brown my-4">
          {`The prodigy of science and proposer of body mech advancement movement, Terion Shabody of Ascos and the guardian of Zion, Edward Whiteblade of Luciniya. These two leaders of Zion who looked over the well-being of the land of Zion suggested a united project called "World Trigger."`}
        </p>
        <img
          className="absolute bottom-0 right-6 h-72 z-10 opacity-20 hover:opacity-100 hover:scale-110 transform duration-500 rounded-md"
          src="/images/smoking_hippo.png"
          alt=""
        ></img>
      </div>
    )
  }

  const renderTheWorldTriggerProjectText = () => {
    return (
      <div className="relative m-2 mt-6 font-inception lg:pr-72 text-xl">
        <p className="text-inception-light-brown my-4">
          {`The world trigger project or later known as the downfall of Zion, is arguably the most impactful piece of history that connects the city of Ascos and Luciniya. The project was initially proposed by the forefathers of the two cities who wanted to save Atresia from the fall of its surrounding moons.`}
        </p>

        <p className="text-inception-light-brown my-4">
          {`The world trigger project harbored the idea of Terion Shabody, who suggested that the only way to prevent the fall of all the moons on the planet's surface is by destroying them all at the same time so that the magnetic shift between the planet's core isn't shifted.`}
        </p>
        <p className="text-inception-light-brown my-4">
          {`While the idea may seem like a simple one, the firepower that is required to pull this off was impossible. As this thought came into the minds of the citizens, Edward, the guardian from Luciniya, suggested a follow-up plan. He proposed to power World trigger, the land of Luciniya will provide with artificial 'Everlight.' These solar stones are only found in the depths of Luciniya and have been the most prominent power source of Atresia.`}
        </p>
        <p className="text-inception-light-brown my-4">
          {`While many have failed to generate similar results to the natural Everlight, it was said that the council of Zion accepted the proposal without any questions. This is mainly because there weren't any better options out there, and the names backing up this idea were the ones who have proven their words time after time. And as the world was coming to an end, maybe opting for the impossible is all that they could've done. So, with the clock ticking, the people of Zion initiated the first step of World Trigger.`}
        </p>
        <p className="text-inception-light-brown my-4">
          {`The nation was divided into two factions to provide the necessary part and materials for the world trigger project. Most of the weaponry and body assemble duty was taken up by the Ascos faction; the neighboring cities of Ascos joined in this process. At the same time, the rest and mainly the creation of artificial Everlight was tasked upon the people of Luciniya.`}
        </p>
        <p className="text-inception-light-brown my-4">
          {`And after almost two decades of research, engineering, and sacrifice, on SOL 2269. The initial design of the World Trigger was completed by the citizen of Ascos. The creation of artificial Evernight was also completed in the following year. And at the beginning of SOL 2270, World Trigger was set to be launched.`}
        </p>
        <img
          className="absolute bottom-0 right-6 h-72 z-10 opacity-20 hover:opacity-100 hover:scale-110 transform duration-500 rounded-md"
          src="/images/yokatta_hippo.jpg"
          alt=""
        ></img>
      </div>
    )
  }

  const renderTheFallOfZionText = () => {
    return (
      <div className="relative m-2 mt-6 font-inception lg:pr-72 text-xl">
        <p className="text-inception-light-brown my-4">{`On the first day of SOL 2270, Terion Shabody and Edward Whiteblade presented the World Trigger in the capital center of Zion. And as the whole world was waiting in anticipation, they turned on the world trigger. The Everlight core of the machine brightened the center of Zion as beams of pure light were shot across the sky, and then it happened.`}</p>
        <p className="text-inception-light-brown my-4">{`The world trigger proved the whole world wrong as the machine's firepower tore through the first moon, then the second, then the third. Another shot of the weapon did the same for the remaining three, and as the debris from the moons started the reach the planet, the world trigger shot again, but this time with mini light beams that destroyed the falling debris in the blink of an eye.`}</p>
        <p className="text-inception-light-brown my-4">{`And just like that, the destruction of Atresia was prevented by the brilliant creation of the people of Zion. But that is when everything started to go wrong. The world trigger started to fire again even though there was no target. The beam of light started to reign down fire on everything and everyone at sight. The royal capital was in chaos as the machine that saved them moments before started to bring their end. As the hellfire started its rampage, the soldiers started the evacuation process, but the damage was undeniable. The world trigger was destroyed and scattered throughout the land, the capital of Zion was in rumbles, the people who could've answered the questions were gone because there were no survivors near the world trigger's remains. The body count crossed millions, and people started to point out fingers at each other.`}</p>
        <p className="text-inception-light-brown my-4">{`The people of Ascos, who worked for the world trigger design, blamed the people of Luciniya, stating that their artificial Everlight was the reason behind this mass destruction. But the people of Luciniya claimed that it was the people of Ascos who failed to create the machine properly.`}</p>
        <p className="text-inception-light-brown my-4">{`And soon, amidst the destruction of Zion, a war between Ascos & Luciniya broke out, and ever since then, the two cities and their residents are at each other's throats.`}</p>
        <p className="text-inception-light-brown my-4">{`The destruction of the world trigger also forced the people of each city to evolve in order to survive in Zion as they overexposed artificial Everlights had a corrosive effect on skin and brain functions. The ideal of Terion Shabody did come into fruition as people of Ascos started to do body enhancement, and soon the people of Luciniya followed.`}</p>
        <p className="text-inception-light-brown my-4">{`While the old wounds did heal, the scar between the two cities remained, and the hatred and animosity between each other still light brightly. The citizen of each city has established trade routes and still wants the best for Zion. Only by the brotherhood of tinkers is the two cities are actually connected. But nobody knows who they are and which city do their support belongs to.`}</p>
        <img
          className="absolute bottom-0 right-6 h-72 z-10 opacity-20 hover:opacity-100 hover:scale-110 transform duration-500 rounded-md"
          src="/images/sports_hippo.jpg"
          alt=""
        ></img>
      </div>
    )
  }

  return (
    <div className="mt-20 lg:mt-32 relative h-full pb-40">
      <section className="font-arcane px-12 lg:px-24 flex flex-col">
        <h1 className="uppercase font-inception text-2xl text-inception-light-brown">
          Ascos & Lucinia
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          the pride of Zion
        </h1>
        <h1 className="uppercase text-4xl text-inception-brown">
          the land of inventions and hope
        </h1>
        <br></br>
        {renderRegVideo()}
        {renderTextWithBg({ content: "a never-ending grudge" })}
        {renderLeadingText()}
        {renderTextWithBg({ content: "before split" })}
        {renderBeforeSplitText()}
        {renderTextWithBg({ content: "the world trigger project" })}
        {renderTheWorldTriggerProjectText()}
        {renderTextWithBg({ content: "the fall of zion" })}
        {renderTheFallOfZionText()}
      </section>
    </div>
  )
}

export default CityParchment
