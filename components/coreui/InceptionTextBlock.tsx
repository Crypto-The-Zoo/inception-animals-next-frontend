/* eslint-disable @next/next/no-img-element */

const InceptionTextBlock: React.FC<{
  contents: string[]
}> = ({ contents }: { contents: string[] }) => {
  return (
    <div className="relative m-2 font-inception lg:pr-4 text-sm">
      {contents.map((content, index) => (
        <p key={index} className="text-inception-light-brown my-4">
          {content}
        </p>
      ))}
    </div>
  )
}

export default InceptionTextBlock
