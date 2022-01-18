// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { Contract } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { config, ethers } from "hardhat";
import fs from "fs";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  fs.unlinkSync(`${config.paths.artifacts}/contracts/contractAddress.ts`);

  // We get the contract to deploy
  const [owner] = await ethers.getSigners();

  const MulticallContract = await ethers.getContractFactory("Multicall");
  const multicallContract = await MulticallContract.deploy();
  await multicallContract.deployed();
  saveFrontendFiles(multicallContract, "MulticallContract");
  console.log("Multicall deployed to:", multicallContract.address);

  const Token = await ethers.getContractFactory("Token", owner);
  const tokenContract = await Token.deploy("MYTOKEN", "MTK", parseEther("100"));
  await tokenContract.deployed();
  saveFrontendFiles(tokenContract, "TokenContract");
  console.log("Token deployed to:", tokenContract.address);
}

// https://github.com/nomiclabs/hardhat-hackathon-boilerplate/blob/master/scripts/deploy.js
function saveFrontendFiles(contract: Contract, contractName: string) {
  fs.appendFileSync(
    `${config.paths.artifacts}/contracts/contractAddress.ts`,
    `export const ${contractName} = '${contract.address}'\n`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
