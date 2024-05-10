/*
    useRef is used to:
    1. Access the DOM element directly
    2. To access those elements which are not part of the react state or props and we want to access them directly.
*/

import React, { useRef } from "react";

const UseRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log(name, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRef;
