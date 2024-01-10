import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HotelPage = () => {
  return (
    <>
      <Metadata title="Hotel" description="Hotel page" />

      <h1>HotelPage</h1>
      <p>
        Find me in <code>./web/src/pages/HotelPage/HotelPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hotel</code>, link to me with `
        <Link to={routes.hotel()}>Hotel</Link>`
      </p>
    </>
  )
}

export default HotelPage
