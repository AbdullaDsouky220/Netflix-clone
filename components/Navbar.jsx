import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarItem from "../components/NavbarItem";
import MobileMenu from "../components/MobileMenu";
import AccountsMenu from "../components/AccountsMenu";
import logo from "../public/images/logo.png";
const Navbar = () => {
  const listItems = [
    "Home",
    "characters",
    "Films",
    "New &Popular",
    "Browse by languages",
    "My List",
  ];

  const [showBackground,setShowBackround]=useState(false)

  useEffect(() => {
    const handler=()=>{
      if(window.scrollY >=65){
setShowBackround(true)
console.log('change',window.scrollY);
}else {
  setShowBackround(false)
  console.log(window.scrollY);

      }
    
    }
    window.addEventListener('scroll',handler)
    return () => {
      window.removeEventListener('scroll',handler)
    }
    
  }
  , [setShowBackround])
  
  return (
    <div className={`
    z-40
    flex flex-row items-center justify-between 
     text-white
     sticky top-0
     lg:w-auto px-1 lg:px-16
     transition
     duration-150
     ${showBackground?'bg-zinc-900': '' }`}>
    <div className="flex flex-row items-center" >

      <div className=" py-4 px-4 mr-10">
        <Image src={logo} height={100} width={100} alt="image" />
      </div>
        {/* list for pc */}
        <div className=" px-8 hidden md:flex flex-row gap-4 text-sm text-slate-200">
          {listItems.map((item) => (
            <NavbarItem key={item} label={item} styles="hover:text-slate-400 transition cursor-pointer" />
            ))}
        </div>
        {/* list for mobile*/}
        <MobileMenu />
            </div>
        <AccountsMenu />
        {/* </div> */}
    </div>
  );
};

export default Navbar;
