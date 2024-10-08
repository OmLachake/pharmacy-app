import { useState } from "react"
import Button from "./Button";
import { MdPhotoCamera,MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/navigation";
import StockMedicineImage from '../Data/stock-medicine.png'
import Image from "next/image";

function SearchBar({onType}:{onType:(searchString:string)=>void}) {
  
  const [searchString, setSearchString] = useState('')
  const router=useRouter()

  const handleSearchStringChange = (e:React.SyntheticEvent) =>{
    let target = e.target as HTMLInputElement;
    setSearchString(target.value);
    onType(searchString)
  }
  

  return (
    <div>
        <div className="flex space-x-7 justify-between items-center w-full border-b border-b-gray-200 p-2">
            <div className="small rounded-sm flex justify-center items-center
            cursor-pointer hover:border-navy-blue-light border-gray-50  border      "
                onClick={()=>{router.push('/')}}
            >
                <MdArrowBackIosNew color='black' size={20}/>
                Back
            </div>
            <span className="flex justify-center items-center">
                <Image
                    src = {StockMedicineImage}
                    width={25}
                    height={25}
                    alt=""
                />
                <h1 className="text-lg text-navy-blue-light font-semibold"> STOCK</h1>
            </span>
            <span></span>
        </div>

        <div className="w-full container my-1 
        md:flex md:justify-between md:items-center md:space-x-5 
        ">
            <div className="relative py-2 flex space-x-2 w-full">
                <input 
                className='w-full px-2 py-1 rounded-md border  border-gray-400' 
                placeholder="Search" 
                type='text'
                onChange={handleSearchStringChange}
                
                />
                <Button label="SEARCH" onClick={()=>{}} />
            </div>

            <div className="bg-[rgb(210,210,210)] w-full flex p-2 justify-center items-center rounded-md 
             shadow-lg text-gray-600 hover:text-gray-900
             md:w-[30%]
             cursor-pointer
             ">
                <MdPhotoCamera color='black' size={20} className="p-0 flex justify-center items-center"/>
                <p>Scan Barcode</p>
            </div>
        </div>

    </div>
  )
}

export default SearchBar