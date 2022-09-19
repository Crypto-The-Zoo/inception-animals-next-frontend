import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

const CODE = `import InceptionMinter from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}

pub fun main(address: Address): {String: UInt64} {
  return {
    "tipMintedCount": InceptionMinter.getTipMintCountPerAccount(address: address),
    "whitelistEntries": InceptionMinter.getWhitelistedEntriesByAddress(address: address),
    "publicMintedCount": InceptionMinter.getPublicMintCountPerAccount(address: address)
  }
}`

export async function getAccountMintInfo({ address }) {
  if (!address) return Promise.resolve(null)

  return fcl
    .send([fcl.script(CODE), fcl.args([fcl.arg(address, t.Address)])])
    .then(fcl.decode)
}
