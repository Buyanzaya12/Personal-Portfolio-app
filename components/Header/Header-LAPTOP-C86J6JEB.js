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
        <div className="flex justify-between align-items gap-4">
            <div className="text-white flex justify-between p-[16px] font-bold">{"<SS />"}</div>
            <div>
                {
                    navigations.map((nav) => (
                        <Link key={nav.link} href={nav.link} className="text-white flex gap-6">
                            {nav.name}
                        </Link>
                    ))
                }
            </div>
            <button onClick={openMenu}><Image src="/PP-pics/menu-bar.svg" width={24} height={24} /></button>
            <div>
                <div className={`fixed transition-all inset-0 bg-slate-500/90 ${open ? "block" : "hidden"}`} onClick={closeMenu}></div>
                <div className={`fixed top-0 bottom-0 transition-all w-64 text-black bg-slate-950 shadow-lg ${open ? "right-0" : "-right-full"}`}>
                <div className="yan12
                text-white flex justify-between p-[16px] font-bold">{"<SS />"}
                    <button onClick={closeMenu}><Image src="/PP-pics/close.svg" className="justify-end" width={24} height={24} /></button></div>
                </div>
                
                {
                    navigations.map((nav) => (
                        <Link key={nav.link} href={nav.link} className="text-white flex gap-6">
                            {nav.name}
                        </Link>
                    ))
                }
            
            </div>
        </div>

    )
    
}

