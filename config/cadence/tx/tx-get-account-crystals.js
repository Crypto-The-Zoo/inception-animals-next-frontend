import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

const CODE = `import InceptionCrystal from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}

pub fun main(address: Address): UInt64 {
  let collection = getAccount(address).getCapability<&InceptionCrystal.Collection{InceptionCrystal.InceptionCrystalCollectionPublic}>(InceptionCrystal.CollectionPublicPath).borrow()!

  return UInt64(collection.getIDs().length)
}`;

export async function getAccountCrystalsScript({ address }) {
  if (!address) return Promise.resolve(null);

  return fcl
    .send([fcl.script(CODE), fcl.args([fcl.arg(address, t.Address)])])
    .then(fcl.decode);
}
