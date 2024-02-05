export type Currency = {
  address: `0x${string}`
  name: string
  symbol: string
  decimals: number
}

export function getLogo(currency?: Currency): string {
  if (!currency) {
    return ''
  } else if (currency.symbol.toLowerCase().includes('honey')) {
    return 'HONEY.svg'
  } else if (currency.symbol.toLowerCase().includes('bera')) {
    return 'BERA.svg'
  }
  return `https://assets.odos.xyz/tokens/${currency.symbol}.webp`
}
