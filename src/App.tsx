import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        {/* можно добавить <Route path="*" element={<NotFound />} /> для 404 */}
      </Routes>
    </Router>
  )
}

export default App
