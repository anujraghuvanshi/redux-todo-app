import React from 'react'
import { getTodosState } from '../redux/selectors'
import { connect } from 'react-redux'

const TodoList = ({ todos }) =>
    todos.map((item, idx) => (
        <div key={idx} style={{ color: '#fff' }}>
            {item.text}
        </div>
    ))

const mapStateToProps = state => {
    const todos = getTodosState(state)
    return { todos }
}

export default connect(mapStateToProps)(TodoList)
