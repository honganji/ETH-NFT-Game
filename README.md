<p align="center">
  <br />
  <img width="100" src="./assets/eth-logo.png" alt="ETH Logo" width="400" height="100">
  <br/>
  <br />
  <p align="center">
<img src="https://img.shields.io/badge/Solidity-0.8.17-blue?logo=solidity"/>
<img src="https://img.shields.io/badge/hardhat-2.14.0-blue"/>
<img src="https://img.shields.io/badge/React-17.0.2-blue?logo=react"/>
<img src="https://img.shields.io/badge/-javascript-blue?logo=javascript"/>
</p>

<br/>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<br/>

## • Overview

This project is made following [this instructions](https://app.unchain.tech/learn/ETH-NFT-Game/). Engineer cmmunity `UNCHAIN` is one of the best one to learn blockchain development.

This is dapp that you can play simple game on Ethereum blockchain. You can mint character NFT and battle with a boss character.

## • Links

[Deployed here](https://eth-nft-game-client.vercel.app/)

[![Frontend](assets/frontend.png)](https://eth-nft-game-client.vercel.app/)

## • Launch

1. run `yarn install` in terminal.

2. make `.env` file under `packages/contract` and input your `Private Key` and `Alchemy HTTP Key` like below.

```
PRIVATE_KEY = <YOUR_PRIVATE_KEY>
STAGING_ALCHEMY_KEY = <ALCHEMY_HTTP_KEY>
```

3. run `yarn contract deploy` in terminal. The result would be like below.

```
Compiled 1 Solidity file successfully
Contract deployed to: 0x8ca0fF95BdD8c618DEAa0eE78Ef3A80bbBdecB83
```

4. change the line 1 in `packages/client/src/constants.js`.

```javascript
const CONTRACT_ADDRESS = '<YOUR_CONTRACT_ADDRESS>';
```

5. replace the json file in `packages/client/src/utils/Web3Mint.json` with the content of the json file in `packages/contract/artifacts/contracts/MyEpicGame.sol/MyEpicGame.json`.

6. Finally, run `yarn client start` in terminal and see how it works!
