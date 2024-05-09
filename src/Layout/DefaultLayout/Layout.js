import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

export default function Layout({ children }) {
    return (
        <div className='flex gap-5'>
            <SideBar />
            <main className='max-w-5xl flex-1 mx-auto py-4'>{children}</main>
        </div>

    )
}
