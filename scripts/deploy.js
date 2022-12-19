
const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("Contract");
  console.log('1')
  const contract = await Contract.deploy();
  console.log('2')
  await contract.deployed();
  
  console.log(
    `Deployed to ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
