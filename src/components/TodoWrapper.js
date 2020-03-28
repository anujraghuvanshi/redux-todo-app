import React from 'react'
import TodoList from './TodoList'

const TodoWrapper = () => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                }}
            >
                <input
                    type="text"
                    placeholder="Enter Todo Task Here"
                    ref={node => (input = node)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <TodoList />
        </div>
    )
}

export default TodoWrapper
