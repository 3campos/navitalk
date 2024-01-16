import { Button, ButtonGroup, Grid } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RestaurantPage = () => {
  return (
    <>
      <Metadata title="Restaurant" description="Restaurant page" />
      {console.log(routes.home().slice(1))}
      <h1>Restaurant</h1>
      <Link to={routes.home()}>
        <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
          Home
        </Button>
      </Link>
      {/* <p>
        My default route is named <code>restaurant</code>, link to me with `
        <Link to={routes.restaurant()}>Restaurant</Link>`
      </p> */}
    </>
  )
}

export default RestaurantPage
