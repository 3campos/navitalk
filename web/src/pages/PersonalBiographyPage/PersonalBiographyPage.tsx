import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PersonalBiographyPage = () => {
  return (
    <>
      <Metadata
        title="PersonalBiography"
        description="PersonalBiography page"
      />

      <h1>PersonalBiographyPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/PersonalBiographyPage/PersonalBiographyPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>personalBiography</code>, link to me
        with `<Link to={routes.personalBiography()}>PersonalBiography</Link>`
      </p>
    </>
  )
}

export default PersonalBiographyPage
