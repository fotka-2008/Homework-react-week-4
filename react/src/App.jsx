import { BrowserRouter, Routes, Route } from 'react-router'
import AuthFlow from './pages/AuthFlow'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <AuthFlow>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthFlow>
    </BrowserRouter>
  )
}

export default App
