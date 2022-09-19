/* eslint-disable @next/next/no-img-element */
import "react-toastify/dist/ReactToastify.css"
import useContractMintStats from "../config/cadence/hooks/useContractMintStats"

const mintStages = [
  { name: "pre mint", isActive: false, key: "preMint" },
  { name: "tip courtesy", isActive: false, key: "tipMint" },
  { name: "public mint", isActive: false, key: "publicMint" },
]

const MintNavigationButtons: React.FC<{
  mintStageKey: string
  setCurrentMintStageKey: (key: string) => void
}> = ({ mintStageKey, setCurrentMintStageKey }) => {
  const { totalMinted } = useContractMintStats()

  return (
    <div className="flex flex-col items-center text-center mb-7">
      <div className="flex justify-between gap-2">
        {mintStages.map((stage, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentMintStageKey(stage.key)
            }}
            className={`font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 text-sm md:text-2xl ${
              mintStageKey === stage.key
                ? "bg-inception-taro text-inception-off-white"
                : "bg-inception-off-white text-inception-green"
            } backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green`}
          >
            {stage.name}
          </button>
        ))}
      </div>
      <h2>{new Date(1663635600 * 1000) > new Date() ? 0 : totalMinted}</h2>
      <p className="uppercase">minted</p>
    </div>
  )
}

export default MintNavigationButtons
