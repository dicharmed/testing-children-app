import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PicturesUpload } from './pages/PicturesUpload'
import { ROUTES } from './constants/routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.UPLOAD} element={<PicturesUpload />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  )
}

export default App
