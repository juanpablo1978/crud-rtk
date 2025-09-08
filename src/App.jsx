import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main className='min-h-screen flex justify-center items-center bg-black text-white'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskList/>} />
        <Route path='task-form' element={<TaskForm/>} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App