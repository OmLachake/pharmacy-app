'use client'
import { userSelector } from "@/atoms";
import Header from "@/components/Header";
import NavigationLinks from "@/components/NavigationLink";
import Profile from "@/components/Profile";
import { LoadAuthFromLocalStorage } from "@/utils";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function Home() {
    const setUser = useSetRecoilState(userSelector)
    
    useEffect(() => {
      if(window){
          const user = LoadAuthFromLocalStorage();
          if(user!==null){
              setUser(user);
          }
      }
    }, [])

    
  return (
    <div className='w-full h-full'>
        <Header/>
        <main className="py-10 my-10">
            <Profile/>
            <NavigationLinks/>
        </main>
    </div>
  );
}
