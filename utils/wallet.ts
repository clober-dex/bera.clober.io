import {
  Hash,
  PublicClient,
  SimulateContractParameters,
  WriteContractParameters,
} from 'viem'
import { GetWalletClientResult } from '@wagmi/core'

export async function writeContract(
  publicClient: PublicClient,
  walletClient: GetWalletClientResult,
  args: WriteContractParameters | SimulateContractParameters,
): Promise<Hash | undefined> {
  if (!walletClient) {
    return
  }
  const gas = await publicClient.estimateContractGas({
    ...args,
    account: walletClient.account.address,
  })
  const hash = await walletClient.writeContract({
    ...args,
    gas,
  })
  await publicClient.waitForTransactionReceipt({
    hash,
  })
  return hash
}
