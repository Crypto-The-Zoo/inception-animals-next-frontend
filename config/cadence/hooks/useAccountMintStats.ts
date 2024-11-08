import { useState, useEffect, useContext } from "react";
import { WalletContext } from "../../../context/WalletContext";
import { getAccountMintInfo } from "../tx/tx-get-account-mint-info";
import { getAccountNfts } from "../tx/tx-get-account-nfts";
import { getAccountCrystalsScript } from "../tx/tx-get-account-crystals.js";

export default function useAccountMintStats() {
  const { walletAddr } = useContext(WalletContext);
  const [tipMintedCount, setTipMintedCount] = useState(0);
  const [whitelistEntries, setWhitelistEntries] = useState(0);
  const [publicMintedCount, setPublicMintedCount] = useState(0);
  const [accountNfts, setAccountNfts] = useState({});
  const [accountCrystals, setAccountCrystals] = useState(0);

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

  const getAccountCrystals = () => {
    if (!walletAddr) return 0;

    getAccountCrystalsScript({ address: walletAddr })
      .then((res: any) => {
        if (res) {
          setAccountCrystals(res);
        }
      })
      .catch((e) => {
        console.log("getAccountCrystals error", e);
      });
  };

  useEffect(() => {
    getMintInfoPerAccount();
    getAccountCrystals();
  }, []);

  useEffect(() => {
    getMintInfoPerAccount();
    getAccountCrystals();
  }, [walletAddr]);

  return {
    tipMintedCount,
    whitelistEntries,
    publicMintedCount,
    accountNfts,
    accountCrystals,
  };
}
