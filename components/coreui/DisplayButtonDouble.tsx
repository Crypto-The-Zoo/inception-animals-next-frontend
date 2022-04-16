const DisplayButtonDouble: React.FC<{
  indexContent: string
  content: string
  activeSection: string
  setActiveSection: (content: string) => any
}> = ({ indexContent, content, activeSection, setActiveSection }) => {
  const isActive = content === activeSection
  return (
    <div
      className={`z-50 rounded-sm shadow-sm h-full flex flex-col items-start justify-center duration-500 cursor-pointer px-4 py-2 ${
        isActive ? "bg-inception-red" : "bg-inception-gray"
      } text-white`}
      onClick={() => {
        setActiveSection(content)
      }}
    >
      <p className="font-arcane opacity-40 text-3xs">{indexContent}</p>
      <p className="font-arcane text-2xs">{content}</p>
    </div>
  )
}

export default DisplayButtonDouble
