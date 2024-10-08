'use client'

import { IoClose } from "react-icons/io5";


interface IModal{
    isOpen:boolean | false,
    title:string,
    onClose: () => void,
    children:React.ReactNode,
}




function Modal({isOpen=false,title,onClose,children}:IModal) {
    if(!isOpen) return null;
    
    return (
    <div 
        className={`overlay ${isOpen? 'flex justify-center items-center' : `hidden`}`}
        onClick={(e)=>{
            console.log('overlay click')
            e.stopPropagation();
            onClose();
        }}>

        <dialog open={isOpen} 
            className={`modal ${isOpen? 'opacity-100 block' : 'opacity-0 hidden'}`}
            onClick={(e)=>{
                e.stopPropagation()
            }}>

            <div className="
                border-b border-gray-300
                w-full p-3
                flex justify-between items-center
            ">
                <h1 className="font-semibold text-sm md:text-lg ">{title}</h1>
                <IoClose color="navy" size={20} onClick={onClose} className="cursor-pointer"/>
            </div>

            <div className="w-full h-fit">
                {children} 
            </div>
            
        </dialog>
    </div>
  )
}

export default Modal