import React, { useContext } from 'react'
import { UserContext } from './UseContext'

/*
    The useContext hook is used to access the context value that is passed from the parent component.
    The UserContext is imported from the UseContext file.
    The useContext hook is used to get the user and setUser from the UserContext.
    The setUser is used to set the user value to "Fahad Pathan".
    The user and email values are displayed in the JSX.
*/

const Component3 = () => {
    const { user, setUser, email } = useContext(UserContext); // get the values from the UserContext
    setUser("Fahad Pathan"); // set the user value to "Fahad Pathan" (got from the UserContext)
  return (
    <div>
        <h1>Component 3</h1>
        <h2>User: {user}</h2>
        <h2>Email: {email}</h2>
    </div>
  )
}

export default Component3