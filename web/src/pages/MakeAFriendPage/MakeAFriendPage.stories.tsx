import type { Meta, StoryObj } from '@storybook/react'

import MakeAFriendPage from './MakeAFriendPage'

const meta: Meta<typeof MakeAFriendPage> = {
  component: MakeAFriendPage,
}

export default meta

type Story = StoryObj<typeof MakeAFriendPage>

export const Primary: Story = {}
