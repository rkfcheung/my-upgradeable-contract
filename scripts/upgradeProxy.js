const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x28Ec8a281D4dab2df5Ab2CD4aA96e3e50E61570A";

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  const owner = await upgraded.owner();
  console.log("The current contract owner is: " + owner);
  // The current contract owner is: 0x9c9edA3A26A0d4563570c03880e68c816E06Ac8F
  console.log("Implementation contract address: " + implementationAddress);
  // Implementation contract address: 0x2ba67aDF6F0C4C3444D0DaBbC393F01CF69CAEA5
}

main();
