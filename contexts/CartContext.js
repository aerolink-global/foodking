'use client'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { 
        ...product, 
        quantity: 1,
        price: typeof product.price === 'string' ? 
          parseFloat(product.price.replace('$', '')) : product.price
      }]
    })
  }

  const incrementQuantity = (id) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decrementQuantity = (id) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider 
      value={{ 
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        calculateTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)