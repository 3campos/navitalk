import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RestaurantPage = () => {
  return (
    <>
      <Metadata title="Restaurant" description="Restaurant page" />

      <h1>RestaurantPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RestaurantPage/RestaurantPage.tsx</code>
      </p>
      <p>
        My default route is named <code>restaurant</code>, link to me with `
        <Link to={routes.restaurant()}>Restaurant</Link>`
      </p>
    </>
  )
}

export default RestaurantPage
