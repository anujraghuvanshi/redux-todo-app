import React from 'react'

const TodoList = () =>
    ['Anuj', 'Singh', 'Raghuvanshi'].map(item => (
        <div style={{ color: '#fff' }}>{item}</div>
    ))

export default TodoList
