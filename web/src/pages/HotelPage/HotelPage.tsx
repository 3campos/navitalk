import { Button, ButtonGroup, Grid } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HotelPage = () => {
  return (
    <>
      <Metadata title="Hotel" description="Hotel page" />

      <h1>HotelPage</h1>
      <Link to={routes.home()}>
        <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
          Home
        </Button>
      </Link>
      {/* <p>
        My default route is named <code>hotel</code>, link to me with `
        <Link to={routes.hotel()}>Hotel</Link>`
      </p> */}
    </>
  )
}

export default HotelPage
