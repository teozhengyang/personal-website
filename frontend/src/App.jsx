import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'aos/dist/aos.css'
import './App.css'

import HomePage from './pages/homePage'
import BlogPage from './pages/blogPage'
import BlogSectionPage from './pages/blogSectionPage'
import ErrorPage from './pages/errorPage'
import Chatbot from './components/chatbot-section/chatbot'

import useAOS from './hooks/useAOS'

function App() {
  useAOS()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:section" element={<BlogSectionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  )
}

export default App
