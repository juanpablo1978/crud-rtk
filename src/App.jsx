import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/task-list' element={<PrivateRoute><TaskList/></PrivateRoute>} />
        <Route path='/task-form' element={<PrivateRoute><TaskForm/></PrivateRoute>} />
        <Route path='/edit-task/:id' element={<PrivateRoute><TaskForm/></PrivateRoute>} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App