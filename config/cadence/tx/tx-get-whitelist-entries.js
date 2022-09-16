import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

const CODE = `import InceptionMinter from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}

pub fun main(address: Address): UInt64 {
  let whitelistAccounts = InceptionMinter.getWhitelistedAccounts()
  return whitelistAccounts[address] ?? 0
}`

export async function getWhitelistEntriesByAddress({ address }) {
  if (!address) return Promise.resolve(null)
  return fcl
    .send([fcl.script(CODE), fcl.args([fcl.arg(address, t.Address)])])
    .then(fcl.decode)
}
