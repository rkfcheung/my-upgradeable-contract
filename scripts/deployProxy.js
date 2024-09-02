const { ethers, upgrades } = require("hardhat");

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.waitForDeployment();

  const proxyAddress = await proxy.getAddress();
  console.log("Proxy contract address: " + proxyAddress);
  // Proxy contract address: 0x28Ec8a281D4dab2df5Ab2CD4aA96e3e50E61570A

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("Implementation contract address: " + implementationAddress);
  // Implementation contract address: 0x2ba67aDF6F0C4C3444D0DaBbC393F01CF69CAEA5
}

main();
