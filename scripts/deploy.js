const { ethers } = require("hardhat")

async function main() {
  /**
   * @dev A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
   * so nftContract here is a factory for instances of our GameItem contract.
   */
  const nftContract = await ethers.getContractFactory("GameItem")

  /**
   * @dev deploy the contract
   */
  const deployedNFTContract = await nftContract.deploy()

  /**
   * @dev print the address of the deployed contract
   */
  console.log("NFT Contract Address", deployedNFTContract.address)
}

/**
 * @dev Call the main function
 */
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
