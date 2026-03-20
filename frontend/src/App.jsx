import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'aos/dist/aos.css'

import PortfolioPage from './pages/portfolio-page/portfolioPage'
import BlogOverviewPage from './pages/blog-page/blogOverviewPage'
import BlogSectionPage from './pages/blog-page/blogSectionPage'
import ErrorPage from './pages/error-page/errorPage'
import Chatbot from './components/chatbot-section/chatbot'

import useAOS from './hooks/useAOS'

function App() {
  useAOS()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogOverviewPage />} />
        <Route path="/blog/:section" element={<BlogSectionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  )
}

export default App
