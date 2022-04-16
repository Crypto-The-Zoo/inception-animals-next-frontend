/* eslint-disable @next/next/no-img-element */
const Footer: React.FC = () => {
  const openDiscord = (e: any) => {
    e.stopPropagation()
    window.open("https://discord.gg/zDbDHjTTvY", "_blank")
  }

  const openTwitter = (e: any) => {
    e.stopPropagation()
    window.open("https://twitter.com/Inceptionft", "_blank")
  }

  const openGitbook = (e: any) => {
    e.stopPropagation()
    window.open("https://alliu930410.gitbook.io/inception-animals", "_blank")
  }

  return (
    <div className="flex items-center justify-between bottom-16 right-0 z-50 opacity-80 hover:opacity-100 absolute">
      <div className="relative right-20">
        <img src="/images/grapevine.png" alt="" className="h-20 relative" />
        <div className="flex absolute bottom-8 right-10 gap-1">
          <img
            src="/icons/twitter.svg"
            alt=""
            className="w-8 h-8 hover:cursor-pointer"
            onClick={openTwitter}
          />
          <img
            src="/icons/discord.svg"
            alt=""
            className="w-8 h-8 hover:cursor-pointer"
            onClick={openDiscord}
          />
          <img
            src="/icons/gitbook.svg"
            alt=""
            className="w-8 h-8 hover:cursor-pointer"
            onClick={openGitbook}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
