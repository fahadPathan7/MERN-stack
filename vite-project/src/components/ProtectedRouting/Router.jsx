import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from '../../../pages/Home'
import Contact from '../../../pages/Contact'
import About from '../../../pages/About'
import Error from '../../../pages/Error'

// protected
import Protected from './Protected'

// navbar
import Navbar from '../Navbar'

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <BrowserRouter>
    <Navbar />

    {/* Button to toggle login status (just for concept) */}
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Protected route. user need to login before navigating to this page */}
      <Route path="/contact" element={
        <Protected isLoggedIn={isLoggedIn}>
          <Contact />
        </Protected>
      } />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router