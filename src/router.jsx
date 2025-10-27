import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AuditResults from './pages/AuditResults.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/audit-results" element={<AuditResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
