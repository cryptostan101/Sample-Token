// scripts/upgrade.js

async function main() {
  const proxyAddress = "0x3F084ba098CfD52A1b14D908f2e2D1c7ac190122";
  console.log("Upgrading proxy contract...");
  const SampleV2 = await ethers.getContractFactory("SampleV2");
  let sample = await upgrades.upgradeProxy(proxyAddress, SampleV2);
  console.log("Your upgrade proxy is complete", sample.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
