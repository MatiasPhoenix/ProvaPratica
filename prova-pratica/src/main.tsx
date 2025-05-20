import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Components/UserAreas/LoginPage'
import CartPage from './Components/UserAreas/CartPage'
import OrderPage from './Components/UserAreas/OrderPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<LoginPage />} />
        <Route path="/cart"   element={<CartPage  />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
