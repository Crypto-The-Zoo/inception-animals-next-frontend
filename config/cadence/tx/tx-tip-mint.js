import * as fcl from "@onflow/fcl"
import { invariant } from "@onflow/util-invariant"
import { tx } from "../helper/tx"

const TRANSACTION = `import FungibleToken from 0x9a0766d93b6608b7
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20
import InceptionAvatar from 0xbf32ef555150f4d8
import InceptionMinter from 0xbf32ef555150f4d8

transaction(setID: UInt64, numberOfTokens: UInt64) {
    let buyerInceptionAvatarCollection: &{InceptionAvatar.InceptionAvatarCollectionPublic}
    let buyerAddress: Address

    prepare(buyer: AuthAccount) {
      self.buyerAddress = buyer.address

      // Initialize the buyer's InceptionAvatar collection if it is not already initialized
      if buyer.borrow<&InceptionAvatar.Collection>(from: InceptionAvatar.CollectionStoragePath) == nil {
            let collection <- InceptionAvatar.createEmptyCollection()
            buyer.save(<-collection, to: InceptionAvatar.CollectionStoragePath)
            buyer.link<&InceptionAvatar.Collection{NonFungibleToken.CollectionPublic, InceptionAvatar.InceptionAvatarCollectionPublic}>(InceptionAvatar.CollectionPublicPath, target: InceptionAvatar.CollectionStoragePath)
        }

      self.buyerInceptionAvatarCollection = buyer
        .getCapability<&{InceptionAvatar.InceptionAvatarCollectionPublic}>(InceptionAvatar.CollectionPublicPath)
        .borrow()
        ?? panic("Could not borrow InceptionAvatar Collection from provided address")
    }

    execute {
      // mint private sale InceptionAvatar to buyer's account
      InceptionMinter.whitelistFreeMint(buyer: self.buyerAddress, setID: setID, numberOfTokens: numberOfTokens)
    }
}`

// prettier-ignore
export function mintPrivate({setID, expectedPrice, numberOfTokens}, opts = {}) {
  invariant(setID != null, "-- setID required")
  invariant(expectedPrice != null, "-- expectedPrice required")
  invariant(numberOfTokens != null, "-- numberOfTokens required")

  console.log(process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT_ADDRESS)
  console.log("setID", setID)
  console.log("expectedPrice", expectedPrice)
  console.log("numberOfTokens", numberOfTokens)

  const dapperAuthz = fcl.authz

  return tx(
    {
      cadence: TRANSACTION,
      args: (arg, t) => [
        arg(fcl.withPrefix(process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT_ADDRESS), t.Address),
        arg(parseInt(setID), t.UInt64),
        arg(expectedPrice, t.UFix64),
        arg(parseInt(numberOfTokens), t.UInt64),
      ],
      authorizations: [dapperAuthz, fcl.authz],
      limit: 1000,
    },
    opts
  )
}
