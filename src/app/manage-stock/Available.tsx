'use client'
import { IProduct } from '@/atoms';
import Button from '@/components/Button';
import ProductCard from '@/components/Cards/ProductCard';

import Modal from '@/components/Modal';
import { useState } from 'react'

function Available({products}:{products:IProduct[]}) {
 
  
  const renderProductCards = () =>{
    return products.map(item=>{
        return <ProductCard product={item} key={item.barcode} type='available'/>
    })
  }

  return(
    <div className='cards-container
    '>

        {renderProductCards()}
        
        
    </div>
  )

}

export default Available