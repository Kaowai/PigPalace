import React, { useEffect, useRef, useState } from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import { useMediaQuery } from 'react-responsive';

export default function Layout({ children }) {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
    const handleOpenMenu = () => {
        setOpen(!open);
        console.log("open", open);
    }

    useEffect(() => {
        setOpen(false);
    }, [])
    return (
        <div className='grid auto-rows-auto gap-2 relative'>
            <div className='fixed top-0 w-full z-[999]'>
                <Header onOpenMenu={handleOpenMenu} />
            </div>
            <div className='flex flex-row gap-1 w-full mt-12'>
                <div className={`fixed top-12 z-[998]`}>
                    <SideBar open={open} setOpen={handleOpenMenu} isTabletMid={isTabletMid} sidebarRef={sidebarRef}/>
                </div>
                <main className={`h-full w-full flex-1 px-[5rem] py-6 ${open && "block"}`}>{children}</main>
            </div>
        </div>
    )
}
