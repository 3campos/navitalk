import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BioQuestionnairePage = () => {
  return (
    <>
      <Metadata title="BioQuestionnaire" description="BioQuestionnaire page" />

      <h1>BioQuestionnairePage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/BioQuestionnairePage/BioQuestionnairePage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>bioQuestionnaire</code>, link to me with
        `<Link to={routes.bioQuestionnaire()}>BioQuestionnaire</Link>`
      </p>
    </>
  )
}

export default BioQuestionnairePage
