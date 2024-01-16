import { Button, ButtonGroup, Grid } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

// This page will prompt the user with a series of questions for topics that will likely arise during a conversation with a local. Questions will relate to the user's occupation (job title, what services their company provides, and their total time in the industry, etc.), the city/state/country they are from, foods that they enjoy, whether this is their first time visiting Japan, what the occasion is for their visit (vacation, business trip, honeymoon, etc.), what they do in their spare time.

const BioQuestionnairePage = () => {
  return (
    <>
      <Metadata title="BioQuestionnaire" description="BioQuestionnaire page" />

      <h1>BioQuestionnairePage</h1>
      <Link to={routes.home()}>
        <Button variant="contained" sx={{ width: '10rem', margin: 1 }}>
          Home
        </Button>
      </Link>
      {/* <p>
        My default route is named <code>bioQuestionnaire</code>, link to me with
        `<Link to={routes.bioQuestionnaire()}>BioQuestionnaire</Link>`
      </p> */}
    </>
  )
}

export default BioQuestionnairePage
