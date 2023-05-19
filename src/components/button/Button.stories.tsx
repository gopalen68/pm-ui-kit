import type { Meta, StoryObj } from '@storybook/react'

import { Size } from '../types'
import { Button } from './button'
import { ButtonVariant } from './types'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: ButtonVariant.solid,
    size: Size.md,
  },
}
