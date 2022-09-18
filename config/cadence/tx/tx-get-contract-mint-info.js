import * as fcl from "@onflow/fcl"

const CODE = `import InceptionAvatar from ${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}

pub fun main(): {String: UInt64} {
  return {
    "totalMinted": InceptionAvatar.totalSupply
  }
}`

export async function getContractMintInfo() {
  return fcl.send([fcl.script(CODE)]).then(fcl.decode)
}
