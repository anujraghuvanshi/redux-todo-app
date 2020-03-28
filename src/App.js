import React from 'react'
import logo from './logo.svg'
import './App.css'
import TodoWrapper from './components/TodoWrapper'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <TodoWrapper />
            <Footer />
        </div>
    )
}

export default App
