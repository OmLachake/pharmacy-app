'use client'
import { IProduct, ProductsState, userSelector } from "@/atoms";
import Header from "@/components/Header";
import { GetProducts, LoadAuthFromLocalStorage } from "@/utils";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Available from "./Available";
import Counted from "./Counted";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import debounce from "lodash.debounce";

export default function ManageStock() {
    const setUser = useSetRecoilState(userSelector)
    const [products,SetProducts] = useRecoilState(ProductsState)
    const [localProducts,setLocalProducts] = useState<IProduct[]>()

    useEffect(() => {
        if(window){
            const user = LoadAuthFromLocalStorage();
            if(user!==null){
                setUser(user);
            }
        }   

        const data = GetProducts<IProduct[]>()
        SetProducts(data)
        setLocalProducts(data)

        return()=>{
            deboundedFilter.cancel();
        }
    }, [])

    const GetTabs = (data:IProduct[]) =>{
        const tabs = [
            {
                title:'Available',
                component: ()=>{
                    return <div className="w-full h-full flex flex-col justify-start items-center space-y-3 py-4">
                        <Available products={data}/>
                    </div>
                }
            },
            {
                title:'Counted',
                component:()=>{
                    return <div className="w-full h-full flex flex-col justify-start items-center space-y-3 py-4">
                        <div className="md:w-[50%] w-full">
                            <Button label="Complete Stock Take" onClick={()=>{}} action='success' size='long'/>
                        </div>
                        <Counted products={data}/>
                    </div>
                }
            }
        ]
        return tabs
    }
    

    // Searching while typing using Debouncing
    const filterProducts = (searchString: string) => {
        if(searchString==''){
            setLocalProducts(products)
            return
        }
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchString.toLowerCase()) || product.department.toLowerCase().includes(searchString.toLowerCase())
        );
        setLocalProducts(filteredProducts);
      };
    
    const deboundedFilter = debounce(filterProducts,200)
    const handleSearch = (searchString:string)=>{
        deboundedFilter(searchString)
    }


  return (
    <div className='w-full h-full'>
        <Header/>
        <main className="p-0 ">
            <SearchBar onType={handleSearch} />
            <Tabs tabs = {GetTabs(localProducts ?? [])}/>
        </main>
    </div>
  );
}
