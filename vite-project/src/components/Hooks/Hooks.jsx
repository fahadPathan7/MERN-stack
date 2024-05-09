import React from 'react'

function Hooks() {
  const [count, setCount] = React.useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Click me</button>
    </div>
  )
}

export default Hooks;
