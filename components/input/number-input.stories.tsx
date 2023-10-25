import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import '../../styles/globals.css'
import NumberInput from './number-input'

export default {
  title: 'NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => (
    <NumberInput
      className="text-xl w-full sm:text-2xl bg-transparent placeholder-gray-500 text-white outline-none"
      {...args}
    />
  ),
} as Meta<typeof NumberInput>

type Story = StoryObj<typeof NumberInput>
export const Default: Story = {
  args: {
    value: '100000',
    placeholder: '0.0000',
    onChange: () => {},
    supportNegative: false,
  },
}

export const Negative: Story = {
  args: {
    value: '-100000',
    placeholder: '0.0000',
    onChange: () => {},
    supportNegative: false,
  },
}
