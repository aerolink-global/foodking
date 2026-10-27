// components/AddToCartButton.js
'use client'

import { useCart } from '@/contexts/CartContext'
import { useRouter } from 'next/navigation'

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart()
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    addToCart(product)
    router.push('/shop-cart')
  }

  return (
    <button onClick={handleClick} className="theme-btn-2">
      <i className="far fa-shopping-basket" />
      Add To Cart
    </button>
  )
}