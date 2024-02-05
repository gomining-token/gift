const GiftNftCollection = artifacts.require("GiftNftCollection");

module.exports = async function (deployer, network) {
  if (network === "test") {
    await deployer.deploy(GiftNftCollection);
  } else if (network === "goerli") {
    await deployer.deploy(GiftNftCollection);
  } else if (network === "testnet") {
    await deployer.deploy(GiftNftCollection);
  } else if (network === "live") {
    await deployer.deploy(GiftNftCollection);
  } else if (network === "bsc") {
    await deployer.deploy(GiftNftCollection);
  }
};
