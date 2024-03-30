import React from 'react'
import Homepage from './Components/HomePage/Homepage'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'


function App() {
  return (
    <div className='App'>
      <Homepage/>
      <Login/>
      <Register/>
    </div>
  )
}

export default App