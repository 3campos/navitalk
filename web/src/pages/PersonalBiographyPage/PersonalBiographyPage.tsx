import { Button, ButtonGroup, Grid } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PersonalBiographyPage = () => {
  return (
    <>
      <Metadata
        title="PersonalBiography"
        description="PersonalBiography page"
      />

      <h1>Personal Biography</h1>
      <Link to={routes.home()}>
        <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
          Home
        </Button>
      </Link>
      {/* <p>
        My default route is named <code>personalBiography</code>, link to me
        with `<Link to={routes.personalBiography()}>PersonalBiography</Link>`
      </p> */}
    </>
  )
}

export default PersonalBiographyPage
