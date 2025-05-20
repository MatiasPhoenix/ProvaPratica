import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import UserPage from  './Pages/UserPage'
import CartPage from  './Pages/CartPage'
import OrderPage from './Pages/OrderPage'
import Dashboard from './Pages/Dashboard'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<LoginPage />} />
        <Route path="/user"      element={<UserPage  />} />
        <Route path="/cart"      element={<CartPage  />} />
        <Route path="/order"     element={<OrderPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
