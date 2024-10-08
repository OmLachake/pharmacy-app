import Head from "next/head";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { AuthState, IsLoggedIn } from "@/atoms";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import logo from '../app/logo.png'
import Image from "next/image";
import Button from "./Button";
function Header() {
  const router = useRouter()
  const [sideMenu, setSideMenu] = useState(false)
  const isLoggedIn= useRecoilValue(IsLoggedIn)
  const resetAuth = useResetRecoilState(AuthState)


//   NOTE: Uncomment this when actually submitting.
  useEffect(()=>{
    if(!isLoggedIn){
        router.push('/signin')
    }
  },[isLoggedIn])

  const toggleSideMenu = () => {
    setSideMenu((prevState)=>(!prevState));
  };

  const SignOut = () =>{
    toggleSideMenu()
    resetAuth();
    window.sessionStorage.clear()
  };

  const renderSideMenuBar = () => {
    return (
      <div
        className={`${
          sideMenu ? `translate-x-[100%]` : "translate-x-[-100%]"
        } side-menu-mobile`}
      >
        <div className="flex space-x-7 justify-start items-center w-full border-b border-b-gray-200 p-2">
            <button className="outline-none"  onClick={toggleSideMenu}>
                <IoClose color="navy" size={30}/> 
            </button>
        </div>
        <div className="flex flex-col justify-start items-center space-y-5  px-10 py-10">
            <Button 
                label="Profile" 
                size="long" 
                onClick={()=>{
                    toggleSideMenu()
                    
                }} 
                style="border"
            />


            <Button 
                label="Sign Out" 
                size="long" 
                onClick={SignOut}
                action="none" 
                style="border"
            />

        </div>

      </div>
    );
  };

  const renderHamburgerIcon = () => {
    return (
      <div className="md:hidden flex items-center justify-between">
        <div
          className="md:hidden flex items-center px-2 py-2"
          onClick={toggleSideMenu}
        >
          <button className="outline-none">
          {!sideMenu? <IoMenu color="navy" size={30}/> : <IoClose color="navy" size={30}/> }
          </button>
        </div>
      </div>
    );
  };

  const renderNavLinks = () => {
    return (
      <div className="flex space-x-7 justify-end items-center w-full">
        <div className="w-full h-full hidden md:flex items-center justify-between">
          <Link href="/">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <Image
              src={logo}
              width={150}
              height={40}
              className="cursor-pointer object-contain min-w-[100px] min-h-[40px] "
              alt="McLernons Logo"
              quality={100}

            />
          </Link>

          <div className="w-[30%] h-full hidden md:flex justify-around space-x-4">
            <Button 
                label="Profile" 
                size="long" 
                onClick={()=>{
                    toggleSideMenu()
                    
                }} 
                style="border"
            />


            <Button 
                label="Sign Out" 
                size="long" 
                onClick={SignOut}
                action="none" 
                style="border"
            />
            </div>


        </div>

        <Link href={"/"}>
          <div className="w-full h-full flex md:hidden ">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <Image
              src={logo}
              width={40}
              height={30}
              className="cursor-pointerobject-contain min-w-[100px] min-h-[40px] cursor-pointer"
              alt="McLernons Logo"
              quality={100}
            />
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div>
        
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>


      <header className="relative">
        <div className="flex justify-between items-center w-full border">
          {renderHamburgerIcon()}
          {renderNavLinks()}
        </div>
        {renderSideMenuBar()}
      </header>
    </div>
  );
}

export default Header;