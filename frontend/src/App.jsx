import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import 'aos/dist/aos.css'
import './App.css'

import HomePage from './pages/homePage'
import BlogLayout from './pages/blogLayout'
import BlogPage from './pages/blogPage'
import ErrorPage from './pages/errorPage'
import Chatbot from './components/chatbot-section/chatbot'
import { blogSections, getFirstSubsectionSlug } from './constants/blogSection'

import useAOS from './hooks/useAOS'

function App() {
  useAOS()

  const sectionKeys = Object.keys(blogSections)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Navigate to="/blog/sports" replace />} />
          {sectionKeys.map((sectionKey) => (
            <Route
              key={`${sectionKey}-index`}
              path={`${sectionKey}`}
              element={<Navigate to={`/blog/${sectionKey}/${getFirstSubsectionSlug(sectionKey)}`} replace />}
            />
          ))}
          {sectionKeys.map((sectionKey) => (
            <Route
              key={`${sectionKey}-subsection`}
              path={`${sectionKey}/:subsectionSlug`}
              element={<BlogPage sectionKey={sectionKey} />}
            />
          ))}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  )
}

export default App
