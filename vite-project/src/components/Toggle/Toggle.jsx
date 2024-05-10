import React, {useState} from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <div>
        {toggle ? <h1>Toggle Me</h1> : null}
        <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Toggle