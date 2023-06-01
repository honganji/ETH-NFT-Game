const hre = require('hardhat');

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

  const gameContract = await gameContractFactory.deploy(
    ['ZORO', 'NAMI', 'USOPP'], // キャラクターの名前
    [
      'https://i.imgur.com/TZEhCTX.png', // キャラクターの画像
      'https://i.imgur.com/WVAaMPA.png',
      'https://i.imgur.com/pCMZeiM.png',
    ],
    [100, 200, 300],
    [100, 50, 25],
    'CROCODILE', // Bossの名前
    'https://i.imgur.com/BehawOh.png', // Bossの画像
    10000, // Bossのhp
    50, // Bossの攻撃力
  );
  // ここでは、nftGame コントラクトが、
  // ローカルのブロックチェーンにデプロイされるまで待つ処理を行っています。
  const nftGame = await gameContract.deployed();

  const txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  console.log('Contract deployed to:', nftGame.address);
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
