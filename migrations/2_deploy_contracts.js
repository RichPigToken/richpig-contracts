const RichPigToken = artifacts.require("RichPigToken");
const MasterChef = artifacts.require("MasterChef");

module.exports = async function(deployer) {
  await deployer.deploy(RichPigToken);
  const richPigToken = await RichPigToken.deployed();
  await deployer.link(RichPigToken, MasterChef);
  const feeAddress = "0xF3E0B0b7A57C70CB2876Aa6C763eB2668fC8BF20";
  const tokenPerBlock = "1000000000000000000";
  const startBlock = 1;
  await deployer.deploy(MasterChef, richPigToken.address, feeAddress, tokenPerBlock, startBlock);
};
