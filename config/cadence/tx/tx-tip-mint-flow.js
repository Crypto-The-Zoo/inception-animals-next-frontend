import * as fcl from "@onflow/fcl"
import { invariant } from "@onflow/util-invariant"
import { tx } from "../helper/tx"

const TRANSACTION =
  process.env.NEXT_PUBLIC_NET_TYPE === "mainnet"
    ? ""
    : `import FungibleToken from 0x9a0766d93b6608b7
    import NonFungibleToken from 0x631e88ae7f1d7c20
    import MetadataViews from 0x631e88ae7f1d7c20
    import FlowUtilityToken from 0x82ec283f88a62e65
    import InceptionAvatar from 0x3cc47434d5867b24
    import InceptionMinter from 0x3cc47434d5867b24
    
    
    transaction(merchantAccount: Address, setID: UInt64, expectedPrice: UFix64, numberOfTokens: UInt64) {
        let paymentVault: @FungibleToken.Vault
        let buyerInceptionAvatarCollection: &{InceptionAvatar.InceptionAvatarCollectionPublic}
        let balanceBeforeTransfer: UFix64
        let mainFlowVault: &FlowUtilityToken.Vault
        let buyerAddress: Address
    
        prepare(dapper: AuthAccount, buyer: AuthAccount) {
          self.buyerAddress = buyer.address
    
          // Initialize the buyer's InceptionAvatar collection if it is not already initialized
          if buyer.borrow<&InceptionAvatar.Collection>(from: InceptionAvatar.CollectionStoragePath) == nil {
                let collection <- InceptionAvatar.createEmptyCollection()
                buyer.save(<-collection, to: InceptionAvatar.CollectionStoragePath)
                buyer.link<&InceptionAvatar.Collection{NonFungibleToken.CollectionPublic, InceptionAvatar.InceptionAvatarCollectionPublic, MetadataViews.ResolverCollection}>(InceptionAvatar.CollectionPublicPath, target: InceptionAvatar.CollectionStoragePath)
            }
    
          // Get access to Dapper's FUT vault
          let salePrice = UFix64(numberOfTokens) * InceptionMinter.tipMintPriceInFlow
          self.mainFlowVault = dapper.borrow<&FlowUtilityToken.Vault>(from: /storage/flowUtilityTokenVault)
            ?? panic("Cannot borrow DapperUtilityCoin vault from dapper storage")
    
          // Withdraw the appropriate amount of FUT from the vault
          self.balanceBeforeTransfer = self.mainFlowVault.balance
          self.paymentVault <- self.mainFlowVault.withdraw(amount: salePrice)
    
          // Check that the price is what we expect
          if (expectedPrice != salePrice) {
            panic("Expected price does not match sale price")
          }
    
          self.buyerInceptionAvatarCollection = buyer
            .getCapability<&{InceptionAvatar.InceptionAvatarCollectionPublic}>(InceptionAvatar.CollectionPublicPath)
            .borrow()
            ?? panic("Could not borrow InceptionAvatar Collection from provided address")
        }
    
        pre {
          // Ensure legit merchant account
          merchantAccount == 0xc9bc19a2d0b153a3: "Malformed merchant account address"
        }
    
        execute {
          // mint public sale InceptionAvatar to buyer's account
          InceptionMinter.tipMintWithFUT(buyer: self.buyerAddress, setID: setID, paymentVault: <- self.paymentVault, merchantAccount: merchantAccount, numberOfTokens: numberOfTokens)
        }
    
        post {
          // Ensure there is no FUT leakage
          self.mainFlowVault.balance == self.balanceBeforeTransfer: "transaction would leak FUT"
        }
    }`

// prettier-ignore
export function tipMintWithFlow({expectedPrice, numberOfTokens}, opts = {}, updateToast) {
  invariant(expectedPrice != null, "-- expectedPrice required")
  invariant(numberOfTokens != null, "-- numberOfTokens required")

  const dapperAuthz = fcl.authz

  return tx(
    {
      cadence: TRANSACTION,
      args: (arg, t) => [
        arg(fcl.withPrefix(process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT_ADDRESS), t.Address),
        arg(1, t.UInt64),
        arg(expectedPrice, t.UFix64),
        arg(parseInt(numberOfTokens), t.UInt64),
      ],
      authorizations: [dapperAuthz, fcl.authz],
      limit: 1000,
    },
    opts,
    updateToast
  )
}
