import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigations = [
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Work",
        link: "/work"
    },
    {
        name: "Testimonials",
        link: "/testimonials"
    },
    {
        name: "Contact",
        link: "/contact"
    },
];

export function Header() {
    let [open, setOpen] = useState(true);

    function openMenu() {
        setOpen(true);
    }
    function closeMenu() {
        setOpen(false);
    }
    
    return (
        <div className="flex justify-between gap-4">
            <div>
                
                {
                    navigations.map((nav) => (
                        <Link key={nav.link} href={nav.link} className="text-white web: opacity-0 web: w-[0px]">
                            {nav.name}
                        </Link>
                    ))
                }
            </div>
            <div className="flex mx-auto align-items justify-between p-[16px]">
            <div className="text-white text-3xl font-bold">{"<SS />"}</div>
            <button onClick={openMenu}><Image src="/PP-pics/menu-bar.svg" width={24} height={24} /></button>
            </div>
           
            
            <div>
                <div className={`fixed transition-all inset-0 bg-slate-500/90 ${open ? "block" : "hidden"}`} onClick={closeMenu}></div>
                <div className={`fixed top-0 bottom-0 transition-all w-64 text-black bg-slate-950 shadow-lg ${open ? "right-0" : "-right-full"}`}>
                    <div className="text-white flex align-items justify-between p-[16px]">{"<SS />"}
                    <button onClick={closeMenu}><Image src="/PP-pics/close.svg" className="" width={24} height={24} /></button></div>
                </div>
            </div>
        </div>

    )
    
}

