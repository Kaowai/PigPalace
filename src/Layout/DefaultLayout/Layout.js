import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

export default function Layout({ children }) {
    return (
        <div className='h-full w-full' style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridTemplateRows: 'auto 1fr' }}>
            <SideBar style={{ gridColumn: '1'} }/>
            <div className='w-full px-64 ml-2' style={{ gridColumn: '2', gridRow: '1' }}>
                <Header  />
            </div>
            <main className='h-full px-4 py-4 mt-16 ml-[16rem]  justify-center items-center' style={{ gridColumn: '2', gridRow: '2' }}>
                {children}
            </main>
        </div>
    )
}
