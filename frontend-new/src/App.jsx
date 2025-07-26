import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'aos/dist/aos.css'
import './App.css'

import HomePage from './pages/homePage'
import ErrorPage from './pages/errorPage'

import useAOS from './hooks/useAOS'

function App() {
  useAOS()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
