/* eslint-disable @next/next/no-img-element */
import Highlighter from "react-highlight-words"

const InceptionTextBlock: React.FC<{
  contents: string[]
}> = ({ contents }: { contents: string[] }) => {
  return (
    <div className="relative m-2 font-inception lg:pr-4 text-sm flex flex-col">
      {contents.map((content, index) => (
        <div
          key={index}
          className="text-inception-light-brown my-4 flex flex-wrap"
        >
          <Highlighter
            highlightClassName="px-2 rounded-md text-inception-taro highlight-yellow font-bold"
            searchWords={[
              "starts with the community and ends with the community",
              "brings industry standard and awareness to the NFT space",
              "growth of the Flow eco-system",
              "identity traders",
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
