export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ?? '0x13881';

export const INFURA_ID =
  process.env.NEXT_PUBLIC_INFURA_ID ?? '60a7b2c16321439a917c9e74a994f7df';

export const GRAPH_HEALTH_ENDPOINT =
  'https://api.thegraph.com/index-node/graphql';

export const SUBGRAPH_NAME =
  process.env.NEXT_PUBLIC_SUBGRAPH_NAME ?? 'dan13ram/quest-chains-mumbai';

export const GRAPH_URL = `https://api.thegraph.com/subgraphs/name/${SUBGRAPH_NAME}`;

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const FACTORY_CONTRACT =
  process.env.NEXT_PUBLIC_FACTORY_CONTRACT ??
  '0x55975A9435D62DDC912f2816435d7617fD87647c';

export const WEB3_STORAGE_TOKEN = process.env.NEXT_WEB3_STORAGE_TOKEN;

export const DAOEasy_ADDRESS = '0x81143aD533e2fbB095CAFEBFf983FB3F9e00504B';

export const DAIx = '0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f';
