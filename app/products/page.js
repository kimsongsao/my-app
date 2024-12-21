import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import React from 'react'

function Product() {
  return (
    <div className="bg-white font-[family-name:var(--font-geist-sans)]">
        <Header/>
        <ProductList/>
    </div>
  )
}

export default Product