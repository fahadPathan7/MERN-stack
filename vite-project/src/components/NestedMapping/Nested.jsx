import React from 'react';

const todos = [
    {
        name: "Fahad",
        email: "fahad@gmail.com",
        phones: [{home: "1234"}, {office: "5678"}]
    },
    {
        name: "Rahim",
        email: "rahim@gmail.com",
        phones: [{home: "4321"}, {office: "8765"}]
    },
    {
        name: "Karim",
        email: "karim@gmail.com",
        phones: [{home: "5678"}, {office: "4321"}]
    },
]

const Nested = () => {
    return (
        <div>
            {todos.map(todo => {
                const {name, email, phones} = todo;
                return (
                    <div key={email}>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <ul>
                            {phones.map(phone => {
                                const phoneType = Object.keys(phone)[0];
                                return (
                                    <li key={phoneType}>{`${phoneType}: ${phone[phoneType]}`}</li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default Nested;