import AbcIcon from '@mui/icons-material/Abc'
import { Button } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TestPage = () => {
  return (
    <>
      <Metadata title="Test" description="Test page" />

      <h1>TestPage</h1>
      <p>
        Find me in <code>./web/src/pages/TestPage/TestPage.tsx</code>
      </p>
      <Button variant="contained">Hello World</Button>
      <AbcIcon fontSize="large" />
      <p>
        My default route is named <code>test</code>, link to me with `
        <Link to={routes.test()}>Test</Link>`
      </p>
    </>
  )
}

export default TestPage
