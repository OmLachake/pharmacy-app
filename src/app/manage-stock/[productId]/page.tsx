'use client'

import { IProduct, ProductByIdSelector, userSelector } from "@/atoms"
import Button from "@/components/Button";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { MdEdit } from "react-icons/md";
import { LoadAuthFromLocalStorage } from "@/utils";
import EditableTable from '@/components/Table/EditableTable'

function ProductPage({params}:{params:{productId:string}}) {
    const router = useRouter()
    const setUser = useSetRecoilState(userSelector)

    const productId = decodeURIComponent(params.productId)
    const product = useRecoilValue(ProductByIdSelector(productId)); 
    const [modal, setModal] = useState(false);
    const  [localProduct, setLocalProduct] = useState<IProduct>()
    
    const [currentStockLocation, setCurrentStockLocation] = useState<{
        location:string,
        onHand:number,
    }>({
        location:'',
        onHand:0,
    })

    useEffect(() => {

        if(window){
            const user = LoadAuthFromLocalStorage();
            if(user!==null){
                setUser(user);
            }
        }   

        if(product){
            setLocalProduct(product as IProduct)
            const onHand = product?.stock.reduce((total,count)=>total+count.onHand,0) ?? 0;
            setCurrentStockLocation({location:'All Locations',onHand:onHand})
        }
           
    }, [])

    const renderModal = () =>{
       return <Modal
        isOpen={modal} 
        title="Update On Hand" 
        onClose={()=>setModal(prevState=>!prevState)}
        >

            <div className='container py-5'>
                <div className=' w-full h-full 
                flex flex-col justify-start items-start space-y-5
                '>
                    <h1 className='text-lg w-full font-bold'>{localProduct?.name}</h1>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-gray-500'>Department : 
                            <span className='text-navy-blue-light capitalize font-semibold'>{localProduct?.department}
                            </span>
                        </p>
                        
                        <p className='text-gray-500'>On Hand : 
                            <span className='text-navy-blue-light capitalize font-bold'>{currentStockLocation.onHand}
                            </span>
                        </p>
                    </div>

                    <div className='flex justify-center items-center w-full py-4 rounded-md'>
                        <EditableTable/>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <Button
                        label='CANCEL'
                        onClick={()=>setModal(prevState=>!prevState)}
                        action='none'
                        style='border'
                    />
                    
                    <Button 
                        label='UPDATE' 
                        onClick={()=>setModal(prevState=>!prevState)}
                        action='success'
                    />
                </div>
            </div>
        </Modal>
    };

    const renderProductDetails =()=>{
        return (
        <div className="product-details-container">

            <div className="product-field">
                <label>
                    Barcode
                </label>
                <input type='text' disabled defaultValue={product?.barcode}/>
            </div>

            <div className="product-field">
                <label>
                    Department
                </label>
                <input type='text' disabled defaultValue={product?.department}/>
            </div>

            <div className="product-field">
                <label>
                    Order List
                </label>
                <input type='text' disabled defaultValue={product?.orderlist}/>
            </div>

            <div className="product-field">
                <label>
                    Head Office Maintained
                </label>
                <input type='checkbox' disabled checked={product?.isHeadOfficeMaintained}/>
            </div>

            <div className="product-field">
                <label>
                    Last Received
                </label>
                <input type='date' disabled defaultValue={product?.lastReceived.toDateString()}/>
            </div>

            <div className="product-field">
                <label>
                    Last Sold
                </label>
                <input type='date' disabled defaultValue={product?.lastSold.toDateString()}/>
            </div>

            <div className="product-field">
                <label>
                    Trade
                </label>
                <input type='text' disabled defaultValue={"€" + product?.trade}/>
            </div>

            <div className="product-field">
                <label>
                    Retail
                </label>
                <input type='text' defaultValue={"€" + product?.retailPrice}/>
            </div>

            <div className="product-field">
                <label>
                    Stock Location
                </label>
                <input type='text' defaultValue={currentStockLocation?.location}/>
            </div>

            <div className="product-field">
                <label>
                    On Hand
                </label>
                <div className="flex w-[50%] justify-between">
                    <input type='number' className="inline-input" defaultValue={currentStockLocation?.onHand}/>
                    <div className='filled none small rounded-md flex justify-center 
                    items-center cursor-pointer'
                    onClick={()=>(setModal(true))}
                    >
                        <MdEdit size={20}/>
                    </div>
                </div>
            </div>

            <div className="product-field">
                <label>
                    Pack Size
                </label>
                <input type='text' defaultValue={10}/>
            </div>

            <div className="product-field">
                <label>
                    Print Label
                </label>
                <div className="flex w-[50%] justify-between">
                    <input type='checkbox' className="p-0" defaultChecked={product?.printLabel.print}/>
                    <div className="flex justify-between items-center space-x-0">
                        <label>Labels #</label>
                        <input type='number' className='text-center' defaultValue={product?.printLabel.labels}/>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center w-full'>
                    <Button
                        label='CANCEL'
                        onClick={()=>router.push('/manage-stock')}
                        action='none'
                        style='border'
                    />
                    
                    <Button 
                        label='UPDATE' 
                        onClick={()=>router.push('/manage-stock')}
                        action='success'
                    />
                </div>
        </div>) 
    }

    return (
        <div className='w-full h-full'>
            <Header/>
            <main className="p-5">
                <h1 className="product-details-title">{localProduct?.name}</h1>
                {/* Main Product Details */}
                {renderProductDetails()}
                {/* Update On Hand Modal */}
                {renderModal()}
            </main>
        </div>
    )
}

export default ProductPage