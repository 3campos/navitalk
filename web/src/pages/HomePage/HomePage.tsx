import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <Link to={routes.personalBiography()}>
            <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
              Biography
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Link to={routes.restaurant()}>
            <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
              Restaurant
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Link to={routes.hotel()}>
            <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
              Hotel
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Link to={routes.askALocal()}>
            <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
              Ask A Local
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Link to={routes.makeAFriend()}>
            <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
              Make A Friend
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
