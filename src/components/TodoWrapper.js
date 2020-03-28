import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { addTodo } from '../redux/actions'

const TodoWrapper = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(addTodo(input.value))
                    input.value = ''
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

export default connect()(TodoWrapper)
