import { Button, ButtonGroup, Grid } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MakeAFriendPage = () => {
  return (
    <>
      <Metadata title="MakeAFriend" description="MakeAFriend page" />

      <h1>MakeAFriendPage</h1>
      <Link to={routes.home()}>
        <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
          Home
        </Button>
      </Link>
      {/* <p>
        My default route is named <code>makeAFriend</code>, link to me with `
        <Link to={routes.makeAFriend()}>MakeAFriend</Link>`
      </p> */}
    </>
  )
}

export default MakeAFriendPage
