/* eslint-disable @next/next/no-img-element */

const TextOnBanner: React.FC<{
  content: string
}> = ({ content }: { content: string }) => {
  return (
    <div className="relative m-2 mt-6">
      <p className="text-inception-off-white relative z-10 font-inception-ink">
        {content}
      </p>
      <img
        className="absolute -left-2 -top-1"
        src="/icons/green_box.svg"
        alt=""
      ></img>
    </div>
  )
}

export default TextOnBanner
