
const hre = require("hardhat");


async function main() {
    const ADD = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
    const contract = await hre.ethers.getContractAt("Contract",ADD);
    await contract.Winner(function(error, result) {
        if (!error)console.log(result);
     });
    console.log("event captured")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
