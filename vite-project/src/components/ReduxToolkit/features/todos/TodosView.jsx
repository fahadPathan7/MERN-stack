import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from './todosSlice'

const TodosView = () => {
    const { items, isLoading, error } = useSelector((state) => state.todos);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
    }, []);
    
  return (
    <div>
        <h2>Todos</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
            {items.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodosView