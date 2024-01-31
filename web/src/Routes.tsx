// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/bio-questionnaire" page={BioQuestionnairePage} name="bioQuestionnaire" />
      {/* <Route path="/" page={HomePage} name="home" /> */}
      <Route path="/test" page={TestPage} name="test" />
      <Route path="/personal-biography" page={PersonalBiographyPage} name="personalBiography" />
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/make-a-friend" page={MakeAFriendPage} name="makeAFriend" />
      <Route path="/ask-a-local" page={AskALocalPage} name="askALocal" />
      <Route path="/hotel" page={HotelPage} name="hotel" />
      <Route path="/restaurant" page={RestaurantPage} name="restaurant" />
      <Route path="/page2" page={Page2Page} name="page2" />
      <Route path="/my-page" page={MyPagePage} name="myPage" />
      <Route path="/about" page={AboutPage} name="About" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
