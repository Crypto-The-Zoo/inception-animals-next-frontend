import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

const CODE = `import NonFungibleToken from ${process.env.NEXT_PUBLIC_NON_FUNGIBLE_TOKEN_ADDRESS}
import MetadataViews from ${process.env.NEXT_PUBLIC_NON_FUNGIBLE_TOKEN_ADDRESS}
import InceptionAvatar from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}
import InceptionBlackBox from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}
import InceptionExchange from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}

pub struct NFTData {
  pub let MetadataViewsDisplay: MetadataViews.Display
  pub let metadata: {String: AnyStruct}
  pub let serialNumber: UInt64
  pub let id: UInt64
  pub let nextClaimTimeInSeconds: UInt64

  init(metadataViewsDisplay: MetadataViews.Display, serialNumber: UInt64, metadata: {String: AnyStruct}, id: UInt64, nextClaimTimeInSeconds: UInt64) {
    self.MetadataViewsDisplay = metadataViewsDisplay
    self.metadata = metadata
    self.serialNumber = serialNumber
    self.id = id
    self.nextClaimTimeInSeconds = nextClaimTimeInSeconds
  }
}

pub fun getItemMetadata(address: Address, itemID: UInt64): NFTData? {
  if let collection = getAccount(address).getCapability<&InceptionAvatar.Collection{NonFungibleToken.CollectionPublic, InceptionAvatar.InceptionAvatarCollectionPublic}>(InceptionAvatar.CollectionPublicPath).borrow() {
    if let item = collection.borrowInceptionAvatar(id: itemID) {
      if let view = item.resolveView(Type<MetadataViews.Display>()) {
        let display = view as! MetadataViews.Display
        return NFTData(
          metadataViewsDisplay: display,
          serialNumber: item.getNFTTemplate().templateID,
          metadata: item.getNFTTemplate().getMetadata(),
          id: item.id,
          nextClaimTimeInSeconds: 0
        )
      }
    }
  }
  return nil
}

pub fun getBlackBoxMetadata(address: Address, itemID: UInt64): NFTData? {
  if let collection = getAccount(address).getCapability<&InceptionBlackBox.Collection{NonFungibleToken.CollectionPublic, InceptionBlackBox.InceptionBlackBoxCollectionPublic}>(InceptionBlackBox.CollectionPublicPath).borrow() {
    if let item = collection.borrowInceptionBlackBox(id: itemID) {
      let nextClaimTimeInSeconds = InceptionExchange.getNextInceptionBlackBoxRedemptionTimeInSeconds(tokenID: itemID)

      if let view = item.resolveView(Type<MetadataViews.Display>()) {
        let display = view as! MetadataViews.Display
        return NFTData(
          metadataViewsDisplay: display,
          serialNumber: item.serialNumber,
          metadata: item.getNFTMetadata().getMetadata(),
          id: item.id,
          nextClaimTimeInSeconds: nextClaimTimeInSeconds
        )
      }
    }
  }
  return nil
}


pub fun getInceptionAvatarsWithMetadata(address: Address): [NFTData?] {
  let collection = getAccount(address).getCapability<&InceptionAvatar.Collection{InceptionAvatar.InceptionAvatarCollectionPublic}>(InceptionAvatar.CollectionPublicPath).borrow()!

  if collection == nil {
    return []
  }

  let accountNFTIDs = collection!.getIDs()

  let NFTs: [NFTData?] = []

  for NFTID in accountNFTIDs {
    var d: NFTData? = nil
    d = getItemMetadata(address: address, itemID: NFTID)
    NFTs.append(d)
  }

  return NFTs
}

pub fun getInceptionBlackBoxesWithMetadata(address: Address): [NFTData?] {
  let collection = getAccount(address).getCapability<&InceptionBlackBox.Collection{InceptionBlackBox.InceptionBlackBoxCollectionPublic}>(InceptionBlackBox.CollectionPublicPath).borrow()!

  if collection == nil {
    return []
  }

  let accountNFTIDs = collection!.getIDs()

  let NFTs: [NFTData?] = []

  for NFTID in accountNFTIDs {
    var d: NFTData? = nil
    d = getBlackBoxMetadata(address: address, itemID: NFTID)
    NFTs.append(d)
  }

  return NFTs
}

// returns hashmap Collection -> [NFTData?]
pub fun main(address: Address): {String: [NFTData?]} {
  let InceptionAvatars: [NFTData?] = getInceptionAvatarsWithMetadata(address: address)
  let InceptionBlackBoxes: [NFTData?] = getInceptionBlackBoxesWithMetadata(address: address)

  return {
    "InceptionAvatars": InceptionAvatars,
    "InceptionBlackBoxes": InceptionBlackBoxes
  }
}`;

export async function getAccountNfts({ address }) {
  if (!address) return Promise.resolve({});

  return fcl
    .send([fcl.script(CODE), fcl.args([fcl.arg(address, t.Address)])])
    .then(fcl.decode);
}
