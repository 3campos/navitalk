import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AskALocalPage = () => {
  return (
    <>
      <Metadata title="AskALocal" description="AskALocal page" />

      <h1>AskALocalPage</h1>
      <p>
        Find me in <code>./web/src/pages/AskALocalPage/AskALocalPage.tsx</code>
      </p>
      <p>
        My default route is named <code>askALocal</code>, link to me with `
        <Link to={routes.askALocal()}>AskALocal</Link>`
      </p>
    </>
  )
}

export default AskALocalPage
