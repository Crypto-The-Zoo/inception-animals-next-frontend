import { useState, useEffect, useContext } from "react";
import { WalletContext } from "../../../context/WalletContext";
import { getAccountMintInfo } from "../tx/tx-get-account-mint-info";
import { getAccountNfts } from "../tx/tx-get-account-nfts";

export default function useAccountMintStats() {
  const { walletAddr } = useContext(WalletContext);
  const [tipMintedCount, setTipMintedCount] = useState(0);
  const [whitelistEntries, setWhitelistEntries] = useState(0);
  const [publicMintedCount, setPublicMintedCount] = useState(0);
  const [accountNfts, setAccountNfts] = useState({});

  const getMintInfoPerAccount = () => {
    if (!walletAddr) return;

    // if (new Date(1663635600 * 1000) > new Date()) {
    //   // @ts-ignore
    //   setWhitelistEntries(walletToEntries[walletAddr] || 0)
    //   return
    // }

    getAccountMintInfo({ address: walletAddr })
      .then((res: any) => {
        if (res) {
          setTipMintedCount(res.tipMintedCount);
          setWhitelistEntries(res.whitelistEntries);
          setPublicMintedCount(res.publicMintedCount);
        }
      })
      .catch((e) => {
        console.log("getAccountMintInfo error", e);
      });

    getAccountNfts({ address: walletAddr })
      .then((res: any) => {
        if (res) {
          setAccountNfts(res);
        }
      })
      .catch((e) => {
        console.log("getAccountNfts error", e);
      });
  };

  useEffect(() => {
    getMintInfoPerAccount();
  }, []);

  useEffect(() => {
    getMintInfoPerAccount();
  }, [walletAddr]);

  return {
    tipMintedCount,
    whitelistEntries,
    publicMintedCount,
    accountNfts,
  };
}
