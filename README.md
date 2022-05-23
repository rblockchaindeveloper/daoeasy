# DAO Quest

# Metis X Gitcoin Bounty - L2 Rollathon

`    },
    metis_local: {
      url: "http://localhost:8545",
      accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    
    },
    metis_stardust: {
      url: "https://stardust.metis.io/?owner=588",
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }  `
https://github.com/rblockchaindeveloper/daoeasy/blob/master/packages/contracts/hardhat.config.ts


## Available Scripts

In the project directory, you can run:

### Dapp

#### `yarn dapp:dev`

#### `yarn dapp:build`

#### `yarn dapp:start`

### Subgraph

#### `yarn subgraph:codegen`

#### `yarn subgraph:build`

#### `yarn subgraph:auth`

#### `yarn subgraph:deploy`
