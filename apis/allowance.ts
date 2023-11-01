import { createPublicClient, http } from 'viem'

import { Currency } from '../model/currency'
import { IERC20__factory } from '../typechain'
import { CHAIN_IDS, supportChains } from '../constants/chain'

export async function fetchAllowance(
  chainId: CHAIN_IDS,
  currency: Currency,
  userAddress: `0x${string}`,
  spenderAddress: `0x${string}`,
): Promise<bigint> {
  const publicClient = createPublicClient({
    chain: supportChains.find((chain) => chain.id === chainId),
    transport: http(),
  })
  const [{ result: allowance }] = await publicClient.multicall({
    contracts: [
      {
        address: currency.address,
        abi: IERC20__factory.abi,
        functionName: 'allowance',
        args: [userAddress, spenderAddress],
      },
    ],
  })
  return allowance || 0n
}
