import React, { useState } from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import { useMediaQuery } from 'react-responsive';

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
        setOpen(!open);
    }

    return (
        <div className='md:grid auto-rows-auto gap-2 relative'>
            <div className='fixed top-0 w-full z-10'>
                <Header onOpenMenu={handleOpenMenu}/>
            </div>
            <div className='flex flex-row gap-1 w-full'>
                <div className={`fixed top-12 z-10 ${!open && "hidden"}`}>
                    <SideBar open={open} setOpen={setOpen}/>
                </div>
                <div className=' mt-12 px-12 py-6 w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}
