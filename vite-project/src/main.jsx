import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './providers/UserProvider.jsx'
import PageProvider from './providers/PageProvider.jsx'
import CartProvider from './providers/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <UserProvider>
      <PageProvider>
      <CartProvider>
        <App />
        </CartProvider>
      </PageProvider>
    </UserProvider>
    
  </React.StrictMode>,
)
