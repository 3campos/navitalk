import { render } from '@redwoodjs/testing/web'

import MakeAFriendPage from './MakeAFriendPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MakeAFriendPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MakeAFriendPage />)
    }).not.toThrow()
  })
})
