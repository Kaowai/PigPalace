import React from 'react'

function Layout({ children }) {
    return (
        <div className='h-full w-full bg-loginImage py-12 px-2 xl:py-12 xl:px-56 sm:py-10 sm:px-28 md:py-8 md:px-32'>
            <div className='xl:grid xl:grid-cols-2 gap-5 bg-white h-full w-full rounded-[56px]'>
                <div className='rounded-[48px] animate-slide-in-from-right  bg-gradient-to-r from-primary_dark to-primary_main px-8 py-12  gap-8 mx-12 my-12 xl:flex xl:flex-col xl:visible hidden'>
                    <h1 className='text-white animate-slide-in-from-right font-semibold text-3xl justify-start text-wrap leading-10'>Simplify <br />management with<br />our dashboard.</h1>
                    <p className='text-white animate-slide-in-from-right font-regular text-xs text-wrap tracking-wide leading-5'>Simplify your pig farm management with our user-friendly admin dashboard</p>
                </div>

                <div className='h-full w-full md:px-[52px] md:py-12 px-28 py-12'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout