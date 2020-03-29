import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map((todo, idx) => (
            <Todo key={idx} {...todo} onClick={() => toggleTodo(todo)} />
        ))}
    </ul>
)

export default TodoList
