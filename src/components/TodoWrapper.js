import React from 'react'
import { connect } from 'react-redux'
import VisibleTodoList from './VisibleTodoList'
import { addTodo } from '../redux/actions'

const TodoWrapper = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (input.value.trim() === '') return
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
            <VisibleTodoList />
        </div>
    )
}

export default connect()(TodoWrapper)
