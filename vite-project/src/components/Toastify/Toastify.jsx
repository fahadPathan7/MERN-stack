import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const handleClick = () => {
        toast('Hello from toastify');
    }
  return (
    <div>
      <h1>Toastify</h1>
      <button onClick={handleClick}>Click me</button>
        <ToastContainer /> {/* this is the container for the toast. it is needed for the toast to work. it should be placed at the root level of the component */}
    </div>
  )
}

export default Toastify