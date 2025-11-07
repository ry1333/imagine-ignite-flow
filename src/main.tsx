import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './AppShell'
import Listen from './pages/Listen'
import Learn from './pages/Learn'
import Profile from './pages/Profile'
import Create from './pages/Create'
import './index.css'

function Router({ children }: { children: React.ReactNode }) {
  return import.meta.env.DEV ? <BrowserRouter>{children}</BrowserRouter> : <HashRouter>{children}</HashRouter>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Listen />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/create" element={<Create />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/listen" replace />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
