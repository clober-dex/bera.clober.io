import { CHAIN_IDS } from './chain'

export const SUBGRAPH_URL: {
  [chain in CHAIN_IDS]: string
} = {
  [CHAIN_IDS.BERA_ARTIO]:
    'https://dev-bera.clober-api.com/subgraphs/name/core-v1-subgraph',
}
