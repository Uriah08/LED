
import './App.css'
import Main from './components/Main'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/" element={<Main />}/>
      </Routes>
    </main>
  )
}

export default App
