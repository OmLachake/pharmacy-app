'use client'
import { IProduct } from '@/atoms';
import ProductCard from '@/components/Cards/ProductCard';


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