import { Meta, StoryObj } from '@storybook/react'

import '../styles/globals.css'
import { PathViz } from '../model/pathviz'

import OdosPathvizViewer from './odos-pathviz-viewer'

const dummyPathviz = {
  nodes: [
    {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      visible: true,
      width: 50,
    },
    {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      visible: true,
      width: 50,
    },
    {
      name: 'Arbitrum',
      symbol: 'ARB',
      decimals: 18,
      visible: true,
      width: 50,
    },
    {
      name: 'Bridged USDC',
      symbol: 'USDC.e',
      decimals: 6,
      visible: true,
      width: 50,
    },
    {
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      visible: true,
      width: 50,
    },
    {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      visible: true,
      width: 50,
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
      sourceExtend: false,
      targetExtend: false,
      label: 'Wrapped Ether',
      value: 100,
      nextValue: 100,
      stepValue: 100,
      in_value: 1,
      out_value: 1,
      edge_len: 1,
      sourceToken: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      targetToken: {
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
      },
    },
    {
      source: 1,
      target: 2,
      sourceExtend: false,
      targetExtend: false,
      label: 'PancakeSwap V3',
      value: 14.875230993311266,
      nextValue: 14.875230993311266,
      stepValue: 14.875230993311266,
      in_value: 0.14875230993311267,
      out_value: 284.83175224293086,
      edge_len: 1,
      sourceToken: {
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
      },
      targetToken: {
        name: 'Arbitrum',
        symbol: 'ARB',
        decimals: 18,
      },
    },
    {
      source: 1,
      target: 3,
      sourceExtend: false,
      targetExtend: false,
      label: 'ZyberSwap V3',
      value: 39.21731845860722,
      nextValue: 39.21731845860722,
      stepValue: 39.21731845860722,
      in_value: 0.3921731845860722,
      out_value: 706.1210128338628,
      edge_len: 1,
      sourceToken: {
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
      },
      targetToken: {
        name: 'Bridged USDC',
        symbol: 'USDC.e',
        decimals: 6,
      },
    },
    {
      source: 1,
      target: 3,
      sourceExtend: false,
      targetExtend: false,
      label: 'Kyberswap Elastic',
      value: 45.90745054808153,
      nextValue: 45.90745054808153,
      stepValue: 45.90745054808153,
      in_value: 0.45907450548081524,
      out_value: 826.5402254259917,
      edge_len: 1,
      sourceToken: {
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
      },
      targetToken: {
        name: 'Bridged USDC',
        symbol: 'USDC.e',
        decimals: 6,
      },
    },
    {
      source: 3,
      target: 4,
      sourceExtend: false,
      targetExtend: false,
      label: 'SpartaDex',
      value: 21.70950371403826,
      nextValue: 25.503157268282767,
      stepValue: 25.503157268282767,
      in_value: 390.87700598342076,
      out_value: 390.9070489160653,
      edge_len: 1,
      sourceToken: {
        name: 'Bridged USDC',
        symbol: 'USDC.e',
        decimals: 6,
      },
      targetToken: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
      },
    },
    {
      source: 3,
      target: 4,
      sourceExtend: false,
      targetExtend: false,
      label: 'Dodo V1',
      value: 63.41526529265049,
      nextValue: 74.49684273171724,
      stepValue: 74.49684273171724,
      in_value: 1141.7842322764338,
      out_value: 1141.5101307411503,
      edge_len: 1,
      sourceToken: {
        name: 'Bridged USDC',
        symbol: 'USDC.e',
        decimals: 6,
      },
      targetToken: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
      },
    },
    {
      source: 2,
      target: 4,
      sourceExtend: false,
      targetExtend: false,
      label: 'Uniswap V3',
      value: 14.875230993311266,
      nextValue: 100,
      stepValue: 100,
      in_value: 284.83175224293086,
      out_value: 267.84253455081915,
      edge_len: 1,
      sourceToken: {
        name: 'Arbitrum',
        symbol: 'ARB',
        decimals: 18,
      },
      targetToken: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
      },
    },
    {
      source: 4,
      target: 5,
      sourceExtend: false,
      targetExtend: false,
      label: 'Wombat',
      value: 100.00000000000003,
      nextValue: 100,
      stepValue: 100,
      in_value: 1800.259714208035,
      out_value: 1800.7334464684932,
      edge_len: 1,
      sourceToken: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
      },
      targetToken: {
        name: 'Dai Stablecoin',
        symbol: 'DAI',
        decimals: 18,
      },
    },
  ],
} as PathViz

export default {
  title: 'PathViz',
  component: OdosPathvizViewer,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof OdosPathvizViewer>

type Story = StoryObj<typeof OdosPathvizViewer>

export const Default: Story = {
  args: {
    pathVizData: dummyPathviz,
  },
}

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString()
}
