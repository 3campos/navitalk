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
      <Route path="/page2" page={Page2Page} name="page2" />
      <Route path="/my-page" page={MyPagePage} name="myPage" />
      <Route path="/about" page={AboutPage} name="About" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
