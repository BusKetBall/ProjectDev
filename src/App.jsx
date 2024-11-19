import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './์components/Navbar'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> {/* Wrap the entire app in BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
