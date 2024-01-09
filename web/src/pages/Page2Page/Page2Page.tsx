import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const Page2Page = () => {
  return (
    <>
      <Metadata title="Page2" description="Page2 page" />

      <h1>Page2Page</h1>
      <p>
        Find me in <code>./web/src/pages/Page2Page/Page2Page.tsx</code>
      </p>
      <p>
        My default route is named <code>page2</code>, link to me with `
        <Link to={routes.page2()}>Page2</Link>`
      </p>
    </>
  )
}

export default Page2Page
