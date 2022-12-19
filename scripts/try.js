
const hre = require("hardhat");


async function main() {
    const ADD = "0xb196fa3EE81ff809b66e96B8cEE5E8b301b48AA6";//the contract which call the original contract
    const contract = await hre.ethers.getContractAt("Contract",ADD);
    const tx  =  await contract.usecontract1()
    console.log(`transaction posted`);
    await tx.wait()
    console.log(`transaction completed`);

    // const ADD2 = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";//original contract emmit event
    // const contract2 = await hre.ethers.getContractAt("Contract",ADD2);
    // await contract2.Winner(function(error, result) {
    //     if (!error)console.log(result);
    //  });


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
