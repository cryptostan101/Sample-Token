// scripts/deploy.js
async function main() {
  const Sample = await ethers.getContractFactory("Sample");
  console.log("Deploying Sample Contract ...");
  const sample = await upgrades.deployProxy(Sample, [42], {
    initializer: "store",
  });
  console.log("Sample contract deployed to:", sample.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
