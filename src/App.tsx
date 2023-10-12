import './App.css'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route path='/' element={<Homepage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
