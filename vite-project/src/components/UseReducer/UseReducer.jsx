/*
useReducer hook is used for:
- complex state logic
- to handle multiple sub-values of state
*/

import React, { useState, useReducer } from 'react'

const booksData = [
    {
        id: 1,
        title: 'book 1',
    },
    {
        id: 2,
        title: 'book 2',
    },
    {
        id: 3,
        title: 'book 3',
    },
]

const reducer = (state, action) => {
    if (action.type === 'ADD_BOOK') {
        const newBooks = [...state.books, action.payload.newBook]
        return { ...state, books: newBooks, isModalOpen: true, modalText: 'item added' }
    }
    else if (action.type === 'REMOVE_BOOK') {
        return { ...state, books: action.payload.newBooks, isModalOpen: true, modalText: 'item removed' }
    }
    return state;
}

const UseReducer = () => {
    const [book, setBook] = useState();

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = { id: new Date().getTime().toString(), title: book }
        dispatch({ type: 'ADD_BOOK', payload: { newBook }});
        setBook(' ');
    }

    const removeBook = (id) => {
        const newBooks = bookState.books.filter(book => book.id !== id)
        dispatch({ type: 'REMOVE_BOOK', payload: { newBooks }})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={book} onChange={(e) => {setBook(e.target.value)}} />
            <button type="submit">Submit</button>
        </form>
        <h3>{bookState.isModalOpen && bookState.modalText}</h3>
        <ul>
            {bookState.books.map(book => (
                <li key={book.id}>{book.title}
                <button onClick={() => {removeBook(book.id)}}>remove</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UseReducer