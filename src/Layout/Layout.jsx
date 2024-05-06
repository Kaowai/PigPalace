import React from 'react'

function Layout({children}) {
    return (
        <>
            <div className='w-full p-4 h-full grid grid-cols-9 gap-2 bg-[url("../public/background.png")] bg-left-bottom bg-no-repeat bg-cover '>
                <div className='col-span-5 h-screen flex relative'>
                    <p className='mx-10 my-4 place-items-start font-bold italic text-other20 text-4xl cursor-pointer'>PigPalace</p>
                    <div className='absolute flex-col bottom-0 h-1/4 w-4/6'>
                        <p className='title text-white mx-10 mt-8 text-6xl'>Farmmy Canxi</p>
                        <p className='text-white mx-10 my-2 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta facilis dignissimos optio! Vitae modi, veritatis quam deserunt aut repellat.</p>
                    </div>
                </div>
                <div className='col-span-4 h-full w-full flex-col bg-other40 rounded-2xl'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout