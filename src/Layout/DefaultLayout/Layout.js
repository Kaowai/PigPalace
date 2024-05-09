import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <SideBar />
                <div>
                    {children}
                </div>
            </div>
        </div>

    )
}
