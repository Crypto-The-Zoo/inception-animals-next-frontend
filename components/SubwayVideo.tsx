/* eslint-disable @next/next/no-img-element */
const SubwayVideo: React.FC = () => {
  return (
    <video className="w-screen" muted loop autoPlay={true}>
      <source src={"/videos/subway_video.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default SubwayVideo
