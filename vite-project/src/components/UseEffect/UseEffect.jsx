import React from 'react'

const UseEffect = () => {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        console.log('useEffect called')
    }, []); // empty array means it will only run once

    // React.useEffect(() => {
    //     console.log('useEffect called')
    // }, [count]); // this will run every time count changes

  return (
    <div>
        {console.log('rendering UseEffect component')}
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect