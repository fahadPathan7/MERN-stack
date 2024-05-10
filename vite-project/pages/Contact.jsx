import React from 'react'

import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
  return (
    <div>
        Contact page <br />
        <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Contact