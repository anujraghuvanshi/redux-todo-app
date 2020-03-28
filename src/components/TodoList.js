import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {
    return todos.map((todo, idx) => (
        <Todo key={idx} {...todo} onClick={() => toggleTodo(todo)} />
    ))
}

export default TodoList
