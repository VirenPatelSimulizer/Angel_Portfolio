import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <HashRouter>
      <Background />
      <Navbar />
      <ScrollToTop />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
