import type { Meta, StoryObj } from '@storybook/react'

import HotelPage from './HotelPage'

const meta: Meta<typeof HotelPage> = {
  component: HotelPage,
}

export default meta

type Story = StoryObj<typeof HotelPage>

export const Primary: Story = {}
