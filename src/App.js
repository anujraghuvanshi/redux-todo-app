import React from 'react'
import logo from './logo.svg'
import './App.css'
import TodoWrapper from './components/TodoWrapper'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <TodoWrapper />
        </div>
    )
}

export default App
