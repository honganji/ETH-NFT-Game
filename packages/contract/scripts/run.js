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
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
  // 3体のNFTキャラクターの中から、3番目のキャラクターを Mint しています。
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // 1回目の攻撃: attackBoss 関数を追加
  txn = await gameContract.attackBoss();
  await txn.wait();

  // 2回目の攻撃: attackBoss 関数を追加
  txn = await gameContract.attackBoss();
  await txn.wait();

  // NFTのURIの値を取得します。tokenURI は ERC721 から継承した関数です。
  const returnedTokenUri = await gameContract.tokenURI(1);
  console.log('Token URI:', returnedTokenUri);
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
