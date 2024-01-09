import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="AboutPage page" />

      <h1>About Page</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.tsx</code>
      </p>
      <p>
        My default route is named <code>myPage</code>, link to me with `
        <Link to={routes.myPage()}>MyPage</Link>`
      </p>
    </>
  )
}

export default AboutPage
