import { render } from '@redwoodjs/testing/web'

import AskALocalPage from './AskALocalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AskALocalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AskALocalPage />)
    }).not.toThrow()
  })
})
