// const hre = require('hardhat');

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy();
    const nftGame = await gameContract.deployed();

    console.log("Contract deployed to:", nftGame.address);
};
const runMain = async () => {
    try {
        await main();
    } catch (error) {
        console.log(error);
        throw new Error('Something bad happened!');
    }
};
runMain();