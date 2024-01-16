import { Button, ButtonGroup, Grid } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AskALocalPage = () => {
  return (
    <>
      <Metadata title="AskALocal" description="AskALocal page" />

      <h1>AskALocalPage</h1>
      <Link to={routes.home()}>
        <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
          Home
        </Button>
      </Link>
      {/* <p>
        My default route is named <code>askALocal</code>, link to me with `
        <Link to={routes.askALocal()}>AskALocal</Link>`
      </p> */}
    </>
  )
}

export default AskALocalPage
