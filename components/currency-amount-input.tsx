import React, { useCallback, useMemo } from 'react'
import { parseUnits } from 'viem'
import Image from 'next/image'

import { Currency, getLogo } from '../model/currency'
import { BigDecimal, formatDollarValue, formatUnits } from '../utils/numbers'

import NumberInput from './number-input'

const CurrencyAmountInput = ({
  currency,
  value,
  onValueChange,
  balance,
  price,
  onCurrencyClick,
  ...props
}: {
  currency?: Currency
  value: string
  onValueChange: (value: string) => void
  balance: bigint
  price?: BigDecimal
  onCurrencyClick?: () => void
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  const decimals = useMemo(() => currency?.decimals ?? 18, [currency])

  const onBlur = useCallback(() => {
    const amount = parseUnits(value, decimals)
    onValueChange(amount ? formatUnits(amount, decimals) : '')
  }, [decimals, onValueChange, value])

  const onMaxClick = useCallback(() => {
    onValueChange(balance ? formatUnits(balance, currency?.decimals ?? 18) : '')
  }, [balance, currency?.decimals, onValueChange])

  return (
    <div className="flex flex-col bg-gray-800 rounded-lg p-3 gap-2">
      <div className="flex flex-1 justify-between gap-2">
        <NumberInput
          className="text-xl w-full sm:text-2xl bg-transparent placeholder-gray-500 text-white outline-none"
          value={value}
          onValueChange={onValueChange}
          onBlur={onBlur}
          placeholder="0.0000"
          {...props}
        />
        {onCurrencyClick ? (
          currency ? (
            <button
              className="flex w-fit items-center rounded-full bg-gray-700 py-1 pl-2 pr-3 gap-2"
              onClick={onCurrencyClick}
            >
              <div className="w-5 h-5 relative">
                <Image src={getLogo(currency)} alt={currency.name} fill />
              </div>
              <div className="text-sm sm:text-base">{currency.symbol}</div>
            </button>
          ) : (
            <button
              className="flex items-center rounded-full bg-green-500 text-white pl-3 pr-2 py-1 gap-2 text-sm sm:text-base"
              onClick={onCurrencyClick}
            >
              Select token{' '}
              <Image
                alt="down"
                src="/assets/triangle-down.svg"
                width={12}
                height={12}
              />
            </button>
          )
        ) : currency ? (
          <div className="flex w-fit items-center rounded-full bg-gray-700 py-1 pl-2 pr-3 gap-2">
            <div className="w-5 h-5 relative">
              <Image src={getLogo(currency)} alt={currency.name} fill />
            </div>
            <div className="text-sm sm:text-base text-white">
              {currency.symbol}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-gray-500 text-xs sm:text-sm">
          ~{formatDollarValue(parseUnits(value, decimals), decimals, price)}
        </div>
        {!props.disabled && currency ? (
          <div className="flex text-xs sm:text-sm gap-1 sm:gap-2">
            <div className="text-gray-500">Available</div>
            <div className="text-white">
              {formatUnits(balance, currency.decimals, price)}
            </div>
            <button className="text-blue-500" onClick={onMaxClick}>
              MAX
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default CurrencyAmountInput
