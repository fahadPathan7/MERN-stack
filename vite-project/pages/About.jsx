import React from 'react'

import { Helmet } from 'react-helmet'

import { useSearchParams } from 'react-router-dom'
const About = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      About
      <p>
        {searchParams.get('name')} <br />
        {searchParams.get('email')} <br />
      </p>
    </div>

  )
}

export default About