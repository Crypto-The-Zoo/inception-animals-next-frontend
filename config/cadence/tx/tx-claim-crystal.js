import * as fcl from "@onflow/fcl";
import { invariant } from "@onflow/util-invariant";
import { tx } from "../helper/tx";

const TRANSACTION =
  process.env.NEXT_PUBLIC_NET_TYPE === "mainnet"
    ? `import NonFungibleToken from 0x1d7e57aa55817448
    import InceptionExchange from 0x83ed64a1d4f3833f
    
    transaction(tokenID: UInt64) {
    prepare(signer: AuthAccount) {
        InceptionExchange.claimInceptionCrystalWithBlackBox(
            signerAuth: signer,
            tokenID: tokenID,
        )
    }
}`
    : `import NonFungibleToken from 0x631e88ae7f1d7c20
    import InceptionExchange from 0x3cc47434d5867b24
    transaction(tokenID: UInt64) {
        prepare(signer: AuthAccount) {
            InceptionExchange.claimInceptionCrystalWithBlackBox(
                signerAuth: signer,
                tokenID: tokenID,
            )
        }
}`;

// prettier-ignore
export function claimCrystalTx(opts = {tokenId}, updateToast) {
  return tx(
    {
      cadence: TRANSACTION,
      args: (arg, t) => [arg(tokenId, t.UInt64)],
      authorizations: [fcl.authz],
      limit: 1000,
    },
    opts,
    updateToast
  );
}
