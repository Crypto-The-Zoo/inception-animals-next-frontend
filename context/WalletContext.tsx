// @ts-ignore
import * as fcl from "@onflow/fcl";
// @ts-ignore
import { authenticate } from "@onflow/fcl";
import { createContext, useCallback, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { init } from "@onflow/fcl-wc";

interface ContextProps {
  walletAddr: string | never;
  connect: () => void;
  disconnect: () => void;
}

export const WalletContext = createContext<ContextProps>({
  walletAddr: null!,
  connect: () => {},
  disconnect: () => {},
});

interface DapperWallet {
  addr: string;
  cid: string;
  expiresAt: string;
  f_type: string;
  f_vsn: string;
  loggedIn: boolean;
  services: string[];
}

const WalletProvider = ({ children }: any) => {
  const [walletAddr, setWalletAddr] = useState<string | never>(null!);
  const [client, setClient] = useState(null);

  const wcSetup = useCallback(async (appTitle: string, iconUrl: string) => {
    try {
      const DEFAULT_APP_METADATA = {
        name: appTitle,
        description: appTitle,
        url: window.location.origin,
        icons: [iconUrl],
      };

      const { FclWcServicePlugin, client } = await init({
        projectId: "4c2e23d4-8649-4cd3-81da-d4afbf59729d", // required
        metadata: DEFAULT_APP_METADATA, // optional
        includeBaseWC: true, // optional, default: false
      });

      setClient(client);
      fcl.pluginRegistry.add(FclWcServicePlugin);
    } catch (e) {
      throw e;
    }
  }, []);

  useEffect(() => {
    const {
      flowNetwork,
      accessApi,
      walletDiscovery,
      walletDiscoveryApi,
      walletDiscoveryInclude,
      addresses,
    } = {
      flowNetwork: "mainnet",
      accessApi: "https://rest-mainnet.onflow.org",
      walletDiscovery: "https://fcl-discovery.onflow.org/authn",
      walletDiscoveryApi: "https://fcl-discovery.onflow.org/api/authn",
      walletDiscoveryInclude: [
        "0xead892083b3e2c6c", // Dapper Wallet
      ],
      addresses: {
        FlowToken: "0x1654653399040a61",
        NonFungibleToken: "0x1d7e57aa55817448",
        MetadataViews: "0x1d7e57aa55817448",
        FungibleToken: "0xf233dcee88fe0abe",
      },
    };
    const iconUrl = window.location.origin + "/images/wallet-icon.png";
    const appTitle =
      process.env.NEXT_PUBLIC_APP_NAME || "Inception Animals Connect";

    console.log("--flowNetwork", flowNetwork);

    fcl.config({
      "app.detail.title": appTitle,
      "app.detail.icon": iconUrl,
      "accessNode.api": accessApi, // connect to Flow
      "flow.network": flowNetwork,
      "discovery.wallet": walletDiscovery, // use wallets on public discovery
      "discovery.authn.endpoint": walletDiscoveryApi, // public discovery api endpoint
      "discovery.authn.include": walletDiscoveryInclude, // opt-in wallets
      "0xFungibleToken": addresses.FungibleToken,
      "0xFlowToken": addresses.FlowToken,
      "0xNonFungibleToken": addresses.NonFungibleToken,
      "0xMetadataViews": addresses.MetadataViews,
    });

    if (!client) {
      wcSetup(appTitle, iconUrl);
    }
  }, []);

  const subscribeToAuthenticate = useCallback(() => {
    fcl.currentUser().subscribe((wallet: DapperWallet) => {
      setWalletAddr(wallet.addr);
    });
  }, []);

  useEffect(() => {
    subscribeToAuthenticate();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        walletAddr,
        connect: fcl.authenticate,
        disconnect: fcl.unauthenticate,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
