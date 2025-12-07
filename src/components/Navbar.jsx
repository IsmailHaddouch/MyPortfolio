import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import {cn} from "../lib/utils"
const navItems = [
    {  name: "Home", href:"#hero"},
    {  name: "About", href:"#about"},
    {  name: "Skills", href:"#skills"},
    {  name: "Projects", href:"#projects"},
    {  name: "Contact", href:"#contact"},

]

export const Navbar = () => {
const [isScrolled,setIsScrolled]=useState(false);
const [isMenuOpen,setIsMenuOpen]=useState(false);

useEffect(()=>{
    const handleScroll = () =>{
        setIsScrolled(window.scrollY > 10)
    };
   window.addEventListener("scroll",handleScroll);
   return()=>window.removeEventListener("scroll",handleScroll)
},[])
    return(
    <nav className={cn(
    "fixed w-full z-40 transition-all duration-300",
    isScrolled 
    ? "py-3 bg-background/80 shadow-xs backdrop-blur-md" 
    : "py-5 backdrop-blur-sm" 
    
    )}>
    
    <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center"
        href="#hero"
        >
    <span className="relative z-10" >
    {""}
    <span className="text-glow text-foreground">Haddouch Ismail </span> Portfolio
    </span>
        </a>
        {/*pour le desktop*/}
       
        <div className="hidden md:flex space-x-8">
  {navItems.map((item,key) => (
    <a 
      key={key} 
      href={item.href}
      className="text-foreground/80 hover:text-primary transition-colors duration-300"
    >
      {item.name}
    </a>
  ))}
</div>
     
    <button onClick={()=>setIsMenuOpen((prev)=>!prev)} 
    className="md:hidden p-2 text-foreground z-50"
    aria-label={isMenuOpen ? "Close Menu": "Open Menu"}
    >
        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>

     {/*pour mobile*/ }
<div className={cn(
    "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
    "flex flex-col items-center justify-center min-h-screen",
    "transition-all duration-300 md:hidden",
    isMenuOpen ? "opacity-100 pointer-events-auto" : 
    "opacity-0 pointer-events-none"
)}
>

<div className="flex flex-col space-y-8 text-xl items-center">
{navItems.map((item,key) => (
<a 
key={key} 
href={item.href}
className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
 onClick={()=>setIsMenuOpen(false)}
>
           {item.name}
     </a>
          )  )}
</div>
</div>
</div>
    
</nav>
    );
};