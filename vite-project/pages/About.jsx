import React from 'react'

import { useSearchParams } from 'react-router-dom'
const About = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>About
      <p>
        {searchParams.get('name')} <br />
        {searchParams.get('email')} <br />
      </p>
    </div>

  )
}

export default About