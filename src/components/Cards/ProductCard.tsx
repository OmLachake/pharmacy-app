import { IProduct } from '@/atoms'
import React from 'react'
import Button from '../Button'
import {useRouter} from 'next/navigation'

export interface ICard{
    product:IProduct,
    type:'available' | 'count',
}

function ProductCard({product,type}: ICard) {
    const router=useRouter()

  const onHand = product.stock.reduce((total,count)=>total+count.onHand,0)
  return (
    <div className='border border-navy-blue rounded-md 
    hover:border-gray-700 p-2 flex flex-col justify-between items-start
    w-full
    '>
        <h1 className='text-sm text-bold text-navy-blue w-full'>{product.name}</h1>
        <div className='flex justify-between items-center w-full'>
            
            <div className='py-1 text-xs text-gray-500'>
                <p>Department : <span className='text-navy-blue-light font-bold'>{product.department}</span></p>
                <p>On Hand : <span className='text-navy-blue-light font-bold'>{onHand}</span></p>
            </div>

            {type=='available'? 
            
                <div className='flex justify-center items-center gap-x-2'>
                    <Button label="Zero" onClick={()=>{}} size='small' action='error'/>
                    <Button label="Count" onClick={()=>{router.push('/manage-stock/'+product.barcode)}} size='small' action='warn'/>
                </div>
            
            :
                <div className='py-1 text-xs text-gray-500'>
                    <p>Counted By : <span className='text-navy-blue-light font-bold'>Jane Doe</span></p>
                </div>
            }
        
        </div>
    </div>
  )
}

export default ProductCard