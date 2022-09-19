import * as fcl from "@onflow/fcl"
import { invariant } from "@onflow/util-invariant"
import { tx } from "../helper/tx"

const TRANSACTION =
  process.env.NEXT_PUBLIC_NET_TYPE === "mainnet"
    ? `import FungibleToken from 0xf233dcee88fe0abe
    import NonFungibleToken from 0x1d7e57aa55817448
    import MetadataViews from 0x1d7e57aa55817448
    import InceptionAvatar from 0x83ed64a1d4f3833f
    import InceptionMinter from 0x83ed64a1d4f3833f
    import InceptionBlackBox from 0x83ed64a1d4f3833f
    
    transaction(setID: UInt64, numberOfTokens: UInt64) {
        let buyerInceptionAvatarCollection: &{InceptionAvatar.InceptionAvatarCollectionPublic}
        let buyerAddress: Address
    
        prepare(buyer: AuthAccount) {
          self.buyerAddress = buyer.address
    
          // Initialize the buyer's InceptionAvatar collection if it is not already initialized
          if buyer.borrow<&InceptionAvatar.Collection>(from: InceptionAvatar.CollectionStoragePath) == nil {
            let collection <- InceptionAvatar.createEmptyCollection()
            buyer.save(<-collection, to: InceptionAvatar.CollectionStoragePath)
            buyer.link<&InceptionAvatar.Collection{NonFungibleToken.CollectionPublic, InceptionAvatar.InceptionAvatarCollectionPublic, MetadataViews.ResolverCollection}>(InceptionAvatar.CollectionPublicPath, target: InceptionAvatar.CollectionStoragePath)
          }
    
          // if account does not already have InceptionBlackBox
          if buyer.borrow<&InceptionBlackBox.Collection>(from: InceptionBlackBox.CollectionStoragePath) == nil {
            let collection <- InceptionBlackBox.createEmptyCollection()
            buyer.save(<-collection, to: InceptionBlackBox.CollectionStoragePath)
            buyer.link<&InceptionBlackBox.Collection{NonFungibleToken.CollectionPublic, InceptionBlackBox.InceptionBlackBoxCollectionPublic, MetadataViews.ResolverCollection}>(InceptionBlackBox.CollectionPublicPath, target: InceptionBlackBox.CollectionStoragePath)
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
    : `import FungibleToken from 0x9a0766d93b6608b7
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20
import InceptionAvatar from 0x3cc47434d5867b24
import InceptionMinter from 0x3cc47434d5867b24
import InceptionBlackBox from 0x3cc47434d5867b24

transaction(setID: UInt64, numberOfTokens: UInt64) {
    let buyerInceptionAvatarCollection: &{InceptionAvatar.InceptionAvatarCollectionPublic}
    let buyerAddress: Address

    prepare(buyer: AuthAccount) {
      self.buyerAddress = buyer.address

      // Initialize the buyer's InceptionAvatar collection if it is not already initialized
      if buyer.borrow<&InceptionAvatar.Collection>(from: InceptionAvatar.CollectionStoragePath) == nil {
        let collection <- InceptionAvatar.createEmptyCollection()
        buyer.save(<-collection, to: InceptionAvatar.CollectionStoragePath)
        buyer.link<&InceptionAvatar.Collection{NonFungibleToken.CollectionPublic, InceptionAvatar.InceptionAvatarCollectionPublic, MetadataViews.ResolverCollection}>(InceptionAvatar.CollectionPublicPath, target: InceptionAvatar.CollectionStoragePath)
      }

      // if account does not already have InceptionBlackBox
      if buyer.borrow<&InceptionBlackBox.Collection>(from: InceptionBlackBox.CollectionStoragePath) == nil {
        let collection <- InceptionBlackBox.createEmptyCollection()
        buyer.save(<-collection, to: InceptionBlackBox.CollectionStoragePath)
        buyer.link<&InceptionBlackBox.Collection{NonFungibleToken.CollectionPublic, InceptionBlackBox.InceptionBlackBoxCollectionPublic, MetadataViews.ResolverCollection}>(InceptionBlackBox.CollectionPublicPath, target: InceptionBlackBox.CollectionStoragePath)
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
export function mintPrivate({numberOfTokens}, opts = {}, updateToast) {
  invariant(numberOfTokens != null, "-- numberOfTokens required")

  return tx(
    {
      cadence: TRANSACTION,
      args: (arg, t) => [
        arg(1, t.UInt64),
        arg(parseInt(numberOfTokens), t.UInt64),
      ],
      authorizations: [fcl.authz],
      limit: 1000,
    },
    opts,
    updateToast
  )
}
