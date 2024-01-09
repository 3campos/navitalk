import { render } from '@redwoodjs/testing/web'

import Page2Page from './Page2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Page2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Page2Page />)
    }).not.toThrow()
  })
})
