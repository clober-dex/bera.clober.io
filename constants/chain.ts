import { Chain } from '../model/chain'

import { beraTestnetChain } from './dev-chain'

export const supportChains: Chain[] =
  process.env.BUILD === 'dev'
    ? [
        {
          ...beraTestnetChain,
          defaultGasPrice: 0n,
          expireIn: 240,
          icon: '/bera-chain-logo.svg',
        },
      ]
    : [
        {
          ...beraTestnetChain,
          defaultGasPrice: 0n,
          expireIn: 240,
          icon: '/bera-chain-logo.svg',
        },
      ]

export const findSupportChain = (chainId: number): Chain | undefined =>
  supportChains.find((chain) => chain.id === chainId)

export enum CHAIN_IDS {
  BERA_ARTIO = beraTestnetChain.id,
}
