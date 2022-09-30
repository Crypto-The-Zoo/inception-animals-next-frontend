import * as fcl from "@onflow/fcl"
import { tx } from "../helper/tx"

const TRANSACTION =
  process.env.NEXT_PUBLIC_NET_TYPE === "mainnet"
    ? `import NonFungibleToken from 0x1d7e57aa55817448
import MetadataViews from 0x1d7e57aa55817448
import InceptionAvatar from 0x83ed64a1d4f3833f
import InceptionCrystal from 0x83ed64a1d4f3833f
import InceptionMinter from 0x83ed64a1d4f3833f
import InceptionBlackBox from 0x83ed64a1d4f3833f

// This transaction configures an account to hold InceptionAvatar, InceptionBlackBox, and InceptionCrystal.

transaction {
  prepare(signer: AuthAccount) {
    // if the account doesn't already have InceptionAvatar
    if signer.borrow<&InceptionAvatar.Collection>(from: InceptionAvatar.CollectionStoragePath) == nil {
      // create a new empty collection
      let collection <- InceptionAvatar.createEmptyCollection()
      // save it to the account
      signer.save(<-collection, to: InceptionAvatar.CollectionStoragePath)
      // create a public capability for the collection
      signer.link<&InceptionAvatar.Collection{NonFungibleToken.CollectionPublic, InceptionAvatar.InceptionAvatarCollectionPublic, MetadataViews.ResolverCollection}>(InceptionAvatar.CollectionPublicPath, target: InceptionAvatar.CollectionStoragePath)
    }

    // if account does not already have InceptionBlackBox
    if signer.borrow<&InceptionBlackBox.Collection>(from: InceptionBlackBox.CollectionStoragePath) == nil {
      let collection <- InceptionBlackBox.createEmptyCollection()
      signer.save(<-collection, to: InceptionBlackBox.CollectionStoragePath)
      signer.link<&InceptionBlackBox.Collection{NonFungibleToken.CollectionPublic, InceptionBlackBox.InceptionBlackBoxCollectionPublic, MetadataViews.ResolverCollection}>(InceptionBlackBox.CollectionPublicPath, target: InceptionBlackBox.CollectionStoragePath)
    }

    // if account does not already have InceptionCrystal
    if signer.borrow<&InceptionCrystal.Collection>(from: InceptionCrystal.CollectionStoragePath) == nil {
      let collection <- InceptionCrystal.createEmptyCollection()
      signer.save(<-collection, to: InceptionCrystal.CollectionStoragePath)
      signer.link<&InceptionCrystal.Collection{NonFungibleToken.CollectionPublic, InceptionCrystal.InceptionCrystalCollectionPublic, MetadataViews.ResolverCollection}>(InceptionCrystal.CollectionPublicPath, target: InceptionCrystal.CollectionStoragePath)
    }
  }
}
`
    : ``

// prettier-ignore
export function initializeAccount(opts = {}, updateToast) {
  return tx(
    {
      cadence: TRANSACTION,
      args: (arg, t) => [],
      authorizations: [fcl.authz],
      limit: 1000,
    },
    opts,
    updateToast
  )
}
