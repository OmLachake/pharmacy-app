import { IProduct } from '@/atoms'
import ProductCard from '@/components/Cards/ProductCard'
import React from 'react'

function Counted({products}:{products:IProduct[]}) {
    const renderProductCards = () =>{
        return products.map(item=>{
            return <ProductCard product={item} key={item.barcode} type='count'/>
        })
      }

  return (
    <div className='cards-container'>
        {renderProductCards()}
    </div>
  )
}

export default Counted