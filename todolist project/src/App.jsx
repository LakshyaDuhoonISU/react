import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import DigitalClock from './components/DigitalClock'
import StopWatch from './components/StopWatch'
import ErrorPage from './components/ErrorPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartButtonBig from './components/CartButtonBig'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CartButtonBig/>} />
      {/* <ToDoList /> */}
      {/* <DigitalClock /> */}
      {/* <StopWatch /> */}
      <Route path='*' element= {<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
