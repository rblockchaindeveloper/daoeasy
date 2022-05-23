import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

import dotenv from 'dotenv';
import { HardhatUserConfig, task } from 'hardhat/config';

const chainIds = {
  ganache: 5777,
  goerli: 5,
  hardhat: 7545,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  bscTestnet: 97,
  bscMainnet: 56,
  polygonMumbai: 80001,
  polygon: 137,
  ropsten: 3,
};
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (_args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: '0.8.13',
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygon: {
      url: 'https://rpc-mainnet.maticvigil.com',
      chainId: chainIds["polygonMumbai"],
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygonMumbai: {
      url: 'https://speedy-nodes-nyc.moralis.io/b80f5d2ee82f6cefad759c9d/polygon/mumbai',
      chainId: chainIds["polygonMumbai"],
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    metis_local: {
      url: "http://localhost:8545",
      accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    
    },
    metis_stardust: {
      url: "https://stardust.metis.io/?owner=588",
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }  
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    },
  },
  typechain: {
    outDir: 'types',
  },
};

export default config;
