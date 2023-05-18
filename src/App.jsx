import React from 'react'
import { NavBar } from './components/NavBar'
import { ProductSection } from './components/ProductSection'
import { useSyncCart } from './hooks/useSyncCart'
import "./assets/styles/style.scss"


function App() {
  const [cartItemNumber, handleCartSubmit, resetCartItemNumber] = useSyncCart()
  
  return (
    <>
      <NavBar itemNumber = {cartItemNumber} onReset = {resetCartItemNumber} />
      <ProductSection onSubmit = {handleCartSubmit} />
    </>
  )
}

export default App
