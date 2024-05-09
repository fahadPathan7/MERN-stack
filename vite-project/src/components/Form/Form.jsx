import React, { useState } from "react";
import style from "./form.module.css";

export default function Form() {
  // using object
  const [ user, setUser ] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const fieldName = e.target.name;

    // using object
    setUser({ ...user, [fieldName]: e.target.value });

    // using computed property name and conditional statement
    // if (fieldName === "name") {
    //     setName(e.target.value);
    // }
    // else if (fieldName === "email") {
    //     setEmail(e.target.value);
    // }
    // else if (fieldName === "password") {
    //     setPassword(e.target.value);
    // }
  }

  const submitClicked = e => {
    console.log("Form is submitted");
    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={submitClicked}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Name</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Name</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
