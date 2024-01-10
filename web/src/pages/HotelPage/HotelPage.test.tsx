import { render } from '@redwoodjs/testing/web'

import HotelPage from './HotelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HotelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HotelPage />)
    }).not.toThrow()
  })
})
