import { render } from '@redwoodjs/testing/web'

import BioQuestionnairePage from './BioQuestionnairePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BioQuestionnairePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BioQuestionnairePage />)
    }).not.toThrow()
  })
})
