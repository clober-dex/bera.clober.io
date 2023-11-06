import React from 'react'
import { useAccount, useBalance, useQuery } from 'wagmi'
import { readContracts } from '@wagmi/core'
import { getAddress, isAddressEqual, zeroAddress } from 'viem'

import { Balances } from '../../model/balances'
import { IERC20__factory } from '../../typechain'
import { Currency } from '../../model/currency'
import { Prices } from '../../model/prices'
import { fetchCurrencies } from '../../apis/swap/currencies'
import { AGGREGATORS } from '../../constants/aggregators'
import { CHAIN_IDS } from '../../constants/chain'
import { fetchPrices } from '../../apis/swap/prices'
import { useChainContext } from '../chain-context'

type SwapCurrencyContext = {
  currencies: Currency[]
  prices: Prices
  balances: Balances
}

const Context = React.createContext<SwapCurrencyContext>({
  currencies: [],
  prices: {},
  balances: {},
})

export const SwapCurrencyProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { address: userAddress } = useAccount()
  const { data: balance } = useBalance({ address: userAddress })
  const { selectedChain } = useChainContext()

  const { data: currencies } = useQuery(
    ['swap-currencies', selectedChain],
    async () => fetchCurrencies(AGGREGATORS[selectedChain.id as CHAIN_IDS]),
  )

  const { data: prices } = useQuery(
    ['swap-prices', selectedChain],
    async () => {
      return fetchPrices(AGGREGATORS[selectedChain.id as CHAIN_IDS])
    },
    {
      refetchInterval: 10 * 1000,
      refetchIntervalInBackground: true,
    },
  )

  const { data: balances } = useQuery(
    ['swap-balances', userAddress, balance, currencies],
    async () => {
      if (!userAddress || !currencies) {
        return {}
      }
      const uniqueCurrencies = currencies
        .filter((currency) => !isAddressEqual(currency.address, zeroAddress))
        .filter(
          (currency, index, self) =>
            self.findIndex((c) => c.address === currency.address) === index,
        )
      const results = await readContracts({
        contracts: uniqueCurrencies.map((currency) => ({
          address: currency.address,
          abi: IERC20__factory.abi,
          functionName: 'balanceOf',
          args: [userAddress],
        })),
      })
      return results.reduce(
        (acc: {}, { result }, index: number) => {
          const currency = uniqueCurrencies[index]
          return {
            ...acc,
            [getAddress(currency.address)]: result ?? 0n,
          }
        },
        {
          [zeroAddress]: balance?.value ?? 0n,
        },
      )
    },
    {
      refetchInterval: 10 * 1000,
      refetchIntervalInBackground: true,
    },
  ) as { data: Balances }

  return (
    <Context.Provider
      value={{
        currencies: currencies ?? [],
        prices: prices ?? {},
        balances: balances ?? {},
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useSwapCurrencyContext = () =>
  React.useContext(Context) as SwapCurrencyContext
