import * as fcl from "@onflow/fcl";
import { tx } from "../helper/tx";

const TRANSACTION = `
import NonFungibleToken from ${process.env.NEXT_PUBLIC_NON_FUNGIBLE_TOKEN_ADDRESS}
import InceptionExchange from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}

transaction(amount: UInt64) {
    prepare(signer: AuthAccount) {
        InceptionExchange.exchangeCrystalForFlowToken(
            signerAuth: signer,
            amount: amount,
        )
    }
}
`;

// prettier-ignore
export function exchangeCrystalForFlowTx(
  params = { amount },
  opts = { amount },
  updateToast
) {
  const { amount } = params;

  return tx(
    {
      cadence: TRANSACTION,
      args: (arg, t) => [arg(parseInt(amount), t.UInt64)],
      authorizations: [fcl.authz],
      limit: 9999,
    },
    opts,
    updateToast
  );
}
