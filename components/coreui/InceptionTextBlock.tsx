/* eslint-disable @next/next/no-img-element */
import Highlighter from "react-highlight-words"

const InceptionTextBlock: React.FC<{
  contents: string[]
}> = ({ contents }: { contents: string[] }) => {
  return (
    <div className="relative m-2 font-inception lg:pr-4 text-sm flex flex-col">
      {contents.map((content, index) => (
        <div key={index} className="text-gray-600 my-4 flex flex-wrap">
          <Highlighter
            highlightClassName="px-2 rounded-md text-gray-600 highlight-yellow font-bold"
            searchWords={[
              "starts with the community and ends with the community",
              "brings industry standard and awareness to the NFT space",
              "growth of the Flow eco-system",
              "identity traders",
              "A majority of the royalty will go back to the community",
              "Land owners will receive a portion of the royalty generated from the black market transactions",
              "All Inception Avatar owners will be granted a raffle entry ",
              "All Inception Avatar owners will enter a raffle",
              "gifted back to the true fams",
              "We are parkourers, skaters, runners, and skydivers of web3",
              "we might be alone, we might be outcasts",
              "innovative revenue-sharing model",
              "exclusive Inception Animals merch",
              "airdrop collections",
              "pass/allowlist",
              "expand Flow to a broader eco-system",
              "establish a multi-chain standard",
              "scarcity for genesis Inception Avatars and privileged benefits for its holders",
              "we may be alone, we may be outcasts",
              "a peaceful mind",
              "Privacy Policy",
              "End User License Agreement",
              "Shissh!! Maybe it opens up one day!",
              "Inception BlackBox",
              "it's a top secret.",
              "until tomorrow",
              "The Hippo Hunt",
              "THE BLACKMARKET",
            ]}
            autoEscape={true}
            textToHighlight={content}
          />
        </div>
      ))}
    </div>
  )
}

export default InceptionTextBlock
