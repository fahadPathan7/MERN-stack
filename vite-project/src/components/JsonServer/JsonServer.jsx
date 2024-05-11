import React, { useState, useEffect } from 'react'

import axios from 'axios'

const JsonServer = () => {
  const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        const response = await axios.get('http://localhost:3001/users');
        console.log(response.data)
        setUsers(response.data)
    }

    useEffect(() => {
        getAllUsers();
        }, [])

  return (
    <div>
        JsonServer
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        Name: {user.name} <br />
                        Email: {user.email}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JsonServer