// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
interface Contract1 {function attempt() external;}

contract Contract {
   address add = 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502;
   function usecontract1() public{
      //   (bool s, ) = contract1.call(abi.encodeWithSignature("attempt()", 22));
      //   require(s);
      Contract1(add).attempt();
   }
}
