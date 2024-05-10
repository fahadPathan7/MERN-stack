import React from 'react'

import Component2 from './Component2'
import { UserContext } from './UseContext'

const Component1 = () => {
    const [user, setUser] = React.useState("Fahad");
    const [email, setEmail] = React.useState("fahad@gmail.com");
  return (
    /* UserContext.Provider is a wrapper component that accepts a value prop to be passed to consuming components that are descendants of this Provider. */
    <UserContext.Provider value={{ user, setUser, email, setEmail }}>
        <div>
            <Component2 />
        </div>
    </UserContext.Provider>
  );
};

export default Component1