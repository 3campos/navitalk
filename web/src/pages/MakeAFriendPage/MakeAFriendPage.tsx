import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MakeAFriendPage = () => {
  return (
    <>
      <Metadata title="MakeAFriend" description="MakeAFriend page" />

      <h1>MakeAFriendPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MakeAFriendPage/MakeAFriendPage.tsx</code>
      </p>
      <p>
        My default route is named <code>makeAFriend</code>, link to me with `
        <Link to={routes.makeAFriend()}>MakeAFriend</Link>`
      </p>
    </>
  )
}

export default MakeAFriendPage
