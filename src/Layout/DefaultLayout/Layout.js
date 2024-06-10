import React, { useEffect, useRef, useState } from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import { useMediaQuery } from 'react-responsive';

export default function Layout({ children }) {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
    const handleOpenMenu = () => {
        if (isTabletMid) {
            setOpen(!open);
        }
        console.log('open', open);
    }
    return (
        <div className='grid auto-rows-auto gap-2 relative h-full w-full'>
            <div className='fixed top-0 w-full z-[999]'>
                <Header onOpenMenu={handleOpenMenu} />
            </div>
            <div className='flex flex-row gap-1 w-full h-full px-2 md:px-0'>
                <div className={`fixed top-12 z-[998]`}>
                    <SideBar open={open} setOpen={handleOpenMenu} isTabletMid={isTabletMid} sidebarRef={sidebarRef} />
                </div>
                <main className={`flex flex-col h-screen overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 flex-1 pr-8 pt-16 pb-6 md:pl-[18rem] pl-6} bottom-6`}>
                    <div className='flex-1'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
