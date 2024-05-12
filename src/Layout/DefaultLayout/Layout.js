import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

export default function Layout({ children }) {
    return (
        <div className='flex gap-5'>
            <SideBar />
            <div className='flex flex-col w-full'>
                <Header />
                <main className=' justify-center items-center w-full flex-1 mx-auto py-4'>
                    {children}
                </main>
            </div>

        </div >

    )
}
