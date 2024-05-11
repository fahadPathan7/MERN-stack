import React from 'react'

import { Navigate } from 'react-router-dom'

const Protected = ({isLoggedIn, children}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />
    // here replace is used to replace the current page in the history stack with the new page
  }

  return children;
}

export default Protected