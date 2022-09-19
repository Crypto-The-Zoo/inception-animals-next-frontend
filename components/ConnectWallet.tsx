// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Link from "next/link"
import Link from "next/link"
import { useContext } from "react"
import { WalletContext } from "../context/WalletContext"
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

const ConnectWalletNav: React.FC = () => {
  const { walletAddr, connect, disconnect } = useContext(WalletContext)

  return (
    <section>
      <div>
        {!walletAddr && (
          <button
            className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
            onClick={connect}
          >
            Connect Wallet
          </button>
        )}

        {walletAddr && (
          <LoggedInMenu disconnect={disconnect} walletAddr={walletAddr} />
        )}
      </div>
    </section>
  )
}

const LoggedInMenu = (props: any) => {
  const { walletAddr } = props
  return (
    // TODO: add wallet view
    // <Link passHref href={`/users/${walletAddr}`}>
    <Link passHref href={"my-inception-nfts"}>
      <div className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
        {truncateAddr(walletAddr)}
      </div>
    </Link>
  )
}

const truncateAddr = (addr: string) => {
  return addr.slice(0, 6) + "..." + addr.slice(-4)
}

export default ConnectWalletNav
