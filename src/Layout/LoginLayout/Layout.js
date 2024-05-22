import React from 'react'
import { Input, InputPassword } from '../../components/Input'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Layout({ children }) {
    return (
        <div className='h-full w-full bg-login py-12 px-36'>
            <div className='grid md:grid-cols-2 animate-slide-in-from-left  gap-5 h-full w-full rounded-[36px] bg-white animate-layout-in-from-horizontal'>
                <div className='rounded-[56px] animate-background-in-from-left bg-primary_main px-6 py-12 from-inherit gap-9 mx-20 my-12 flex flex-col md:visible invisible'>
                    <h1 className='text-white animate-slide-in-from-left font-semibold text-3xl justify-start text-wrap leading-10'>Simplify <br />management with<br />our dashboard.</h1>
                    <p className='text-white animate-slide-in-from-left font-regular text-xs text-wrap tracking-wide leading-5'>Simplify your pig farm management with our user-friendly admin dashboard</p>
                </div>

                <div className='h-full w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout