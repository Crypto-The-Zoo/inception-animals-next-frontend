// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Link from "next/link"
import Link from "next/link";
import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router";

const ConnectWalletNav: React.FC = () => {
  const { walletAddr, connect, disconnect } = useContext(WalletContext);

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
  );
};

const LoggedInMenu = (props: any) => {
  const { walletAddr, disconnect } = props;

  const router = useRouter();

  const handleLogout = () => {
    disconnect(); // Log out logic
    router.push("/"); // Redirect to home page
  };

  return (
    // TODO: add wallet view
    // <Link passHref href={`/users/${walletAddr}`}>
    <>
      <div className="flex gap-2">
        <Link passHref href={"my-inception-nfts"}>
          <div className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green">
            {/* {truncateAddr(walletAddr)} */}
            Station
          </div>
        </Link>
        <button
          className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

const truncateAddr = (addr: string) => {
  return addr.slice(0, 6) + "..." + addr.slice(-4);
};

export default ConnectWalletNav;
