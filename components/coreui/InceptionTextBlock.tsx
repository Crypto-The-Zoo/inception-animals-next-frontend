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
              "Land owners will receive a portion of the royalty",
              "All Inception Avatar owners will enter a raffle",
              "gifted back to the true fams",
              "We are parkourers, skaters, runners, and skydivers of web3",
              "we may be alone, we may be outcast, there will always be others we can connect with to create unity and bonds",
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
