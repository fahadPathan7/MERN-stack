import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'
import Error from './Error'

const Apps = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} /> {/* 404 page. It will render whenever user routes to invalid path */}
      </Routes>
    </BrowserRouter>
  )
}

export default Apps