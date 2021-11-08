const RichPigToken = artifacts.require("RichPigToken");
const MasterChef = artifacts.require("MasterChef");

module.exports = async function(deployer) {
  await deployer.deploy(RichPigToken);
  const richPigToken = await RichPigToken.deployed();
  await deployer.link(RichPigToken, MasterChef);
  const feeAddress = "0x650E5c6071f31065d7d5Bf6CaD5173819cA72c41";
  const tokenPerBlock = "1000000000000000000";
  const startBlock = 1;
  await deployer.deploy(MasterChef, richPigToken.address, feeAddress, tokenPerBlock, startBlock);
};
