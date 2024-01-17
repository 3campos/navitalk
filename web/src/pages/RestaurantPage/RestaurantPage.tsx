import { Button, ButtonGroup, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RestaurantPage = () => {
  return (
    <>
      <Metadata title="Restaurant" description="Restaurant page" />
      {console.log(routes.home().slice(1))}
      <h1>Restaurant</h1>
      <Grid container>
        <Grid item xs={6} sm={6} md={6}>
          <Link to={routes.personalBiography()}>
            <Button variant="contained" sx={{ width: '8rem', margin: 1 }}>
              Biography
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Link to={routes.restaurant()}>
            <Button variant="contained" sx={{ width: '8rem', margin: 1 }}>
              Restaurant
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Link to={routes.hotel()}>
            <Button variant="contained" sx={{ width: '8rem', margin: 1 }}>
              Hotel
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Link to={routes.hotel()}>
            <Button variant="contained" sx={{ width: '8rem', margin: 1 }}>
              Hotel
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Box sx={{ mx: 'auto', width: 200 }}>
        <Link to={routes.home()}>
          <Button
            variant="contained"
            sx={{ justifyContent: 'center', width: '100%', mt: 1 }}
          >
            Home
          </Button>
        </Link>
      </Box>
      {/* <p>
        My default route is named <code>restaurant</code>, link to me with `
        <Link to={routes.restaurant()}>Restaurant</Link>`
      </p> */}
    </>
  )
}

export default RestaurantPage
