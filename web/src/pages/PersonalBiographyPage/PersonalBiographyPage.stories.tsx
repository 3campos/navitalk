import type { Meta, StoryObj } from '@storybook/react'

import PersonalBiographyPage from './PersonalBiographyPage'

const meta: Meta<typeof PersonalBiographyPage> = {
  component: PersonalBiographyPage,
}

export default meta

type Story = StoryObj<typeof PersonalBiographyPage>

export const Primary: Story = {}
